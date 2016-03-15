// Object Example
var person = {
	name: 'Andy',
	age: 21
};

function updatePerson (personObj) {
	personObj.age = 24;
}

updatePerson(person);
console.log(person);

//Array Example
var grades = [15, 88];

function addGrades (gradesArr) {
	gradesArr.push(55);
	debugger;
}

addGrades(grades);
console.log(grades);