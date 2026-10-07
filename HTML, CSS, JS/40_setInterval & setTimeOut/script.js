// setTimeout(function (){
//     console.log("Hello Masood khan");

// },  3000);

// function greet() {
//     console.log("JavaScript is easy");
// }

// setInterval(greet, 2000);

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById("time").innerHTML = time;
}
setInterval(displayTime , 1000);