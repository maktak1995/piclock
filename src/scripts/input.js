/*--
FILE :input.js
ABOUT:input serif, picture, voice
AUTHER:MakTak
UPDATE:2016/11/5
--*/
/*-----------------------画像セット-----------------------*/
var i = 0;
var img = new Array();
img[0] = new Image();
img[0].src = "../img/main.png";
for(i=1;i<=10;i++){
  img[i] = new Image();
  img[i].src = "../img/sub" + String(i) + ".png";
}

/*-----------------------音声セット-----------------------*/

var v_text = new Array();
for(i=0;i<=6;i++){
  v_text[i] = new Audio();
  v_text[i].src = "../voice/text/text" + String(i) + ".wav";
}

var v_reaction = new Array();
for(i=0;i<=3;i++){
  v_reaction[i] = new Audio();
  v_reaction[i].src = "../voice/reaction/reaction" + String(i) + ".wav";
}

var v_zihou = new Array();
for(i=0;i<=23;i++){
  v_zihou[i] = new Audio();
  v_zihou[i].src = "../voice/zihou/zihou" + String(i) + ".wav";
}

/*----------------------セリフセット----------------------*/
var text = new Array();//通常
text[0] = 'ハロー。';//main
text[1] = 'マスター、暇です。';//sub4
text[2] = '今何時？上見てくださいよ。';//sub6
text[3] = 'ゲームとかしません？';//sub5
text[4] = '忙しそうですね。';//sub10
text[5] = 'コーヒーでもいかがです?';//sub1
text[6] = 'あなたのお友達からメンションですよ。';//mention_tweet

var zihou = new Array(); //時報
zihou[0] = '0時です。日付変わりましたよ。もう寝たらいかがです?';//sub3
zihou[1] = '1時です。頑張りますねえ。';//main
zihou[2] = '2時です。しょうがないですね。私も付き合いますよ。';//sub1
zihou[3] = '3時です。丑三つ時は幽霊がこわいですよね。';//sub7
zihou[4] = '4時です。そろそろ休憩しません?';//sub9
zihou[5] = '5時です。徹夜でお疲れ様ですね。';//sub1
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
zihou[16] = '16時です。このボスを倒せば全クリです...!';//sub10
zihou[17] = '17時です。ふふ、私にかかればこんなものですよ。';//sub5
zihou[18] = '18時です。今日も一日お疲れ様でした。';//sub9
zihou[19] = '19時です。今日の晩ごはんは何にしましょうか?';//sub10
zihou[20] = '20時です。腹ごなしにゲームなどいかがです?';//sub5
zihou[21] = '21時です。くそぅ...マスター強いですね...';//sub4
zihou[22] = '22時です。そろそろよいこは寝る時間ですね。';//sub1
zihou[23] = '23時です。早く寝ないと、体に毒ですよ？';//sub7

var reaction = new Array();
reaction[0] = '私の顔になにかついてます?';//sub6
reaction[1] = 'どうかしましたか?';//sub9
reaction[2] = 'ゲームの邪魔しないでもらえます?';//sub3
reaction[3] = '仕事してください。';//sub8
