const btn1=document.getElementByClassName('btn')[0];
const navbar=document.getElelmentByClassName('navlinks')[0];


btn1.addEventListener('click',()=>{
	navbar.classList.toggle('active');	
});
