// 2 Parts of functions
// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// } //part 1 
// singSong(); //part 2

//FUNCTION WITH PARAMETER(S)

// function greet(firstName, lastName) {
//     console.log(`Hello there, ${firstName} ${lastName[0]}.`);
// }
// greet("Naruto", "Uzamaki")

// function repeat(msg, numTimes) {
//     let result = ''
//     for (let i = 0; i < numTimes; i++) {
//         result += msg;
//     }
//     console.log(result);
// }
// repeat("yo yo wassup ", 3);

//RETURN KEYWORD PRACTICE
// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }
// console.log(add(1, 2));
// console.log(add(4, 'a'));

//FUNCTION PRACTICE
// function returnDay(day) {
//     let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     if (day < 1 || day > 7) {
//         return null;
//     }
//     for (let i = 1; i <= week.length; i++) {
//         if (i === day) {
//             return week[i - 1];
//         }
//     }
// }

// console.log(returnDay(1));
// console.log(returnDay(7));
// console.log(returnDay(4));
// console.log(returnDay(0));

//FUNCTION EXPRESSION PRACTICE
// const add = function (x, y) {
//     return x + y;
// }
// console.log(`Function Expression Practice: ${add(3, 4)}`);

//HIGHER ORDER FUNCTION PRACTICE (accept other functions as argument)

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

function callTenTimes(f) {
    for (let i = 0; i <= 10; i++) {
        f();
    }
}

callTwice(rollDie);
callTenTimes(rollDie);

// HIGHER ORDER FUNCTION PRACTICE (returns a function)
let mystery = makeMysteryFunc()
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > .5) {
        return function () {
            console.log("Congrats, I am a good function");
        }
    } else {
        return function () {
            alert("VIRUS! RUNNNN")
        }
    }
}
mystery();


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

console.log(isChild(50));
console.log(isAdult(20));
console.log(isSenior(60)); 