var cities = ['New York', 'Washington DC', 'Compton', 'Seattle', 'LA'];
var ul = document.createElement('ul');

for (var x = 0; x < cities.length; x++){
	var li = document.createElement('li');
	li.innerHTML = cities[x];
	ul.appendChild(li);
}

document.body.appendChild(ul);

/*
for (var x = 0; x < cities.length; x++){
	if(cities[x] !== 'Seattle'){
		console.log(cities[x]);
	}
}
*/


//'x++'' can also be writeen as 'x = x + 1'