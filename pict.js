/*-----------------------画像セット-----------------------*/
var img = new Array();
img[0] = new Image();
img[0].src = "img/main.png";
img[1] = new Image();
img[1].src = "img/sub1.png";
img[2] = new Image();
img[2].src=  "img/sub2.png";
img[3] = new Image();
img[3].src=  "img/sub3.png";
img[4] = new Image();
img[4].src=  "img/sub4.png";
img[5] = new Image();
img[5].src=  "img/sub5.png";
img[6] = new Image();
img[6].src=  "img/sub6.png";
img[7] = new Image();
img[7].src=  "img/sub7.png";
img[8] = new Image();
img[8].src=  "img/sub8.png";
img[9] = new Image();
img[9].src=  "img/sub9.png";
img[10] = new Image();
img[10].src=  "img/sub10.png";


//時報の必要があるかチェック
IMGjihou();

//画像切り替え関数
function changeIMG(num){
  document.getElementById("pict").src=img[num].src;
}

function resetIMG(){
  changeIMG(0);
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
