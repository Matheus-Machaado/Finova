var menu = document.querySelector('#menu')
var side = document.querySelector('.sidebar')

menu.addEventListener('click', function(){
    side.classList.toggle('expandir')
})

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

document.querySelector('.card-number-input').oninput = () =>{
document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

function abrirModal(){
const modall = document.getElementById('modal')
modall.classList.add('abrir')

modall.addEventListener('click', (e) => {
  if(e.target.id == 'fecharr' || e.target.id == 'modal')
  modall.classList.remove('abrir')
})
}


