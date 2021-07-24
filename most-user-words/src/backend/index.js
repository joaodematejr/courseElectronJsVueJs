const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => console.log(words))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "you", amount: 900 },
        { name: "satan", amount: 666 },
        { name: "i", amount: 665 },
        { name: "he", amount: 668 },
      ]);
    });
});
