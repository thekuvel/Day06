//Day 06 Tasks
console.log("Day 06 Tasks");

let apiRequest = new XMLHttpRequest();
apiRequest.open("GET", "https://restcountries.com/v3.1/all");
apiRequest.send();

apiRequest.onload = function() {
	let data = JSON.parse(apiRequest.response);

	// a. Get all the countries from Asia continent /region using Filter function
	console.log("a. Get all the countries from Asia continent /region using Filter function");

	let asianCountries = data.filter((value, index, array)=>{
		return value.region === "Asia";
	});

	// console.log(asianCountries);
	asianCountries.forEach((country) =>{
		console.log(country.name.common);
	})

	// b. Get all the countries with a population of less than 2 lakhs using Filter function
	console.log("b. Get all the countries with a population of less than 2 lakhs using Filter function")

	let twoLakhsPopCountries = data.filter((value, index, array) => {
		return value.population <= 200000;
	});

	// console.log(twoLakhsPopCountries);
	twoLakhsPopCountries.forEach((country) =>{
		console.log(`
			${country.name.common}
			Population: ${country.population}
			`);
	})

	// c. Print the following details name, capital, flag, using forEach function
	console.log("c. Print the following details name, capital, flag, using forEach function");

	data.forEach((arrayElement) => {
		console.log(`
			Name: ${arrayElement.name.common}
			Capital: ${arrayElement.capital}
			Flag: ${arrayElement.flag}
			`);
	})

	// d. Print the total population of countries using reduce function
	console.log("d. Print the total population of countries using reduce function");

	const worldPopulation = data.reduce((acc, value, index, array) => {
		return acc + value.population;
	}, 0);

	console.log(`World population: ${worldPopulation}`);

	// e. Print the country that uses US dollars as currency.
	console.log("e. Print the country that uses US dollars as currency.");

	let countries = data.filter((value) => {
		return value.currencies !== undefined;
	});

	let dollarCountries = countries.filter((value)=>{
		for(let i in value.currencies){
			if(value.currencies[i].name === "United States dollar"){
				return value;
			}
		}
	})

	dollarCountries.forEach((country) =>{
		// console.log(country.name.common);
		for(let i in country.currencies){
				console.log(`
					${country.name.common} 
					currencies: ${country.currencies[i].name}
					`);
			}
	})
}