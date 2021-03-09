import { app, protocol, BrowserWindow } from 'electron'
import * as log from 'electron-log'
import { join } from 'path'
const isDev = process.env.NODE_ENV !== 'production'

function createWindow() {
    const win: BrowserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })
    isDev ? win.loadURL('http://127.0.0.1:9080') : win.loadFile(join(__dirname, './index.html'))
    if (isDev) {
        win.webContents.openDevTools()
    }

}

app.whenReady().then((v) => {
    protocol.registerFileProtocol('rys-app', (request, callback) => {
        const url = request.url
        log.debug('registerFileProtocol', url)
        callback(url)
    })

    protocol.registerHttpProtocol('rys-app', (request, callback) => {
        const url = request.url
        log.debug('registerHttpProtocol', request.url)
        callback({})
    })
})

process.on('uncaughtException', err => {
    log.error('uncaught exception', err)
})

app.setName('RYS')

app.setAsDefaultProtocolClient('rys-app')

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})


