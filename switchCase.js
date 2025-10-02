var num = 10;
switch(num){
    case 10:
        console.log("10");
        break;
    case 15:
        console.log("15");
        break;  
    case 20:
        console.log("20");
        break;    
    default:
        console.log("No match found");        
}


//Date confirmation 

var date = new Date();
var day = date.getDay();

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;                            
}
