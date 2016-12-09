const {app, BrowserWindow, Menu, Tray} = require('electron')
const path = require('path')
const url = require('url')

let mainWindow
let tray
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 380,
    height: 280,
    resizable: false
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src', 'scripts', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  tray = new Tray(path.join(__dirname, 'assets', 'appicon16.png'))

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })

  const menu = Menu.buildFromTemplate([
    {
      label: 'Quit',
      accelerator: 'CmdOrCtrl+Q',
      role: 'quit'
    },
    {
      label: 'Mute',
      accelerator: 'CmdOrCtrl+M',
      type: 'checkbox',
      click: (item) => {
        mainWindow.webContents.setAudioMuted(item.checked)
      }
    }
  ])

  Menu.setApplicationMenu(menu)
  tray.setContextMenu(menu)
}

app.on('ready',createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
