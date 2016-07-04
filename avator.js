/*--
FILE :avator.js
ABOUT:キャラクターの振る舞いを設定
AUTHER:MakTak
UPDATE:2016/7/4
--*/
var cnt=0;//セリフ切り替え用グローバル変数
var click=0;//クリック判定用フラグ
var rnd;//click時のリアクション用変数

serif();//セリフを表示
//時報の必要があるかチェック
IMGjihou();
serifJihou();


/*-------picture functions-------*/

//画像切り替え関数
function changeIMG(num){
  document.getElementById("pict").src=img[num].src;
}

function IMGjihou(){
  var t = new Date(); //現在時刻を取得
  var hour = t.getHours();
  var minute = t.getMinutes();
  var second = t.getSeconds();

  if(minute == 0 && second <= 20){
    if(hour==2 || hour==5 || hour==22)
    {changeIMG(1);}
    if(hour==8 || hour==12 || hour==15)
    {changeIMG(2);}
    if(hour==0)
    {changeIMG(3);}
    if(hour==21)
    {changeIMG(4);}
    if(hour==17 || hour==20)
    {changeIMG(5);}
    if(hour==6 || hour==10)
    {changeIMG(6);}
    if(hour==3)
    {changeIMG(7);}
    if(hour==7 || hour==23)
    {changeIMG(8);}
    if(hour==4 || hour==9 || hour==18)
    {changeIMG(9);}
    if(hour==11 || hour==16 || hour==19)
    {changeIMG(10);}
  }
  // 次の「0ミリ秒」に実行されるよう、次の描画処理を予約
  var delay = 1000 - new Date().getMilliseconds();
  setTimeout(IMGjihou, delay);
}


/*-------serif functions--------*/

function serif () {
  var t2 = new Date(); //現在時刻を取得
  var hour2 = t2.getHours();
  var minute2 = t2.getMinutes();
  if(minute2 != 0){
    //セリフを更新
    updateSerifText();
  }
  if(click==0)
  {setTimeout(serif, 10000);}
}

function updateSerifText(){
  document.getElementById("yukarin_serif").innerHTML = text[cnt];
  if(cnt==0)
  {changeIMG(0);}
  if(cnt==1)
  {changeIMG(4);}
  if(cnt==2)
  {changeIMG(6);}
  if(cnt==3)
  {changeIMG(5);}
  if(cnt==4)
  {changeIMG(10);}
  if(cnt==5)
  {changeIMG(1);}
  //セリフ番号を進める
  if (cnt == 5)
  { cnt=1; }
  else
  { cnt++; }
}

function serifJihou(){
  var t = new Date(); //現在時刻を取得
  var hour = t.getHours();
  var minute = t.getMinutes();
  if(minute==0 && click==0){
  document.getElementById("yukarin_serif").innerHTML = zihou[hour]; //時刻に応じたセリフをセット
  }
  // 次の「0ミリ秒」に実行されるよう、次の描画処理を予約
  var delay = 1000 - new Date().getMilliseconds();
  setTimeout(serifJihou, delay);
}


/*------event functions-------*/

//click時のイベント処理
function Click(){
  click++;
  rnd = Math.floor(Math.random()*4);
  document.getElementById("yukarin_serif").innerHTML = reaction[rnd];
  if (rnd==0)
  {changeIMG(6)}
  if (rnd==1)
  {changeIMG(9)}
  if (rnd==2)
  {changeIMG(3)}
  if (rnd==3)
  {changeIMG(8)}
  if(click==0)
  {setTimeout(serif,5000);}
  setTimeout(clickReset,5000);
}

function clickReset(){
  click=0;
}
