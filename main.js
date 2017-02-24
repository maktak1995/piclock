const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron')
const Oauth = require('node-twitter-api')
const twClient = require('twitter')
const path = require('path')
const url = require('url')

let mainWindow
let tray
let twitteroauthwindow

/* ------------------Main function------------------- */
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 360,
    resizable: false,
    transparent: true,
    frame: false
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

/* -----------------Twitter function------------------ */

ipcMain.once('ready', (event, arg) => {
  twitteroauthwindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {webSecurity: false}
  })

  const oauth = new Oauth({
    consumerKey: '74Ww7f88pRHLkmXYSKbqxO1xI',
    consumerSecret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
    callback: 'http://127.0.0.1'
  })

  oauth.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
    if (error) twitteroauthwindow.close()

    twitteroauthwindow.loadURL(oauth.getAuthUrl(requestToken))

    twitteroauthwindow.webContents.on('will-navigate', function (_, url) {
      const matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)

      if (matched) {
        oauth.getAccessToken(requestToken, requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret, results) => {
          if (error) twitteroauthwindow.close()

          oauth.verifyCredentials(accessToken, accessTokenSecret, {}, (error, data, respons) => {
            if (!error) {
              const client = twClient({
                consumer_key: '74Ww7f88pRHLkmXYSKbqxO1xI',
                consumer_secret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
                access_token_key: accessToken,
                access_token_secret: accessTokenSecret
              })

              const stream = client.stream('statuses/filter', {track: `@${data.screen_name}`})

              stream.on('data', function (data) {
                event.sender.send('mention', data && data.text)
              })

              stream.on('error', function (error) {
                throw error
              })
            }
            twitteroauthwindow.close()
          })
        })
      }
      event.preventDefault()
    })
  })
})

/* ---------Main process---------- */
app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow == null) {
    createWindow()
  }
})
