const { ipcMain } = require("electron");

ipcMain.on("progress-subtitles", (event, paths) => {
  console.log(paths);
  event.reply("progress-subtitles", "pong");
});
