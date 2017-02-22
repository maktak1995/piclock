/*--
FILE :twitter.js
ABOUT:add twitter func
AUTHER:MakTak
UPDATE:2017/2/2
--*/
const {BrowserWindow} = require('electron').remote;
const tw_oauth = require('node-twitter-api');
const tw_client = require('twitter');

const oauth = new tw_oauth({
    consumerKey:    '74Ww7f88pRHLkmXYSKbqxO1xI',
    consumerSecret: 'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
    callback:       'http://127.0.0.1',
});

var twitter_accessToken;
var twitter_accessTokenSecret;
var client;
let mention2;

const mainWindow = new BrowserWindow({width:400, height: 300,
                      webPreferences: {webSecurity: false}});

oauth.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
  var url = oauth.getAuthUrl(requestToken);
  mainWindow.webContents.on('will-navigate', function (event, url) {
    var matched;
    if (matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)) {
      oauth.getAccessToken(requestToken, requestTokenSecret, matched[2], function (error, accessToken, accessTokenSecret, results) {
          twitter_accessToken = accessToken;
          twitter_accessTokenSecret = accessTokenSecret;
          oauth.verifyCredentials(twitter_accessToken, twitter_accessTokenSecret, {}, function (error, data, respons) {
            mainWindow.close();
          });

          client = new tw_client({
            consumer_key:        '74Ww7f88pRHLkmXYSKbqxO1xI',
            consumer_secret:     'f6tpMmCwxYXtl7Qn6eMWXVviOHOQLHVp1pdivIhQ4pNw6SalPr',
            access_token_key:    twitter_accessToken,
            access_token_secret: twitter_accessTokenSecret,
          });
          mentionget(client);
      });
    }
    event.preventDefault();
  });
  mainWindow.loadURL(url);
});
mention2 = document.getElementById("yukarin_serif").innerHTML;

function mentiongethandler(error, tweet, response) {
  if (!error) document.getElementById("yukarin_serif").innerHTML = tweet[0]["text"];
}

function mentionget(client){
  client.get('statuses/mentions_timeline', mentiongethandler);
}
