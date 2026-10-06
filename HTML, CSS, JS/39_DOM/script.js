// ========================================
// JavaScript DOM Practice
// ========================================


// ========================================
// 1. getElementById()
// ========================================

// Select element using ID
// let heading = document.getElementById("title");

// Change text
// heading.innerText = "Masood Khan";


// ========================================
// 2. getElementById() - Another Example
// ========================================

// let title = document.getElementById("heading");

// title.innerText = "I am learning DOM";


// ========================================
// 3. querySelector() - Class
// ========================================

// Select element using class
// let paragraph = document.querySelector(".quary");

// paragraph.innerText = "I want to learn something new";


// ========================================
// 4. querySelector() - ID
// ========================================

// let title = document.querySelector("#title");

// title.innerText = "My Portfolio";


// ========================================
// 5. querySelector() - Another Class
// ========================================

// let description = document.querySelector(".description");

// description.innerText = "I am learning DOM";


// ========================================
// 6. querySelectorAll()
// ========================================

// Select all elements with class "skill"
// let skills = document.querySelectorAll(".skill");

// Change text of all selected elements
// for (let skill of skills) {
//     skill.innerText = "I am Masood Khan, Software Engineer";
// }


// ========================================
// 7. Change CSS using DOM
// ========================================

// let h2 = document.querySelector("#headings");

// h2.style.color = "blue";
// h2.style.backgroundColor = "yellow";
// h2.style.fontSize = "35px";


// ========================================
// 8. innerHTML
// ========================================

let box = document.querySelector("#box");

// Change HTML content
box.innerHTML = "<h2>Hello Masood</h2>";