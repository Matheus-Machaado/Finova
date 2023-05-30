var menu = document.querySelector('#menu')
var side = document.querySelector('.sidebar')

menu.addEventListener('click', function(){
    side.classList.toggle('expandir')
})