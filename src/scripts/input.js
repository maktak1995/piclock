/* --
FILE :input.js
ABOUT:input serif, picture, voice
AUTHER:MakTak
UPDATE:2016/11/5
-- */

/* -----------------------画像セット----------------------- */
var i = 0
var img = []
img[0] = document.createElement('img')
img[0].src = '../img/main.png'
for (i = 1; i <= 10; i++) {
  img[i] = document.createElement('img')
  img[i].src = '../img/sub' + String(i) + '.png'
}

/* -----------------------音声セット----------------------- */

var vText = []
for (i = 0; i <= 8; i++) {
  vText[i] = document.createElement('audio')
  vText[i].src = '../voice/text/text' + String(i) + '.wav'
}

var vReaction = []
for (i = 0; i <= 3; i++) {
  vReaction[i] = document.createElement('audio')
  vReaction[i].src = '../voice/reaction/reaction' + String(i) + '.wav'
}

var vJihou = []
for (i = 0; i <= 23; i++) {
  vJihou[i] = document.createElement('audio')
  vJihou[i].src = '../voice/zihou/zihou' + String(i) + '.wav'
}

/* ----------------------セリフセット---------------------- */
var text = []// 通常
text[0] = 'ハロー。'// main
text[1] = 'マスター、暇です。'// sub4
text[2] = '今何時？上見てくださいよ。'// sub6
text[3] = 'ゲームとかしません？'// sub5
text[4] = '忙しそうですね。'// sub10
text[5] = 'コーヒーでもいかがです?'// sub1
text[6] = 'あなたのお友達からメンションですよ。'// mention_tweet
text[7] = 'ポモドーロタイマーをセットしました。'// set_pomodoro
text[8] = '25分たちました！5分休憩しましょう！'// end_pomodoro

var jihou = [] // 時報
jihou[0] = '0時です。日付変わりましたよ。もう寝たらいかがです?'// sub3
jihou[1] = '1時です。頑張りますねえ。'// main
jihou[2] = '2時です。しょうがないですね。私も付き合いますよ。'// sub1
jihou[3] = '3時です。丑三つ時は幽霊がこわいですよね。'// sub7
jihou[4] = '4時です。そろそろ休憩しません?'// sub9
jihou[5] = '5時です。徹夜でお疲れ様ですね。'// sub1
jihou[6] = '6時です。もう日が昇りましたよ。うおっまぶしっ'// sub6
jihou[7] = '7時です。そろそろおなかがすきました...'// sub8
jihou[8] = '8時です。朝ごはんを食べましょう!'// sub2
jihou[9] = '9時です。そろそろ出発の支度をしましょう。'// sub9
jihou[10] = '10時です。...とくに言うこともないです。'// sub6
jihou[11] = '11時です。おや、むこうからいいにおいが...'// sub10
jihou[12] = '12時です。お昼ですよー!'// sub2
jihou[13] = '13時です。お昼食べた後はなんだか眠くなります。'// sub8
jihou[14] = '14時です。暇つぶしにゲームしませんか?'// main
jihou[15] = '15時です。おやつです! おやつです!'// sub2
jihou[16] = '16時です。このボスを倒せば全クリです...!'// sub10
jihou[17] = '17時です。ふふ、私にかかればこんなものですよ。'// sub5
jihou[18] = '18時です。今日も一日お疲れ様でした。'// sub9
jihou[19] = '19時です。今日の晩ごはんは何にしましょうか?'// sub10
jihou[20] = '20時です。腹ごなしにゲームなどいかがです?'// sub5
jihou[21] = '21時です。くそぅ...マスター強いですね...'// sub4
jihou[22] = '22時です。そろそろよいこは寝る時間ですね。'// sub1
jihou[23] = '23時です。早く寝ないと、体に毒ですよ？'// sub7

var reaction = []
reaction[0] = '私の顔になにかついてます?'// sub6
reaction[1] = 'どうかしましたか?'// sub9
reaction[2] = 'ゲームの邪魔しないでもらえます?'// sub3
reaction[3] = '仕事してください。'// sub8

exports.img = img
exports.vText = vText
exports.vReaction = vReaction
exports.vJihou = vJihou
exports.text = text
exports.reaction = reaction
exports.jihou = jihou
