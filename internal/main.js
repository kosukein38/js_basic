'use strict';
var hello = 'hello';
var hello = 'hi';
// console.dir(sayTomato);

{
  function sayTomato() {
    var tomato = 'tomato';
  }
}
// console.dir(sayTomato);
var apple = 'apple';
console.log(globalThis);

const coffee = {
  name: 'Caffe Latte',
};
// const coffee2 = coffee;
// coffee2.name = 'Espresso';
const coffee3 = {
  name: 'Caffe Latte',
};
console.log(coffee === coffee3);
