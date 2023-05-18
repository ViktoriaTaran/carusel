
window.addEventListener('load', () => {
//btn
let prev = document.querySelector('.button1');
let next = document.querySelector('.button2');

//img
let slider = document.querySelector('.carusel');
let img = document.querySelectorAll('.carusel img');

let counter = 0;
let step = img[0].clientWidth;
console.log(step);



slider.style.transform = 'translateX(' + `${-step * counter}px)`;

next.addEventListener('click', ()=> { 
	counter >= img.length - 1 ? (counter = -1) : null;

	slider.classList.add('transformAnimation');
	counter++;
	slider.style.transform = 'translateX(' + `${-step * counter}px)`;	
});



prev.addEventListener('click', ()=> { 
	if(counter <=0) counter = img.length;
	slider.classList.add('transformAnimation');
	counter--;
	slider.style.transform = 'translateX(' + `${-step * counter}px)`;	
});

});