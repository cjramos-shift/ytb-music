const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  
    const mainWindow = new BrowserWindow({
    width: 800,
    height: 600
    // webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation: false,
    // },
  });

  mainWindow.loadURL('https://music.youtube.com/');

  // Open the DevTools.
//   mainWindow.webContents.openDevTools();

});