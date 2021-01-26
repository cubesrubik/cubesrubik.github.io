
// selectors

const divisor = document.getElementById("divisor");
const slider = document.getElementById("slider");
const item = document.querySelectorAll(".i");

// event listeners 

for (var i = 0, len = item.length; i < len; i++) {
	item[i].addEventListener("click", showA);
  }

// funcs

function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}


function showA(faq) {
//  console.log(this.nextElementSibling);
if (!this.nextElementSibling) {
    return;
  } else {
    this.nextElementSibling.classList.toggle("vis");
  }
  
}


window.onload = moveDivisor;

