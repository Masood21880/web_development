let employee = {
    name:"Masood Khan",
    occupation:"Software Eng",
    age:22,
    skills:"html,css,js",

}
console.log(employee.name)

// Array
let skills = [1, 2, 3, "Masood Khan", "Skills", "Education"];

console.log(skills);

// Add an item to the end
skills.push("JavaScript");

console.log(skills);

// Remove the last item
skills.pop();

console.log(skills);

let skill = ["Html","css","javaScript "];
console.log(skill);
console.log(skill[0]);
console.log(skill[2]);
skill.push("React");
console.log(skill);
skill.pop()
console.log(skill)

// know print number 
let number = [10,20,30,40,50];
console.log(number)
console.log(number[1])

// replace 20 with 100
number[1]=100;
console.log(number);

// know we practiced shift and unshift ,shift remove  value from start and unshfit add value in start

let fruit = ["Banana","mango","Apple",];
fruit.shift()
console.log(fruit);
fruit.unshift("Orange")
console.log(fruit);

// know we use splice with the help of splice we remove target value 

let num =[10,20,40,60,70,80,100];
num.splice(0,2);
console.log(num)
