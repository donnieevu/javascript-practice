// FOR LOOPS PRACTICE

// for (let num = 1; num <= 10; num++) {
//     console.log(i);
// }

// for (let even = 2; even <= 20; even += 2) {
//     console.log(even);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

//ITERATING OVER ARRAYS

// let animals = [
//     'tigers',
//     'bears',
//     'cheetahs',
//     'ligers',
//     'zebra',
//     'gorilla',
//     'horse',
//     'elephant',
//     'giraffe',
//     'monkeys',
//     'vultures',
//     'whale',
//     'dolphin'
// ];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

//NESTED LOOPS

// for (let i = 1; i <= 5; i++) {
//     console.log(`i is: ${i}`);
//     for (j = 1; j <= 3; j++) {
//         console.log(`        j is: ${j}`);
//     }
// }

// let seatingChart = [
//     ['Donny', 'Goku', 'Vegeta'],
//     ['Gohan', 'Goten', 'Trunks', 'Kakashi'],
//     ['Naruto', 'Sasuke', 'Sakura', 'Orochimaru']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     let row = seatingChart[i];
//     console.log(`ROW #${i + 1} `);
//     for (let j = 0; j < row.length; j++) {
//         console.log('         ' + row[j]);
//     }
// }

// for (let row of seatingChart) {
//     for (let person of row) {
//         console.log(person);
//     }
// } //for of loop, easier than above.

//FOR OF LOOPS

const topics = [
    'anime',
    'cooking',
    'video-games',
    'basketball',
    'football',
    'tennis'
];

// for (let i = 0; i < topics.length; i++) {
//     console.log(`Visit youtube.com/${topics[i]}`);
// } //regular use of for loop

for (let topic of topics) {
    console.log(topic);
}

// for (let char of "wassup my doode") {
//     console.log(char);
// }

// Looping through Objects (not common)

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     donny: 90,
//     naruto: 99,
//     sasuke: 99,
//     tobi: 87,
//     curry: 30,
//     dame: 0,
//     klay: 11
// };

// for (let person in testScores) {
//     console.log(person);
// } //first way 

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length); //second way