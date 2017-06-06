

var text = 'The sum is ';
function addIt(numA, numB){
		var total = numA + numB;
		console.log(text + total);
}

//addIt(8,8);
//addIt(10,10);

var Ashleigh = {
	arms: 2,
	isSmart: true,
	hairColor: 'black',
	slogan: function(what){
		console.log(what + ' is awesome');
	}
}

Ashleigh.slogan('JavaScript');
Ashleigh.hairColor = 'blue';

console.log(Ashleigh.hairColor);

//in the example above, 'slogan' is a method on the Asheigh object.
//don't call a function before it's created!
//booleans are not placed in quotations. If they were, they would instead be strings




/*
function addIt(numA, numB){
		var total = numA + numB;
		console.log(total);
}

addIt(8,8);
addIt(10,10);
*/






/*
functions addIt(){
		var numA = 2;
		var numB = 3;
		var total = numA + numB;
		console.log(total);
}

addIt();
*/