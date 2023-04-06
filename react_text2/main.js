// 分割代入を使用しない文字列
const myProfile = {
  name: '主田',
  age: 24,
};

const message = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message);

// 分割代入を使用
const myProfile2 = {
  name: '主田',
  age: 24,
};
const { name, age } = myProfile2;
const message2 = `私の名前は${name}です。年齢は${age}歳です`;
console.log(message2);

// 分割代入を別の変数名で使用
const myProfile3 = {
  name: '主田',
  age: 24,
};
const { name: newName, age: newAge } = myProfile3;
const message3 = `私の名前は${newName}です。年齢は${newAge}歳です`;
console.log(message3);

// 配列のインデックスを指定して代入を行う
const myProfile4 = ['主田', 24];
const message4 = `私の名前は${myProfile4[0]}です。年齢は${myProfile4[1]}歳です`;
console.log(message4);

// 配列のインデックスを指定して代入を行う
const myProfile5 = ['主田', 24];
const [name2, age2] = myProfile5;
const message5 = `私の名前は${name2}です。年齢は${age2}歳です`;
console.log(message5);
