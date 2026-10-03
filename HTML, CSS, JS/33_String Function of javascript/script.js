// String function in JS
let str ="This is string"
console.log(str)

// know we use indexof function this function is used for first occurence
let position = str.indexOf('i');
console.log(position);

// this one is used for last occurence

position = str.lastIndexOf('g')
console.log(position);

// substring form a string

let substring1 ="This is substring form sring";
console.log(substring1.substring(2, 7));

// know we use slice this one is use also for negitive value

let substr1 ="This is slice string";
console.log (substr1.slice(1,7));

// other function substr this one also count the last mention value like 1,5 also print 5 

let substr2 = "This is substr function";
console.log (substr2.substr(6 ,7)) ;

// know we use another one for lower and upper case letter

let str1 = "This is another function";
console.log(str1.toUpperCase())
// And this one is use for lower case
console.log(str1.toLowerCase())

// and know we use replaced function
let replaced = str1.replace('function' ,'Method');
console.log(replaced);   

// know we use other function trim this one is used for remove white space like example but this one remove start and end space nor middle 

let trim1 = "     this is     trim      string          ";
console.log(trim1.trim());

// also other function charAt
let char =  "this is charAt function";
console.log(char.charAt(3));
