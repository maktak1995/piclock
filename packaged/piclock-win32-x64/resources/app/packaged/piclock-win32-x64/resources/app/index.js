"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;
const Menu = electron.Menu;

let mainWindow;
let tray = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  // メイン画面の表示。ウィンドウの幅、高さを指定できる
  mainWindow = new BrowserWindow({width: 200,
                                 height: 360,
                                 transparent: true,
                                 frame: false,
                                 resizable: false});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  tray = new Tray(__dirname + '/img/appicon16.png');
  const contextMenu = Menu.buildFromTemplate([
  {label: "表示", click: function () { mainWindow.focus(); }},
  {label: "終了", click: function () { app.quit(); 　　　　　}}]);
  tray.setContextMenu(contextMenu);
});
