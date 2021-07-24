const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => console.log(rows))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "you", amount: 900 },
        { name: "satan", amount: 666 },
        { name: "i", amount: 665 },
        { name: "he", amount: 668 },
      ]);
    });
});
