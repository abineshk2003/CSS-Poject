document.addEventListener('DOMContentLoaded',()=>{

const sidenav=document.querySelector('.sidenav');
const btnnav=document.querySelector('.btn');
const overlay=document.querySelector('.nav-overlay');


btnnav.addEventListener('click',()=>{
 sidenav.classList.add('open');
});

overlay.addEventListener('click',()=>{
 sidenav.classList.remove('open');
});
});