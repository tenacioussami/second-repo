var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
var op = prompt("Enter operator (+, -, *, /):");

var str = num1 + " " + op + " " + num2 + " = ";
var result = eval(str);

var message = str + '=' + result;
console.log(message);