// METHOD PRACTICE
// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     }, //shorter way to write
//     cube(num) {
//         return num ** 3;
//     } //shorter way to write
// }

// console.log(`PI attribute in object "My Math: " ${myMath.PI}`);
// console.log(`square attribute in object "My Math": ${myMath.square(2)}`);
// console.log(`cube attribute in object "My Math": ${myMath.cube(4)}`);

// 'THIS' KEYWORD PRACTICE
// const hero = {
//     name: 'Spider-Man',
//     color: 'red',
//     location: 'New York',
//     catchPhrase() {
//         console.log(`I'm ${this.name}! My spidey-senses are tingling!`);
//     }
// }
// hero.catchPhrase();

// TRY/CATCH METHOD

// try {
//     hello.toUpperCase();
// } catch {
//     console.log("error!!");
// }
// console.log("After");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log('Please pass a string next time');
    }
}