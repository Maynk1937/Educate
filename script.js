let menu = document.getElementById('menu');
let close = document.getElementById('close');
let navlinks = document.getElementById('nav-links');

menu.addEventListener('click', ()=>{
    navlinks.style.display= 'block';
})
close.addEventListener('click', ()=>{
    navlinks.style.display= 'none';
})