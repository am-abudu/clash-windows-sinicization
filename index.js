const readline = require("readline");
const chalk = require("chalk");
const asar = require("asar");
const path = require("path");
const ora = require("ora");

const asarPath = path.resolve("./resources", "app.asar");
const backPath = path.resolve("./resources", "clash-windows-sinicization");
const tmpPath = path.resolve(
  "./resources",
  "clash-windows-sinicization",
  "tmp"
);

// 问答列表
const qaList = [
  {
    q: "输入1或2（回车默认执行汉化）：\n1 进行汉化\n2 恢复原版",
    a(answer) {
      if (Number(answer) === 1 || answer === "") {
        console.log(chalk.blue("开始汉化", asarPath));
        const spinner = ora("解压文件").start();
        try {
          asar.extractAll(asarPath, tmpPath);
          spinner.succeed("解压完成");
        } catch (error) {
          spinner.fail("解压失败，错误：\n", error);
        }
        return true;
      } else if (Number(answer) === 2) {
        console.log(chalk.blue("开始恢复原版"));
        return true;
      }
      return false;
    },
  },
  {
    q: "finish",
    a() {
      rl.close();
    },
  },
];

//创建readline接口实例
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
    console.log(chalk.red("执行失败，请重新选择！"));
    console.log("");
    await main(index);
  }
}

// close事件监听
rl.on("close", function () {
  // 结束程序
  process.exit(0);
});

async function qaFn(question, answerFn) {
  return new Promise((resolve) => {
    if (question === "finish") {
      console.log(chalk.green("执行完成回车即可关闭窗口"));
    } else {
      console.log(chalk.magenta(question));
    }
    rl.question("", async (answer) => {
      console.log("");
      resolve(answerFn(answer));
    });
  });
}

