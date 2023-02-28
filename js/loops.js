// The following code in the loops.js file prints to the browser and the console a list of cities. In the browser it is displayed as an unordered, bulleted list.

var cities = ['New York', 'Washington DC', 'Compton', 'Seattle', 'LA']; // an array with a size of 4 and a length of 5 cities
var ul = document.createElement('ul'); // in the html document (website) create an unordered list

for (var x = 0; x < cities.length; x++){ // create a method that will continuously do what is within the parentheses and each time, add 1 to x, which at the start, has a value of 0. Stop running the method when x is larger than the length of the cities array.
	var li = document.createElement('li');	// create a list item called li
	li.innerHTML = cities[x];				// the li is assigned to whatever the value of the index of cities currently is (this function loops through the array)
	ul.appendChild(li);						// append the newly created li to the ul that was created on line earlier
}

document.body.appendChild(ul); // now place the ul with the li elements inside into the document body 


for (var x = 0; x < cities.length; x++){
	if(cities[x] !== 'Seattle'){
		console.log(cities[x]);
	}
}



//'x++'' can also be written as 'x = x + 1'