// 従来の関数定義方法;
function func1(value) {
  return value;
}

console.log(func1('func1です'));

// 関数を定義して変数に格納する方法
const func2 = function (value) {
  return value;
};

console.log(func2('func2です'));

// アロー関数
const func3 = (value) => {
  return value;
};
console.log(func3('func3です'));

// アロー関数の書き方、引数が１つの場合は()省略可、prettierの設定で()ついてしまう
const func4 = (value) => {
  return value;
};
console.log(func4('func4です'));

// 引数が２つ以上の場合はカッコ省略不可
const func5 = (value1, value2) => {
  return value1 + value2;
};
console.log(func5('func5', 'です'));

// 処理を１行で返却する場合は波括弧とreturnを省略できる
const func6 = (num1, num2) => num1 + num2;
console.log(func6('func6', 'です'));

// ()を使って１行としてまとめる

const func7 = (val1, val2) => ({
  name: val1,
  age: val2,
});
console.log(func7('沼田', 30));
