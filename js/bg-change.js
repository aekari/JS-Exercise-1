// The following program in the bg-change.js file changes the background of a div when that element is clicked on. When the user hovers over the div, the pointer is changed from an arrow to a pointer.



// create a variable called bgColor and assign it to the HTML div element with an id called #bg-color using the .querySelector
var bgColor = document.querySelector('#bg-color');

// create a function called numInRange that takes in two variables within its parameters called 'min' and 'max.' It will return a number, rounded down to the next integer that multiplies the min and max variables by a number between 0 and 1, and will add the min number to that integer
function numInRange(min,max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// create a function called changeColor that generates a 'random' 6 digit hex code value and assigns it to the CSS background color attribute for bgColor
function changeColor(){
	//console.log('click');
	bgColor.style.backgroundColor = "#" + numInRange(100000, 999999);	
	// console.log(Math.random());
}

// when bgColor is clicked, run the changeColor function
bgColor.addEventListener('click', changeColor);




// an event listener will listen for events (hover, etc.)
// querySelector allows you to select a single element from your document