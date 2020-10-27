// 2 Parts of functions
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
} //part 1 
singSong(); //part 2

//FUNCTION WITH PARAMETER(S)

function greet(firstName, lastName) {
    console.log(`Hello there, ${firstName} ${lastName[0]}.`);
}
greet("Naruto", "Uzamaki")

function repeat(msg, numTimes) {
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += msg;
    }
    console.log(result);
}
repeat("yo yo wassup ", 3);

//return keyword practice
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}
console.log(add(1, 2));
console.log(add(4, 'a')); 