// this is the javaScript function
// function greet(){
//     console.log("Masood Khan");
// }
// greet();

function greet(name) {
    console.log("Hello " + name)

}

greet("Masood Khan");
greet("Kamran");
 
// this one is used for returen 

function multiply(a,b){
    return a*b;
}
let result = multiply(20 ,5);
console.log(result);

// know we find sum 
function addNumber(a,b,c){
    return a+b+c;
}
let results = addNumber(10,20,40);
console.log(results);

// know we use default Parameter
function greeting(name = "Gust"){
    console.log("hello " + name);
}
greeting("Masood");
greeting();

// also practiced default parameter

function welcome(name = "User"){
    console.log("Welcome " + name);
}
welcome("Masood");
welcome();

function isEven(num){
    if(num % 2 === 0 ){
        return "Even"
    }else{
        return "odd"
    }
}
let result3 = isEven(19);
console.log(result3)

function 