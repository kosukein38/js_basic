const countupButton = document.querySelector('.countup');
countupButton.addEventListener('click', function () {
  const counter = document.querySelector('.counter');
  const count = parseInt(counter.textContent);
  if (count > 9) {
    alert('カウントできません。カウントは10までです!');
  } else {
    counter.textContent = count + 1;
  }
});
