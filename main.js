const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron')
const Oauth = require('node-twitter-api')
const twClient = require('twitter')
const path = require('path')
const url = require('url')

let mainWindow
let tray
let twitteroauthwindow
let client

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
const oauth = new Oauth({
  consumerKey: '74Ww7f88pRHLkmXYSKbqxO1xI',
  consumerSecret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
  callback: 'http://127.0.0.1'
})

function twitteraouth () {
  twitteroauthwindow = new BrowserWindow({width: 400,
    height: 300,
    webPreferences: {webSecurity: false}})
  oauth.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
    if (error) twitteroauthwindow.close()
    var url = oauth.getAuthUrl(requestToken)
    twitteroauthwindow.webContents.on('will-navigate', function (event, url) {
      var matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)
      if (matched) {
        oauth.getAccessToken(requestToken, requestTokenSecret, matched[2], function (error, accessToken, accessTokenSecret, results) {
          if (error) twitteroauthwindow.close()
          var twitterAccessToken = accessToken
          var twitterAccessTokenSecret = accessTokenSecret
          oauth.verifyCredentials(twitterAccessToken, twitterAccessTokenSecret, {}, function (_, data, respons) {
            twitteroauthwindow.close()
          })

          client = twClient({
            consumer_key: '74Ww7f88pRHLkmXYSKbqxO1xI',
            consumer_secret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
            access_token_key: twitterAccessToken,
            access_token_secret: twitterAccessTokenSecret
          })
        })
      }
      event.preventDefault()
    })
    twitteroauthwindow.loadURL(url)
  })
}

let mentionText
ipcMain.on('mention', (event, arg) => {
  if (client == null) return

  client.get('statuses/mentions_timeline', (error, tweet, response) => {
    if (!error && mentionText !== tweet[0]['text']) {
      mentionText = tweet[0]['text']
      event.sender.send('mention', mentionText)
    }
  })
})

/* ---------Main process---------- */
app.on('ready', () => {
  twitteraouth()
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
