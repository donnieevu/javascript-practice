let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Guess again: ");
    } else {
        guess = prompt("Too low! Guess again: ");
    }
}
if (guess === 'q') {
    console.log("YOU QUIT!");
} else {
    console.log(`YOU GOT IT!!, it took you ${attempts} tries!`);
}
