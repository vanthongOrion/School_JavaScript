function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}

var name = prompt("Enter your name");
console.log("Your name is " + name);

var yearBorn = prompt("Enter the year you  born");
var age;

age = calculateAge(yearBorn);
console.log("You are " + age + " years old");
