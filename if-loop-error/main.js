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

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato': {
      const message = 'tomato is red!';
      console.log(message);
      break;
    }
    case 'carrot':
    case 'pumpkin': {
      const message = `${vegetable} is orange!`;
      console.log(message);
      break;
    }
    case 'onion': {
      const message = 'onion is white!';
      console.log(message);
      break;
    }
    default: {
      const message = 'not found';
      console.log(message);
      break;
    }
  }
  // if (vegetable === 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegetable === 'onion') {
  //   console.log('onion is white!');
  // }
}

vegetableColor('carrot');