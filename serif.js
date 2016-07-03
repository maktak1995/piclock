var cnt2=0;//セリフ切り替え用グローバル変数

/*----------------------セリフセット----------------------*/
var text = new Array();//通常
text[0] = 'ハロー。';
text[1] = 'マスター、暇です。';
text[2] = '今何時？上見てくださいよ。';
text[3] = 'ゲームとかしません？';
text[4] = '忙しそうですね。';
text[5] = ' ';

var zihou = new Array(); //時報
zihou[0] = '0時です。日付変わりましたよ。もう寝たらいかがです?';//sub3
zihou[1] = '1時です。頑張りますねえ。';//main
zihou[2] = '2時です。しょうがないですね。私も付き合いますよ。';//sub1
zihou[3] = '3時です。丑三つ時は幽霊がこわいですよね。';//sub7
zihou[4] = '4時です。そろそろ休憩しません?';//sub9
zihou[5] = '5時です。もう朝が近いですね。徹夜でお疲れ様ですね。';//sub1
zihou[6] = '6時です。もう日が昇りましたよ。うおっまぶしっ';//sub6
zihou[7] = '7時です。そろそろおなかがすきました...';//sub8
zihou[8] = '8時です。朝ごはんを食べましょう!';//sub2
zihou[9] = '9時です。そろそろ出発の支度をしましょう。';//sub9
zihou[10] = '10時です。...とくに言うこともないです。';//sub6
zihou[11] = '11時です。おや、むこうからいいにおいが...';//sub10
zihou[12] = '12時です。お昼ですよー!';//sub2
zihou[13] = '13時です。お昼食べた後はなんだか眠くなります。';//sub8
zihou[14] = '14時です。暇つぶしにゲームしませんか?';//main
zihou[15] = '15時です。おやつです! おやつです!';//sub2
zihou[16] = '16時です。このボスを倒せば全クリなんです...!';//sub10
zihou[17] = '17時です。ふふ、私にかかれば何の事はないゲームでした。';//sub5
zihou[18] = '18時です。今日も一日お疲れ様でした。';//sub9
zihou[19] = '19時です。今日の晩ごはんは何にしましょうか?';//sub10
zihou[20] = '20時です。腹ごなしにゲームなどいかがです?';//sub5
zihou[21] = '21時です。くそぅ...マスター強いですね...';//sub4
zihou[22] = '22時です。そろそろよいこは寝る時間ですね。';//sub1
zihou[23] = '23時です。こんな時間まで起きてるなんて、マスターは悪い子ですね。';//sub7



serif();
//時報のチェック
serifJihou();

function serif () {
  var t2 = new Date(); //現在時刻を取得
  var hour2 = t2.getHours();
  var minute2 = t2.getMinutes();
  if(minute2 != 0){
    //セリフを更新
    updateSerifText();
  }
  setTimeout(serif, 10000);
}

function updateSerifText(){
  document.getElementById("yukarin_serif").innerHTML = text[cnt2];
  //セリフ番号を進める
  if (cnt2 == 4)
  { cnt2=1; }
  else
  { cnt2++; }
}

function serifJihou(){
  var t = new Date(); //現在時刻を取得
  var hour = t.getHours();
  var minute = t.getMinutes();
  if(minute == 0){
  document.getElementById("yukarin_serif").innerHTML = zihou[hour]; //時刻に応じたセリフをセット
  }
  // 次の「0ミリ秒」に実行されるよう、次の描画処理を予約
  var delay = 1000 - new Date().getMilliseconds();
  setTimeout(serifJihou, delay);
}
