const path = require("path");
const asar = require("asar");
const { parentPort } = require("worker_threads");
const { argv } = process;

main();

async function main() {
  if (argv[2] === "extract") {
    const res = asarExtract(argv[3], argv[4]);
    parentPort.postMessage(res);
  } else if (argv[2] === "pack") {
    const res = await asarPack(argv[3]);
    parentPort.postMessage(res);
  }
}

// 解压asar
function asarExtract(asarPath, tmpPath) {
  try {
    asar.extractAll(path.join(asarPath), path.join(tmpPath));
    return true;
  } catch (error) {
    return error;
  }
}
// 打包asar
async function asarPack(tmpPath) {
  return new Promise(resolve => {
    asar
      .createPackage(tmpPath, path.join(tmpPath, "../../", "app.asar"))
      .then(r => {
        resolve(true);
      })
      .catch(e => {
        resolve(e);
      });
  });
}
