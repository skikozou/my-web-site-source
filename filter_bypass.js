/*
******************************************************************************************************************************************************************************************

Oops!
You saw the source code for this site.
You are free to think what you like about this code, but please note that the copyright belongs to skikozou.
Please remember this when you look at the source code of this site in the future.
If you make something using the source code of this site and publish it, it would be good if you could let skikozou know so that there will be less misunderstanding.

******************************************************************************************************************************************************************************************
*/

// スクリーンショットを取得する要素
const element = document.querySelector('#target-element');

// スクリーンショット用のキャンバス要素を作成
const canvas = document.createElement('canvas');
canvas.width = element.offsetWidth;
canvas.height = element.offsetHeight;

// キャンバスに描画するためのコンテキストを取得
const context = canvas.getContext('2d');

// キャプチャしたい要素を描画
context.drawImage(element, 0, 0, canvas.width, canvas.height);

// 画像ファイルとして保存（例：PNG形式）
const link = document.createElement('a');
link.download = 'screenshot.png';
link.href = canvas.toDataURL();
link.click();  