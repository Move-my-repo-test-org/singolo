const MENU = document.getElementById('menu');
const VERT_BTN = document.getElementById('vert-button');
const VERT_SCR = document.getElementById('vert-screen');
const HOR_BTN = document.getElementById('hor-button');
const HOR_SCR = document.getElementById('hor-screen');
const SLIDER = document.getElementById('slider');
const LEFT_ARROW = document.getElementById('arrow-left');
const RIGHT_ARROW = document.getElementById('arrow-right');
const IMAGES = document.getElementById('images-block');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

VERT_BTN.addEventListener('click', (event) => {
  VERT_SCR.classList.toggle('invisible');
});

HOR_BTN.addEventListener('click', (event) => {
  HOR_SCR.classList.toggle('invisible');
});

let currentSlideNumber = 0;
let slides = SLIDER.querySelectorAll('.slide');

LEFT_ARROW.addEventListener('click', (event) => {
  slides[currentSlideNumber].classList.remove('current');
  if (currentSlideNumber == 0) {
    currentSlideNumber = slides.length - 1;
  } else if (currentSlideNumber > 0) {
    currentSlideNumber -= 1;
  }
  slides[currentSlideNumber].classList.add('current');
});

RIGHT_ARROW.addEventListener('click', (event) => {
  slides[currentSlideNumber].classList.remove('current');
  if (currentSlideNumber == slides.length - 1) {
    currentSlideNumber = 0;
  } else if (currentSlideNumber < slides.length) {
    currentSlideNumber = currentSlideNumber + 1;
  }
  slides[currentSlideNumber].classList.add('current');
});

IMAGES.addEventListener('click', (event) => {
  IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('selected'));
  event.target.classList.add('selected');
});

BUTTON.addEventListener('click', (event) => {
  BUTTON.removeAttribute('type');
  BUTTON.setAttribute('type', 'button');
  document.getElementById('message-block').classList.remove('invisible');
  if (document.getElementById('subject').value.toString() == '') {
    document.querySelectorAll('.subject').forEach(el => el.classList.toggle('invisible'));
  } else {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('subject-result').innerText = subject;
  }
  if (document.getElementById('description').value.toString() == '') {
    document.querySelectorAll('.description').forEach(el => el.classList.toggle('invisible'));
  } else {
    const description = document.getElementById('description').value.toString();
    document.getElementById('description-result').innerText = description;
  }
})

CLOSE_BUTTON.addEventListener('click', (event) => {
  document.getElementById('message-block').classList.add('invisible');
  if (document.getElementById('subject').value.toString() == '') {
    document.querySelectorAll('.subject').forEach(el => el.classList.toggle('invisible'));
  } else {
    document.getElementById('subject-result').innerText = '';
  }
  if (document.getElementById('description').value.toString() == '') {
    document.querySelectorAll('.description').forEach(el => el.classList.toggle('invisible'));
  } else {
    document.getElementById('description-result').innerText = '';
  }
})