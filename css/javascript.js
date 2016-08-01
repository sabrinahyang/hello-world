/*object creation: object literal syntax*/
var person {
	"name"	: "Zach",
	"age"	: 27,
	"occupation":"Software Developer"
};

var person {
	"name": "Sabrina",
	"age":21,
	"locaton": "NYC"
};

/*Accessing Object Properties*/
	/*Bracket Notation*/
	var myAge = person["age"];
	console.log(myAge): // 21
	/*Dot Notation*/
	var myAge = person.age;
	console.log(myAge): // 21
