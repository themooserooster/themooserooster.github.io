console.log('Hello World!');

var myName = "Steve";

// var hiPerson = function (name) {...
function hiPerson (name, age) {
	if (age) {
		return name + " is " + age + "years old!"; 
	}

	return "Hi, my name is " + name + "!";
}

console.log(hiPerson(myName));

var greeting = hiPerson(myName);
console.log(greeting);

hiPerson(myName);

var myObject = new Object();
myObject = {
	shape: 'roundish',
	weight: 5000,
	doStuff: function () {
		console.log('explosions!!!');
	}
};

var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "#F00";
ctx.fillRect(100, 100, 200, 200);

var box = {x:0, y:0, width: 200, height:200};

var moveBox = function () {

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.fillRect(box.x, box.y, box.width, box.height);
	box.x = (box.x < 500) ? box.x + 1 : 0;
	box.y = (box.y < 500) ? box.y + 1 : 0; 
	requestAnimationFrame(moveBox);
}

requestAnimationFrame(moveBox);

