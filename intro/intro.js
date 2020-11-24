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

// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// console.log('array: ' + colors);
// console.log('slice method ' + colors.slice(3)); //takes element 3 and after.
// console.log(colors); //slice doesn't change array after

// let warmColors = colors.slice(0, 3); //takes elements from index 0-2, doesnt take element 3(last element)
// console.log('warm colors :' + warmColors);

// colors.splice(-1, 1)
// console.log('colors array after splice (removing violet): ' + colors);
// colors.splice(1, 0, 'red-orange');
// console.log('colors after splice (adding red-orange between red and orange):' + colors);

// //NESTED ARRAYS
// const gameBoard = [
//     ['X', 'O', 'X'],
//     ['X', null, 'O'],
//     ['X', 'O', 'O']
// ];
// console.log(gameBoard);
// console.log('index of row 0 item 3: ' + gameBoard[0][2]);

//CREATING OBJECTS
let midterms = {
    donny: 96,
    thomas: 70
};

console.log("Donny's midterm grade is " + midterms.donny);
midterms.thomas = 'C';
console.log("Thomas' midterm grade is " + midterms.thomas);


//NESTING ARRAYS AND OBJECTS
let comments = [
    { username: 'Tammy', text: 'lololol', votes: 9 },
    { username: 'BballLover', text: 'ball out!!', votes: 19 }
]
console.log(comments[1].username + ' commented on your post: ' + comments[1].text);


//RANDOM INTERVIEW PRACTICE
function consecutiveOne(arr) {
    let currentConsec = 0;
    let maxConsec = 0;
    for (let i = 0; i < arr.length; i++) {
        currentConsec = arr[i] === 1 ? currentConsec += 1 : 0; //ternary operator
        maxConsec = maxConsec < currentConsec ? currentConsec : maxConsec; //ternary operator
        // if (arr[i] === 1) {
        //     currentConsec++
        // } else {
        //     currentConsec = 0;
        // }

        // if (maxConsec < currentConsec) {
        //     maxConsec = currentConsec;
        // }
    }
    return maxConsec;
}
console.log(consecutiveOne([1, 1, 0, 1, 1, 1]));
//first i will create counter to keep track of consectives

//then i will compare the numbers within the array 
//to eachother to see if they are the same

//if they are the same, i will add it to the counter
//if they are different i will go to the next number until 
//it hits consecutively again



