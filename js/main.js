// selectors

const divisor = document.getElementById('divisor');
const slider = document.getElementById('slider');
const item = document.querySelectorAll('.i');
const compare = document.querySelector('#comparison');
const topNav = compare.offsetTop;

// globals

var viewed = false;
let running;
var i = 0;

// event listeners

for (var i = 0, len = item.length; i < len; i++) {
  item[i].addEventListener('click', showA);
}

// funcs

function moveDivisor() {
  divisor.style.width = slider.value / 2 + '%';
}

function showA(faq) {
  //  console.log(this.nextElementSibling);
  if (!this.nextElementSibling) {
    return;
  } else {
    this.nextElementSibling.classList.toggle('vis');
  }
}

function myMove() {
  if (running) {
    console.log('run run run');
    return;
  }

  running = true;
  // console.log(running);
  var elem = divisor;
  let pos = 10,
    countup = true;
  var id = requestAnimationFrame(animation);

  function animation() {
    if (countup) {
      pos++;
      // console.log(pos);
      elem.style.width = Math.abs(pos - 200) / 2 + '%';
      slider.value = Math.abs(pos - 200);
      if (pos >= 200) countup = false;
    } else {
      pos--;
      // console.log(pos);
      elem.style.width = Math.abs(200 - pos) / 2 + '%';
      slider.value = Math.abs(200 - pos);
      if (pos <= 10)
        cancelAnimationFrame(id), (running = false), (viewed = true);
    }
    if (running) requestAnimationFrame(animation);
  }
}

function scrollAnimate() {
  if (!viewed) {
    console.log(topNav);
    console.log(window.scrollY + (window.innerHeight - 200));
    if (window.scrollY + (window.innerHeight - 200) >= topNav) {
      myMove();
    }
  }
}

window.addEventListener('scroll', scrollAnimate);

window.onload = moveDivisor;
