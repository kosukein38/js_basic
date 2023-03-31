window.alert('アラートです');

const result = confirm('本当に削除してよいですか??');
if (result) {
  console.log('削除しました');
} else {
  console.log('キャンセルしました');
}

function delayTask() {
  console.log('1秒ごとに繰り返し実行される');
}

const timerId = setTimeout(delayTask, 5000);
clearTimeout(timerId);

const timerId = setInterval(delayTask, 1000);
clearInterval(timerId);

const newWindow = open();
