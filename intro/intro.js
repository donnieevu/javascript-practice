// HELLO WORLD PRACTICE
// console.log("HELLO WORLD");
// let total = 1 + 3;
// console.log("GOODBYE");

// CONDITIONAL STATEMENTS PRACTICE

// let random = Math.random();
// if (random < .5) {
//     console.log("YOUR NUMBER IS LESSS THAN 0.5!!");
//     console.log(random);
// }
// else{
//     console.log("YOUR NUMBER IS GREATER THAN 0.5");
//     console.log(random);
// }

// const dayOfWeek = prompt("Enter a day of the week").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("UGH I HATE MONDAYS");
// } else if (dayOfWeek === "saturday") {
//     console.log("I LOVE SATRURDAYS");
// } else if (dayOfWeek === "friday") {
//     console.log("FRIDAY IS THAT DAY!");
// } else {
//     console.log("MEH");
// }

//NESTED CONDITIONALS PRACTICE
// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log("Valid password");
//     } else {
//         console.log("Password cannot contain spaces");
//     }
// } else {
//     console.log("password is too short! Must be 6+ characters");
// }

// ARRAY PRACTICE

// let movieLine = ['tom', 'goku', 'frieza'];
// console.log("array before push method " + movieLine);
// movieLine.push("cooler");
// console.log("array after push method " + movieLine);
// movieLine.pop();
// console.log("array after pop method " + movieLine);

// console.log("array before shift method " + movieLine);
// movieLine.shift();
// console.log("array after shift method " + movieLine);
// movieLine.unshift('cell');
// console.log("array after unshift method " + movieLine);

// SLICE SPLICE PRACTICE

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log('array: ' + colors);
console.log('slice method ' + colors.slice(3)); //takes element 3 and after.
console.log(colors); //slice doesn't change array after

let warmColors = colors.slice(0, 3); //takes elements from index 0-2, doesnt take element 3(last element)
console.log('warm colors :' + warmColors);

colors.splice(-1, 1)
console.log('colors array after splice (removing violet): ' + colors);
colors.splice(1, 0, 'red-orange');
console.log('colors after splice (adding red-orange between red and orange):' + colors);