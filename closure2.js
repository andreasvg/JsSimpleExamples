function newEmployee(firstName, lastName) {
	var fName = firstName, lName = lastName;
var greetingText = 'Hello and welcome ';

function setFirstName(name) {
	fName = name;
}

function setLastName(name) {
	lName = name;
 }

function getFullName() {
	return fName + ' ' + lName;
}

function getGreeting() {
	return greetingText + getFullName();
}

return {
	setFirstName: setFirstName,
	setLastName: setLastName,
	getFullName: getFullName,
	getGreeting: getGreeting
}
}

var emp = newEmployee('John', 'Smith');
console.log(emp.getGreeting());
emp.setFirstName('Sally');
emp.setLastName('Jones');
console.log(emp.getGreeting());
