let btnLeft2 = document.getElementById('btnLeft2');
let btnRight2 = document.getElementById('btnRight2');
let slides2 = document.getElementsByClassName('slider2__img');
let currentSlide2 = 0;

/*let buttons = document.getElementsByClassName('cats__item');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    slideSwitch(buttons[i].dataset.name)
  });
}*/

function slideSwitch2(slideNumber) {
  if (typeof slideNumber === 'number') {
    for (let i = 0; i < slides2.length; i++) {
      if (i != slideNumber) {
        slides2[i].classList.remove('slider2__img_active');
      } else {
        slides2[i].classList.add('slider2__img_active');
      }
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      if (slides2[i].dataset.name != slideNumber) {
        slides2[i].classList.remove('slider2__img_active');
      } else {
        slides2[i].classList.add('slider2__img_active');
      }
    }
  }
}

function validSlideNumberCheck2(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = slides2.length - 1;
  } else if (slideNumber > slides2.length - 1) {
    validNumber = 0;
  }

  currentSlide2 = validNumber;

  return currentSlide2;
}

btnLeft2.onclick = function() {
  let newSlide = currentSlide2 - 1;
  slideSwitch2(validSlideNumberCheck2(newSlide));
}

btnRight2.onclick = function() {
  let newSlide = currentSlide2 + 1;
  slideSwitch2(validSlideNumberCheck2(newSlide));
}