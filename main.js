const {app, BrowserWindow, Menu, Tray, ipcMain} = require('electron');
const tw_oauth = require('node-twitter-api');
const tw_client = require('twitter');
const path = require('path');
const url = require('url');

let mainWindow;
let tray;
let twitteroauthwindow;
let client;

/*------------------Main function-------------------*/
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 200,
    height: 360,
    resizable: false,
    transparent: true,
    frame: false
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'src', 'scripts', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null
  });

  tray = new Tray(path.join(__dirname, 'assets', 'appicon16.png'));

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

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
        mainWindow.webContents.setAudioMuted(item.checked);
      }
    }
  ]);

  Menu.setApplicationMenu(menu);
  tray.setContextMenu(menu);
}


/*-----------------Twitter function------------------*/
const oauth = new tw_oauth({
    consumerKey:    '74Ww7f88pRHLkmXYSKbqxO1xI',
    consumerSecret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
    callback:       'http://127.0.0.1',
});

function twitteraouth () {
  twitteroauthwindow = new BrowserWindow({width:400, height: 300,
                        webPreferences: {webSecurity: false}});
  oauth.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
    var url = oauth.getAuthUrl(requestToken);
    twitteroauthwindow.webContents.on('will-navigate', function (event, url) {
      var matched;
      if (matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
        oauth.getAccessToken(requestToken, requestTokenSecret, matched[2], function (error, accessToken, accessTokenSecret, results) {
          var twitter_accessToken = accessToken;
          var twitter_accessTokenSecret = accessTokenSecret;
          oauth.verifyCredentials(twitter_accessToken, twitter_accessTokenSecret, {}, function (error, data, respons) {
            twitteroauthwindow.close();
          });

          client = new tw_client({
                         consumer_key:        '74Ww7f88pRHLkmXYSKbqxO1xI',
                         consumer_secret:     'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
                         access_token_key:    twitter_accessToken,
                         access_token_secret: twitter_accessTokenSecret,
                      });
        });
      }
      event.preventDefault();
    });
    twitteroauthwindow.loadURL(url);
  });
  mentionget();
}

function mentionget(){
  if(client != null){
    client.get('statuses/mentions_timeline', (error, tweet, response) => {
      var mention;
      if(!error){mention = tweet[0]["text"];}
      else{mention = null}
      ipcMain.once('asynchronous-message', (event, arg) => {
        event.sender.send('asynchronous-reply', mention);
      });
    });
  }
  setTimeout(mentionget, 6000);
}

/*---------Main process----------*/
app.on('ready', () => {
  twitteraouth();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
