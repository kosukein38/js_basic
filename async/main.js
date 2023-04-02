// function syncAlert() {
//   alert('アラートを表示');
//   console.log('ログを出力');
// }
// syncAlert();
// 同期処理

function asyncAlert() {
  setTimeout(function () {
    alert('アラートを表示');
  }, 0);
  console.log('ログを出力');
}
asyncAlert();
// 非同期処理、setTimeout()関数は非同期処理
