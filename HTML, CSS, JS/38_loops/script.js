
// ========================================
// JavaScript Loops Practice
// ========================================


// ========================================
// 1. For Loop - Print 1 to 10
// ========================================

// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }


// ========================================
// 2. For Loop - Print Even Numbers
// ========================================

// for (let num = 2; num <= 20; num = num + 2) {
//     console.log(num);
// }


// ========================================
// 3. For Loop - Print Numbers in Reverse
// ========================================

// for (let num = 10; num >= 1; num--) {
//     console.log(num);
// }


// ========================================
// 4. For Loop - Multiplication Table
// ========================================

// for (let num = 1; num <= 10; num++) {
//     console.log(num * 5);
// }


// ========================================
// 5. For Loop + If - Print Odd Numbers
// ========================================

// for (let num = 1; num <= 20; num++) {
//     if (num % 2 === 1) {
//         console.log(num);
//     }
// }


// ========================================
// 6. For Loop + If/Else - Even or Odd
// ========================================

// for (let num = 1; num <= 18; num++) {
//     if (num % 2 === 0) {
//         console.log(num, "Even");
//     } else {
//         console.log(num, "Odd");
//     }
// }


// ========================================
// 7. For Loop + If - Multiples of 3
// ========================================

// for (let num = 1; num <= 18; num++) {
//     if (num % 3 === 0) {
//         console.log(num);
//     }
// }


// ========================================
// 8. For Loop - Total of Multiples of 3
// ========================================

// let total = 0;

// for (let num = 1; num <= 20; num++) {
//     if (num % 3 === 0) {
//         total = total + num;
//     }
// }

// console.log(total);


// ========================================
// 9. For Loop + Multiple Conditions
// Print numbers that are even and divisible by 4
// ========================================

// for (let num = 1; num <= 20; num++) {
//     if (num % 2 === 0 && num % 4 === 0) {
//         console.log(num);
//     }
// }


// ========================================
// 10. While Loop - Calculate Total 1 to 10
// ========================================

// let num = 1;
// let totalSum = 0;

// while (num <= 10) {
//     totalSum = totalSum + num;
//     num++;
// }

// console.log(totalSum);


// ========================================
// Important:
// % 2 === 0  → Even number
// % 2 === 1  → Odd number
// % 3 === 0  → Divisible by 3
// % 4 === 0  → Divisible by 4
// ========================================
// let num = 1;

// do {
//     console.log(num);
//     num++;
// } while (num <= 5);