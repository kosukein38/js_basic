//関数はオブジェクトに過ぎない
// console.log(add(3, 4));
function add(a, b) {
  return a + b;
}
// console.dir(add);
// console.dir(add.name);
// console.dir(add.length); //パラメーターの数
const newAdd = add; //変数の中に関数を入れる
// console.log(newAdd(3, 4));
//オブジェクトから関数は作れない（関数にはJavsScriptエンジンによって内部的に作られるプロパティがあるから=>開発者が触れない）

let sayHi = function hi() {}; //名前付き関数式
sayHi = function () {
  return 'hi';
}; //無名関数
// console.log(sayHi());

//「関数宣言文」か「関数式」かどちらかを使う
// 巻き上げられるか巻き上げられないかの違い「関数宣言文」はどこでも呼び出せる
// 関数式はletが使える
// どちらを使うかはプロジェクトで統一する

const person = {
  //無名関数
  name: 'Kosuke',
  sayHi: function () {
    //オブジェクトのキー、バリューセットにおいてバリューの関数のことをメソッドと呼ぶ
    return 'hi';
  },
};

sayHi = function (name) {
  return `Hi ${name}!`;
};
sayHi = (name) => ({
  name: name,
});

sayHi = (name, message = `${name}`) => `Hi ${message}`;

let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};

let subtract = (a, b, callback) => {
  let result = a - b;
  callback(result);
};

subtract(10, 3, function showResult(result) {
  console.log(cjcj);
  console.log(result);
});
