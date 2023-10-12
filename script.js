const rindi = document.querySelector('.regist');
const umar = document.querySelector('.dropdown');

rindi.addEventListener('click', function(){
    umar.classList.toggle('fix');
});

const menutoggle = document.querySelector('.menubtn input');
const nav = document.querySelector('.navbar');
const fix = document.querySelector('body');

menutoggle.addEventListener('click' , function(){
    nav.classList.toggle('slide');
    fix.classList.toggle('fix');
})

