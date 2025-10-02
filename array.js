var num = [1, 2, 3];
console.log(num);
console.log(num.length);
console.log(num[2]);

//add and remove
var num2 = [10, 20, 30,40];
num2.shift(); //remove first element
console.log(num2);

num2.unshift(5); //add element at first
console.log(num2);

num2.push(420); //add element at last
console.log(num2);

num2.pop(); //remove last element
console.log(num2);


//splice
var num3 = [100, 200, 300, 400, 500,800,101];
num3.splice(3,2);
console.log(num3) //remove 1 element from index 2
var result = num3.concat(num2);
console.log(result);