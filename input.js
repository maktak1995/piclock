/*--
FILE :input.js
ABOUT:セリフ、画像の読み込み
AUTHER:MakTak
UPDATE:2016/7/4
--*/

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


/*----------------------セリフセット----------------------*/
var text = new Array();//通常
text[0] = 'ハロー。';//main
text[1] = 'マスター、暇です。';//sub4
text[2] = '今何時？上見てくださいよ。';
text[3] = 'ゲームとかしません？';//sub5
text[4] = '忙しそうですね。';//sub10
text[5] = 'コーヒーでもいかがです?';//sub1

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

var reaction = new Array();
reaction[0] = '私の顔になにかついてます?';//sub6
reaction[1] = 'どうかしましたか?';//sub9
reaction[2] = 'ゲームの邪魔しないでもらえます?';//sub3
reaction[3] = '仕事してください。';//sub8
