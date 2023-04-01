// const tag = window.document.querySelector('#sample');
// tag.textContent = 'テキストを置き換えます';
// DOMは「JavaScriptからHTMLを簡単に操作する仕組み」
// DOMはWindowオブジェクト配下のDocumentオブジェクト

// window.document.querySelector('#foo');
// document.querySelector('#foo');
// windowオブジェクトは省略可

const element = document.querySelector('.sample');
// console.log(element);
// 指定したCSSセレクタの最初の要素が返る

const elements = document.querySelectorAll('.sample');
// console.log(elements.length);
// 指定したCSSセレクタの全ての要素を返す（NodeListと呼ばれる特殊な配列型式のデータ）

for (const element of elements) {
  // console.log(element);
}
// NodeListの配列それぞれの要素にアクセスし表示する。

// console.log(elements[0]);
// インデックスで要素を指定することもできる

// const profile = document.querySelector('.profile');
// profile.dataset.id = 999;
// profile.dataset.userName = 'new zaru';

// console.log(profile.dataset.id);
// console.log(profile.dataset.userName);

// const scoreElement = document.querySelector('.score');
// const score = scoreElement.dataset.score;
// if (score >= 80) {
//   scoreElement.style.color = 'blue';
// }

const p = document.querySelector('p');
p.style.fontSize = '36px';
// cssを変更することができる

const newElement = document.createElement('p');
newElement.textContent = '新しく追加しました';

const content = document.querySelector('.content');
content.append(newElement);
