const MENU = document.getElementById('menu');
const VERT_BTN = document.getElementById('vert-button');
const VERT_SCR = document.getElementById('vert-screen');
const HOR_BTN = document.getElementById('hor-button');
const HOR_SCR = document.getElementById('hor-screen');
const SLIDER = document.getElementById('slider');
const LEFT_ARROW = document.getElementById('arrow-left');
const RIGHT_ARROW = document.getElementById('arrow-right');

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