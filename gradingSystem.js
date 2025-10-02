var marks = Number(prompt("Enter your marks: "));
var grade = marks;

if(marks >= 90 && marks <= 100){
    grade = 'A';
}
else if(marks >=85){
    grade = 'A-';
}
else if(marks >= 80){
    grade = 'B+';
}
else if(marks >= 75){
    grade = 'B';
}
else if(marks >= 70){
    grade = 'B-';
}
console.log("Your grade is: " + grade);