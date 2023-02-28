// The following code in the functions-methods.js file prints to the console a concatenated sentence with a string and the sum of two integers. It also has an object called Ashleigh with some variables and prints to the console a slogan which again, demonstrates concatenation.


// Create a global string variable called text and assign it a value of 'the sum is'
var text = 'The sum is ';

// Create a function called addIt that takes in to variables within its parameters, numA and numB. Locally within the function called addIt, there is a variable called total that is assigned to the sum of numA and numB. It then concatenates the value of the variable 'text' and the integer 'total'
function addIt(numA, numB){
		var total = numA + numB;
		console.log(text + total);
}

// Here, we are calling the function addIt and passing values through it. It consoles "The sum is 20."
addIt(10,10);


var Ashleigh = {			// the Ashleigh object has the following variables
	arms: 2,				// a variable called arms that takes an int datatype
	isSmart: true,			// a variable called isSmart that takes a boolean datatype
	hairColor: 'black',		// a variable called hairColor that takes a string datatype
	slogan: function(what){	// a method that takes a variable called "what" and does the following:
		console.log(what + ' is awesome');	// concatenates the variable 'what' and ' is awesome', and prints both to the console.
	}
}


Ashleigh.slogan('JavaScript');		// the 'what' variable is assigned a string: 'JavaScript'
Ashleigh.hairColor = 'blue';		// reassigning the value of hairColor from 'black' to 'blue'

console.log(Ashleigh.hairColor);	// Ashleigh's hair is now blue

//in the example above, 'slogan' is a method on the Ashleigh object.
//don't call a function before it's created!
//booleans are not placed in quotations. If they were, they would instead be strings



// this function has 2 parameters
function addIt(numA, numB){
		var total = numA + numB;
		console.log(total);
}

addIt(8,8); // prints 16 to the console
addIt(10,10); // prints 20 to the console


// this function has no parameters, and two local variables
function addIt(){
		var numA = 2;
		var numB = 3;
		var total = numA + numB;
		console.log(total);
}

// you call the function and it will print 5 to the console
addIt();