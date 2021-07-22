const { ipcMain } = require("electron");

ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);
  event.reply("process-subtitles", [
    { name: "you", amount: 900 },
    { name: "satan", amount: 666 },
    { name: "i", amount: 665 },
    { name: "he", amount: 668 },
  ]);
});
