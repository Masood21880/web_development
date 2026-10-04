// javascript
// JavaScript Interaction
// Interaction allows JavaScript to communicate with the user
// through messages, input fields, and confirmation boxes.


// ==================== ALERT ====================

// alert() is used to display a message to the user.
// It does not take input from the user.

// alert("This is Alert");


// ==================== PROMPT ====================

// prompt() is used to take input from the user.
// It returns the value entered by the user.

// let name = prompt("What is your name?", "Guest");

// console.log(name);


// ==================== CONFIRM ====================

// confirm() displays a message with OK and Cancel buttons.
// It returns true when the user clicks OK.
// It returns false when the user clicks Cancel.

let deletePost = confirm("Do you really want to delete this post");

// console.log(deletePost);

if (deletePost) {
    console.log("Your post has been successfully deleted");
} else {
    console.log("Your post has not been deleted");
}


// ==================== PROMPT WITH IF/ELSE ====================

// prompt() can be used with if/else to check user input.

// let age = prompt("Enter your age");

// if (age >= 18) {
//     console.log("You are eligible");
// } else {
//     console.log("You are not eligible");
// }


// ==================== PROMPT WITH NUMBER ====================

// prompt() returns user input as a string.
// Number() converts the input into a number.

// Taking the first number from the user.
// let num1 = Number(prompt("Enter first number:"));

// Taking the second number from the user.
// let num2 = Number(prompt("Enter second number:"));

// Adding both numbers and storing the result.
// let result = num1 + num2;

// Displaying the final result in the console.
// console.log(result);
