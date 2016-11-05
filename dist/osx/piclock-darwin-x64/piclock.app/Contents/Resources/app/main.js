const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 360,
    resizable: false,
    transparent: true,
    frame: false
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  tray = new Tray(path.join(__dirname, 'src', 'img', 'appicon16.png'))

  tray.on('click', function () {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })

  if (process.platform === 'darwin') {
    menu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function () { app.quit() }
      }
    ])
  } else {
    menu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        accelerator: 'Ctrl+Q',
        click: function () { app.quit() }
      }
    ])
  }

  Menu.setApplicationMenu(menu)
  tray.setContextMenu(menu)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
