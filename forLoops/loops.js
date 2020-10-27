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

let seatingChart = [
    ['Donny', 'Goku', 'Vegeta'],
    ['Gohan', 'Goten', 'Trunks', 'Kakashi'],
    ['Naruto', 'Sasuke', 'Sakura', 'Orochimaru']
]

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.log(`ROW #${i + 1} `);
    for (let j = 0; j < row.length; j++) {
        console.log('         ' + row[j]);
    }
}