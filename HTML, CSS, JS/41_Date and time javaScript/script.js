// let date = new Date();
// console.log(date);

// Date se sirf Year nikalna

// let Year = new Date ();
// console.log(Year.getFullYear());

// let month = new Date ();
// console.log(month.getMonth());

// let day  = new Date ();
// console.log(day.getDay());

// let hour = new Date ();
// console.log(hour.getHours());

// let dt = new Date();

// console.log(dt.getMinutes());

// let date = new Date();

// console.log(date.getFullYear()); // Year
// console.log(date.getMonth() + 1); // Month
// console.log(date.getDate()); // Date
// console.log(date.getDay()); // Weekday
// console.log(date.getHours()); // Hour
// console.log(date.getMinutes()); // Minutes
// console.log(date.getSeconds()); // Seconds
function displayTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("clock").innerText =
        hour + ":" + minute + ":" + second;
}

displayTime();
setInterval(displayTime, 1000);