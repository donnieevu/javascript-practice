// FOR EACH PRACTICE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

// const animes = [
//     {
//         title: 'Naruto',
//         score: 90
//     },
//     {
//         title: 'Dragon Ball Z',
//         score: 89
//     },
//     {
//         title: 'One Piece',
//         score: 95
//     },
//     {
//         title: 'Attack On Titan',
//         score: 94
//     },
//     {
//         title: 'Full Metal Alchemist',
//         score: 95
//     }
// ]

// animes.forEach(function (anime) {
//     console.log(`${anime.title} - ${anime.score}/100 `);
// })


// MAP PRACTICE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doubles);

// const animes = [
//     {
//         title: 'Naruto',
//         score: 90
//     },
//     {
//         title: 'Dragon Ball Z',
//         score: 89
//     },
//     {
//         title: 'One Piece',
//         score: 95
//     },
//     {
//         title: 'Attack On Titan',
//         score: 94
//     },
//     {
//         title: 'Full Metal Alchemist',
//         score: 95
//     }
// ]
// const titles = animes.map(function (anime) {
//     return anime.title.toUpperCase();
// })
// console.log(titles)

// ARROW FUNCTION PRACTICE

// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(1, 4));

// const square = (num) => {
//     return num ** 2;
// }
// console.log(square(5));

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(rollDie());

// IMPLICIT RETURNS 

// const cube = (num) => (
//     num ** 3
// )
// console.log(cube(5));

// const add = (a, b) => a + b; //one liner implicit returns.

// const cereals = [
//     {
//         title: 'Frosted Flakes',
//         score: 90
//     },
//     {
//         title: 'POPS',
//         score: 89
//     },
//     {
//         title: 'Fruit Loops',
//         score: 95
//     },
//     {
//         title: 'Cinnamon Toast Crunch',
//         score: 94
//     },
//     {
//         title: 'Cookie Crisp',
//         score: 95
//     }
// ]

// const bestCereal = cereals.map(function (cereal) {
//     return `${cereal.title} - ${cereal.score / 10}`
// })
// console.log(bestCereal); //original way to write

// const bestCereal = cereals.map((cereal) => (
//     `${cereal.title} - ${cereal.score / 10}`
// ))
// console.log(bestCereal); //arrow function way to write


//SET TIMEOUT/INTERVAL PRACTICE
// console.log("HELLO!!");
// setTimeout(() => {
//     console.log(".. u dere?");
// }, 3000)


// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000)
// // clearInterval(id);

//FILTER PRACTICE 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let ten = numbers.filter(n => {
//     return n < 10;
// })
// console.log(ten);

const animes = [
    {
        title: 'Naruto',
        score: 30,
        year: 1999
    },
    {
        title: 'Dragon Ball Z',
        score: 20,
        year: 1989
    },
    {
        title: 'One Piece',
        score: 95,
        year: 1999
    },
    {
        title: 'Attack On Titan',
        score: 50,
        year: 2013
    },
    {
        title: 'Full Metal Alchemist Brotherhood',
        score: 95,
        year: 2009
    },
    {
        title: 'My Hero Academia',
        score: 95,
        year: 2016
    }
]

const goodAnimes = animes.filter(anime => anime.score > 80);
console.log(goodAnimes);

const badAnimes = animes.filter(anime => anime.score < 80);
console.log(badAnimes);

const recentAnimes = animes.filter(anime => anime.year > 2000);
console.log(recentAnimes);

const oldAnimes = animes.filter(anime => anime.year < 2000);
console.log(oldAnimes);

const goodTitles = goodAnimes.map(anime => anime.title)
console.log(goodTitles);

const greatAnime = animes.filter(anime => anime.score > 80).map(anime => anime.title);
console.log(greatAnime); //uses both filter and map together.


