const dummyContent = document.querySelector('.dummy');
for (let i = 0; i < 1000; i++) {
  dummyContent.textContent += `テキスト ${i}`;
}

window.addEventListener('scroll', function () {
  const button = document.querySelector('.moveToTop');
  const pageHeight = document.body.clientHeight;
  if (window.scrollY >= pageHeight / 2) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

const button = document.querySelector('.moveToTop');
button.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
