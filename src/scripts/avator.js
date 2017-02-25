/* --
FILE :avator.js
ABOUT:set the act of character
AUTHER:MakTak
UPDATE:2016/11/5
-- */
const {img, vText, vReaction, vJihou, text, reaction, jihou} = require('./input')

var cnt = 0// セリフ切り替え用グローバル変数
var rnd// click時のリアクション用変数

serif()// セリフを表示
// 時報の必要があるかチェック
Jihou()
/* -------picture functions------- */

// 画像切り替え関数
function changeIMG (num) {
  document.getElementById('pict').src = img[num].src
}

/* -------voice functions-------- */

// 全音声を停止
function allvoicestop () {
  var i
  for (i = 0; i <= 5; i++) {
    vText[i].pause()
    vText[i].currentTime = 0
  }
  for (i = 0; i <= 3; i++) {
    vReaction[i].pause()
    vReaction[i].currentTime = 0
  }
  for (i = 0; i <= 23; i++) {
    vJihou[i].pause()
    vJihou[i].currentTime = 0
  }
}

// ボイス再生
function playvoice (mode, num) {
  // 音がかぶらないよう先に全音声を停止する
  allvoicestop()
  if (mode === 'text') vText[num].play()
  else if (mode === 'reaction') vReaction[num].play()
  else if (mode === 'jihou') vJihou[num].play()
}
/* -------serif functions-------- */

function serif () {
  var t2 = new Date() // 現在時刻を取得
  // var hour2 = t2.getHours()
  var minute2 = t2.getMinutes()
  if (minute2 !== 0) {
    // セリフを更新
    updateSerifText()
  }
  setTimeout(serif, 30000)
}

function updateSerifText () {
  document.getElementById('yukarin_serif').innerHTML = text[cnt]
  playvoice('text', cnt)
  if (cnt === 0) changeIMG(0)
  if (cnt === 1) changeIMG(4)
  if (cnt === 2) changeIMG(6)
  if (cnt === 3) changeIMG(5)
  if (cnt === 4) changeIMG(10)
  if (cnt === 5) changeIMG(1)

  // セリフ番号を進める
  if (cnt >= 5) {
    cnt = 1
  } else {
    cnt++
  }
}

/* ------event functions------- */

// click時のイベント処理
document.getElementById('pict').onclick = () => {
  rnd = Math.floor(Math.random() * 4)
  document.getElementById('yukarin_serif').innerHTML = reaction[rnd]
  playvoice('reaction', rnd)
  if (rnd === 0) changeIMG(6)
  if (rnd === 1) changeIMG(9)
  if (rnd === 2) changeIMG(3)
  if (rnd === 3) changeIMG(8)
}

// 時報タイミングの処理
function Jihou () {
  var t = new Date() // 現在時刻を取得
  var hour = t.getHours()
  var minute = t.getMinutes()
  var second = t.getSeconds()

  if (minute === 0 && second === 0) {
    document.getElementById('yukarin_serif').innerHTML = jihou[hour] // 時刻に応じたセリフをセット
    if (hour === 1 || hour === 14) changeIMG(0)
    if (hour === 2 || hour === 5 || hour === 22) changeIMG(1)
    if (hour === 8 || hour === 12 || hour === 15) changeIMG(2)
    if (hour === 0) changeIMG(3)
    if (hour === 21) changeIMG(4)
    if (hour === 17 || hour === 20) changeIMG(5)
    if (hour === 6 || hour === 10) changeIMG(6)
    if (hour === 3) changeIMG(7)
    if (hour === 7 || hour === 23) changeIMG(8)
    if (hour === 4 || hour === 9 || hour === 18) changeIMG(9)
    if (hour === 11 || hour === 16 || hour === 19) changeIMG(10)
    playvoice('jihou', hour)
  }
  // 次の「0ミリ秒」に実行されるよう、次の描画処理を予約
  var delay = 1000 - new Date().getMilliseconds()
  setTimeout(Jihou, delay)
}

/* -------twitter functions------- */
const {ipcRenderer} = require('electron')

ipcRenderer.on('mention', (event, mention) => {
  document.getElementById('yukarin_serif').innerHTML = text[6]
  changeIMG(5)
  playvoice('text', 6)
})

ipcRenderer.send('ready')

/* ----------------pomodoro function--------------- */
let PomoID;

ipcRenderer.on('pomodoro', (event, message) => {
  document.getElementById('yukarin_serif').innerHTML = text[7]
  changeIMG(1)
  playvoice('text', 7)
  clearTimeout(PomoID); //既に動いているタイマーを(あれば)停止しておく
  PomoID=setTimeout(countPomodoro, 1500000) // 1500000ms = 25min
})

function countPomodoro () {
  document.getElementById('yukarin_serif').innerHTML = text[8]
  changeIMG(2)
  playvoice('text', 8)
}
