import { app, BrowserWindow, Menu } from 'electron/main'
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle: "hiddenInset",
    })

    // win.loadFile(path.join(__dirname, 'index.html'));
    win.loadFile(path.join(__dirname, "..", "out", "index.html"))
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

const menu = Menu.buildFromTemplate([])
Menu.setApplicationMenu(menu)