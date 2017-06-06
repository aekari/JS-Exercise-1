var bgColor = document.querySelector('#bg-color');

function numInRange(min,max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor(){
	console.log('click');
	bgColor.style.backgroundColor = "#" + numInRange(100000, 999999);	
	console.log(Math.random());
}

bgColor.addEventListener('click', changeColor);




//an event listener will listen for events (hover, etc.)
//querySelector allows you to select a single element from your document