const readline = require("readline");
const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const ora = require("ora");
const { Worker } = require("worker_threads");
const i18n = require("./i18n");
// pkg会识别这行，导入asar.js文件
require("./asar");
// asar路径
const asarPath = path.resolve("./resources", "app.asar");
// 备份路径
const backPath = path.resolve("./resources", "clash-windows-sinicization");
// 临时文件
const tmpPath = path.join(backPath, "tmp");
// 解压后的electron路径
const extractPath = path.join(tmpPath, "dist", "electron");

const log = {
  blue(...params) {
    console.log(chalk.blue(...params));
  },
  red(...params) {
    console.log("\n", chalk.red(...params), "\n");
  },
  green(...params) {
    console.log(chalk.green(...params));
  },
  magenta(...params) {
    console.log(chalk.magenta(...params));
  }
};

// 问答列表
const qaList = [
  {
    q: "输入1或2（回车默认执行汉化）：\n1 进行汉化\n2 恢复原版",
    async a(answer) {
      if (Number(answer) === 1 || answer === "") {
        log.blue("开始汉化");

        const extract = await runWithWorker("extract");

        if (extract === true) {
          fs.copyFileSync(asarPath, path.join(backPath, "backup"));
          log.green("解压完成");
          log.blue("正在汉化");
          let rendererJS = fs.readFileSync(
            path.join(extractPath, "renderer.js"),
            "utf8"
          );
          let mainJS = fs.readFileSync(
            path.join(extractPath, "main.js"),
            "utf8"
          );
          // 循环匹配需要替换的内容
          for (let i = 0; i < i18n.length; i++) {
            if (i18n[i].type === "render") {
              rendererJS = rendererJS.replace(i18n[i].reg, i18n[i].value);
            } else if (i18n[i].type === "main") {
              mainJS = mainJS.replace(i18n[i].reg, i18n[i].value);
            }
          }
          // 生成文件
          fs.writeFileSync(
            path.join(extractPath, "renderer.js"),
            rendererJS,
            "utf8"
          );
          fs.writeFileSync(path.join(extractPath, "main.js"), mainJS, "utf8");
        } else {
          log.red(`\n汉化失败，错误：\n${extract}`);
          return false;
        }

        const pack = await runWithWorker("pack");
        if (pack) {
          log.green("汉化成功！");
          return true;
        } else {
          log.red(`\n汉化失败，错误：\n${pack}`);
          return false;
        }
      } else if (Number(answer) === 2) {
        try {
          const backupFile = path.join(backPath, "backup");
          fs.accessSync(backupFile);
          log.blue("开始恢复原版");
          fs.copyFileSync(backupFile, asarPath);
          return true;
        } catch (e) {
          log.red("恢复失败！备份文件不存在，或关闭clash后重试！");
          return false;
        }
      }
    }
  },
  {
    q: "finish",
    a() {
      rl.close();
    }
  }
];

//创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

main();

async function main(index = 0) {
  if (index > qaList.length - 1) {
    return;
  }
  const res = await qaFn(qaList[index].q, qaList[index].a);
  if (res) {
    await main(index + 1);
  } else {
    log.red("执行失败，请重新选择！");
    await main(index);
  }
}

// close事件监听
rl.on("close", function() {
  // 结束程序
  process.exit(0);
});

async function qaFn(question, answerFn) {
  return new Promise(resolve => {
    if (question === "finish") {
      log.green("回车即可关闭窗口");
    } else {
      log.magenta(question);
    }
    rl.question("", async answer => {
      console.log("");
      resolve(answerFn(answer));
    });
  });
}

function runWithWorker(type) {
  const spinner = ora("请等待").start();
  const argv =
    type === "extract" ? ["extract", asarPath, tmpPath] : ["pack", tmpPath];
  const worker = new Worker(path.join(__dirname, "asar.js"), {
    argv
  });
  return new Promise(resolve => {
    worker.once("message", message => {
      spinner.info("完成！");
      resolve(message);
    });
  });
}
