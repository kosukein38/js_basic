// varでの変数宣言の問題点
var val1 = 'var変数';
console.log(val1);

// var変数は上書き可能
val1 = 'var変数を上書き';
console.log(val1);

// var変数は再宣言可能
var val1 = 'var変数を再宣言';
console.log(val1);

// letでの変数宣言
let val2 = 'let変数';
console.log(val2);

// letは上書き可能
val2 = 'let変数を上書き';
console.log(val2);

// letは上書き可能
// let val2 = 'let変数を再宣言';
// console.log(val2); //エラー

// constでの変数宣言
const val3 = 'const変数';
console.log(val3);
// const変数は上書き不可能
// val3 = 'const変数を上書き'; //エラー

// constでの再宣言
// const val3 = 'const変数を再宣言';  //エラー
