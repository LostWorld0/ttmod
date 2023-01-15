const { app, BrowserWindow } = require('electron')
require('dotenv').config()

const isDev = process.env.NODE_ENV !== 'development';
const isMac = process.platform === 'darwin';

const createWindow = () => {
    const win = new BrowserWindow({
      width: isDev ? 1000 : 500,
      height: 600
    });

    if(isDev){
        win.webContents.openDevTools();
    }
  
    win.loadFile('./render/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})