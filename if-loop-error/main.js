let ok = true;
let maybeOk = false;

// if (ok) {
//   console.log('OK!');
// } else if (maybeOk) {
//   console.log('maybe OK...');
// } else {
//   console.log('NO!');
// }
// const coffee1 = { name: 'Cafe Latte' };
// const coffee2 = { name: 'Cafe Latte' };
// ok = coffee1 === coffee2;
// console.log(ok);

// ok = !true;
// ok = !!'';
// console.log(ok);

const hello = 'hello2';
{
  //console.log(helllo); //エラーが起きる「デッドゾーン」
  const hello = 'hello1';
}

// ok = false;
// ok = ok ? 'OK' : 'NO';
// console.log(ok);

// function vegetableColor(vegetable) {
//   switch (vegetable) {
//     case 'tomato': {
//       const message = 'tomato is red!';
//       console.log(message);
//       break;
//     }
//     case 'carrot':
//     case 'pumpkin': {
//       const message = `${vegetable} is orange!`;
//       console.log(message);
//       break;
//     }
//     case 'onion': {
//       const message = 'onion is white!';
//       console.log(message);
//       break;
//     }
//     default: {
//       const message = 'not found';
//       console.log(message);
//       break;
//     }
//   }
// if (vegetable === 'tomato') {
//   console.log('tomato is red!');
// } else if (vegetable === 'pumpkin') {
//   console.log('pumpkin is orange!');
// } else if (vegetable === 'onion') {
//   console.log('onion is white!');
//   }
// }

// vegetableColor('carrot');

let count = 100;
while (count < 10) {
  console.log('while: ', count);
  count += 1;
}

let tomatoCount = 100;
do {
  // console.log('do-while: ', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);

for (
  let pumpkinCount = 0, i = 0;
  pumpkinCount < 10;
  pumpkinCount += 1, i += 1
) {
  // console.log(pumpkinCount, i);
}

const fruits = ['apple', 'banana', 'grape', 'ogange', 'mango'];
for (let i = 0; i < fruits.length; i += 1) {
  // console.log(fruits[i]);
}

for (const fruit of fruits) {
  // console.log(fruit);
}

const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};

coffeeCondition: if (true) {
  for (const key in coffee) {
    if (key === 'size') {
      // console.log('break');
      break coffeeCondition;
    }
    // console.log(key);
    // console.log(coffee[key]);
  }
  // console.log('inside an if statement');
}

const coffeeCondition = 'coffee';

function logChocolate() {
  try {
    console.log('try');
    throw 'error';
  } catch {
    console.log('catch');
  }
  //  finally {
  //   console.log('finally');
  //   return 'hello'
  // }
}

logChocolate();
