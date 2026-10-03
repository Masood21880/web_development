// today we practiced if else else if and switch condition
// let age = 18;
// if (age > 18){
//     console.log("You are eligible to cost vote");
// }
// else if(age == 18){
//     console.log("you are eligible")
// }
// else{
//     console.log("You are not eligible ");
// }

// know we practiced switch condition

// const eggs = 38;
// switch (eggs) {
//     case 10:
//         console.log("The value of eggs is 10 ")
//         break;
//     case 20:
//         console.log("The valu of eggs is 20 ")
//         break;
//     case 38:
//         console.log("The value of eggs is 38")
//         break;
//     default:
//         console.log("The value of eggs is none of theme ")
//         break;
// }

// calculate grade

let marks = 67;
if(marks >= 85){
    console.log("Grade: A")

}
else if(marks >= 80){
    console.log("Grade: A-")
}
else if(marks >=75){
    console.log("Grade: B+")
}
else if(marks >= 70){
    console.log("Grade: B")
}
else if (marks >= 65){
    console.log("Garde: C+")
}
else if (marks >= 60){
    console.log("Grade: C")
}
else{
    console.log("Fail")
}

// this one just find positive nad negative num

let num = 2;
if (num < 0){
    console.log("Negative")
}
else if(num > 0){
    console.log("positive")
}
else{
    console.log("zero")
}

// switch calculater
let num1 = 20;
let num2 = 5 
let operator = "+"
switch (operator) {
    case "+":
        console.log(num1 + num2)
        break;
    case "-":
        console.log(num1 - num2)
        break;
    case "*":
    console.log(num1 * num2)
        break;
    case "/":
        console.log(num1 /num2 )
        break;
    default:
        console.log("Invalid operator")
}