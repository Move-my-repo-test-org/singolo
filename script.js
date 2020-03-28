const MENU = document.getElementById('menu');
const MENU_CONTAINER = document.querySelector('.menu-container')
const BURGER = document.getElementById('burger');
const HEADER = document.querySelector('.header-container');
const VERT_BTN = document.getElementById('vert-button');
const VERT_SCR = document.getElementById('vert-screen');
const HOR_BTN = document.getElementById('hor-button');
const HOR_SCR = document.getElementById('hor-screen');
const SLIDER = document.querySelector('.slider-container');
const LEFT_ARROW = document.getElementById('arrow-left');
const RIGHT_ARROW = document.getElementById('arrow-right');
const PORTFOLIO_BUTTONS = document.getElementById('buttons');
const IMAGES_BLOCK = document.getElementById('images-block');
const IMAGES = IMAGES_BLOCK.querySelectorAll('.portfolio-image');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

document.addEventListener('scroll', function (event) {
  const currentPos = window.scrollY;
  const sections = document.querySelectorAll('main>section');

  sections.forEach((el) => {
    if (el.offsetTop <= currentPos && (el.offsetTop + el.offsetHeight) > currentPos) {
      MENU.querySelectorAll('a').forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      });
    } 
  });

});

BURGER.addEventListener('click', (event) => {
  if (!HEADER.classList.contains('open')) {
    HEADER.classList.add('open');
    BURGER.classList.add('opening');
    BURGER.addEventListener('animationend', function() { 
      this.classList.remove('opening');
      this.classList.add('vert');
    });
    MENU.classList.add('slide-in');
    MENU.addEventListener('animationend', function() { 
      this.classList.remove('slide-in');
      HEADER.classList.remove('open');
      HEADER.classList.add('open');
    });
  } else {
    
    BURGER.classList.add('close');
    BURGER.addEventListener('animationend', function() { 
      this.classList.remove('close');
      this.classList.remove('vert');
    });
    MENU.classList.add('slide-out');
    MENU.addEventListener('animationend', function() { 
      this.classList.remove('slide-out');
      HEADER.classList.remove('open');
    });
    
  }
});

VERT_BTN.addEventListener('click', (event) => {
  VERT_SCR.classList.toggle('invisible');
});

HOR_BTN.addEventListener('click', (event) => {
  HOR_SCR.classList.toggle('invisible');
});

let currentSlideNumber = 0;
let slides = SLIDER.querySelectorAll('.slide');
let nextSlideNumber = 1;

LEFT_ARROW.addEventListener('click', (event) => {

  if (currentSlideNumber == slides.length - 1) {
    nextSlideNumber = 0;
  } else if (currentSlideNumber < slides.length) {
    nextSlideNumber = currentSlideNumber + 1;
  }

  rightOut();
  leftIn(); 

  currentSlideNumber = nextSlideNumber;  

});

function rightOut() {
  slides[currentSlideNumber].classList.add('right-out');
  slides[currentSlideNumber].addEventListener('animationend', function() {
    this.classList.remove('right-out');
    this.classList.remove('current');
  });
}
  
function leftIn() {
  slides[nextSlideNumber].classList.add('left-in');
  slides[nextSlideNumber].classList.add('current');
  slides[nextSlideNumber].addEventListener('animationend', function() { 
    this.classList.remove('left-in');
    this.classList.remove('current');
    this.classList.add('current');
  }); 
}

RIGHT_ARROW.addEventListener('click', (event) => {

  if (currentSlideNumber == 0) {
    nextSlideNumber = slides.length - 1;
  } else if (currentSlideNumber > 0) {
    nextSlideNumber = currentSlideNumber - 1;
  }  
 
  leftOut();
  rightIn(); 

  currentSlideNumber = nextSlideNumber;  

});

function leftOut() {
  slides[currentSlideNumber].classList.add('left-out');
  slides[currentSlideNumber].addEventListener('animationend', function() {
    this.classList.remove('left-out');
    this.classList.remove('current');
  });
}
  
function rightIn() {
  slides[nextSlideNumber].classList.add('right-in');
  slides[nextSlideNumber].classList.add('current');
  slides[nextSlideNumber].addEventListener('animationend', function() { 
    this.classList.remove('right-in');
    this.classList.remove('current');
    this.classList.add('current');
  }); 
}
PORTFOLIO_BUTTONS.addEventListener('click', (event) => {
  if (event.target !== PORTFOLIO_BUTTONS) {
    PORTFOLIO_BUTTONS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  
    mixImages(IMAGES);
  } 
});

function mixImages(array) {
	let currentIndex = array.length;
  let randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		array[currentIndex].before(array[randomIndex]); 
	}
}

IMAGES_BLOCK.addEventListener('click', (event) => {
  IMAGES.forEach(el => el.classList.remove('selected'));
  if (event.target !== IMAGES_BLOCK){
    event.target.classList.add('selected');
  }
});

BUTTON.addEventListener('click', (event) => {
  let inputs = document.querySelector('form').querySelectorAll('input');
  let empty = false;
  for (let el of inputs) {
    if (el.hasAttribute('required')) {
      if (el.value.toString() == '') {
        empty = true;
      }
    }
  }
  if (empty == false) {
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
  document.querySelector('form').reset();
})


