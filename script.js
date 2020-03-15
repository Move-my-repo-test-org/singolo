const MENU = document.getElementById('menu');
const VERT_BTN = document.getElementById('vert-button');
const VERT_SCR = document.getElementById('vert-screen');
const HOR_BTN = document.getElementById('hor-button');
const HOR_SCR = document.getElementById('hor-screen');

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
