// ==== 9.1 Declaring and Calling Functions ====
/*
function functionName(parameter, if any)
    functional code should be here;
*/
// a sample basic function that prints
function multiply(x,y){
    document.write(x*y);
}
function binaryAddition(firstNumber, secondNumber){
    alert(firstNumber + secondNumber);
}
function function1(){
    document.write("function1 works like this.");
}
// a sample function that has 1 parameter
function function2( x ){
    alert(x);
}
//a sample function with multiple parameters
function function3( x , y , z){
    var sum = x + y + z;
    alert(x + " + " +y+ " + " +z+ " = " +sum);
}
// ==== 9.2 Event Handlers (Onclick, Onload etc.) ====
function changeImage(){
    document.getElementById("ricardo").src = "surprise.gif";
}
// more events found here https://w3schools.com/tags/ref_eventattributes.asp

// ==== 9.3 Processing Function Outputs ====
/*
1.  Handled using a print function

function(){
    document.write("Hi!");
}


2.  Handled using a return statement

function(){
    let sum = x + y;
    return sum;
}

*/
// ==== 9.4 Math and String Objects ====
/* 
1. Math Function
    let a = Math.PI;
    Math.sin(x);
    Math.cos(y);
    Math.tan(z);
    Msth.trunc(e); //removes decimals




*/
// ==== 9.5 Date and Number Objects ====



