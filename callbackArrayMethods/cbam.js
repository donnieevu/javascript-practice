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

// const animes = [
//     {
//         title: 'Naruto',
//         score: 30,
//         year: 1999
//     },
//     {
//         title: 'Dragon Ball Z',
//         score: 20,
//         year: 1989
//     },
//     {
//         title: 'One Piece',
//         score: 95,
//         year: 1999
//     },
//     {
//         title: 'Attack On Titan',
//         score: 50,
//         year: 2013
//     },
//     {
//         title: 'Full Metal Alchemist Brotherhood',
//         score: 95,
//         year: 2009
//     },
//     {
//         title: 'My Hero Academia',
//         score: 95,
//         year: 2016
//     }
// ]

// const goodAnimes = animes.filter(anime => anime.score > 80);
// console.log(goodAnimes);

// const badAnimes = animes.filter(anime => anime.score < 80);
// console.log(badAnimes);

// const recentAnimes = animes.filter(anime => anime.year > 2000);
// console.log(recentAnimes);

// const oldAnimes = animes.filter(anime => anime.year < 2000);
// console.log(oldAnimes);

// const goodTitles = goodAnimes.map(anime => anime.title)
// console.log(goodTitles);

// const greatAnime = animes.filter(anime => anime.score > 80).map(anime => anime.title);
// console.log(greatAnime); //uses both filter and map together.

// SOME & EVERY PRACTICE
// const exams = [80, 90, 89, 77, 98, 90, 78, 87, 67, 89, 09, 89, 90]

// const passingGrade = exams.every(score => score >= 75)
// console.log(passingGrade);

// const animes = [
//     {
//         title: 'Naruto',
//         score: 30,
//         year: 1999
//     },
//     {
//         title: 'Dragon Ball Z',
//         score: 20,
//         year: 1989
//     },
//     {
//         title: 'One Piece',
//         score: 95,
//         year: 1999
//     },
//     {
//         title: 'Attack On Titan',
//         score: 50,
//         year: 2013
//     },
//     {
//         title: 'Full Metal Alchemist Brotherhood',
//         score: 95,
//         year: 2009
//     },
//     {
//         title: 'My Hero Academia',
//         score: 95,
//         year: 2016
//     }
// ]

// let recentMovie = animes.every(anime => anime.year > 2000)
// console.log(recentMovie);

// REDUCE PRACTICE

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// const total = prices.reduce((total, price) => {
//     return total + price;
// })
// console.log(total);

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })
// console.log(minPrice);

// const animes = [
//     {
//         title: 'Naruto',
//         score: 30,
//         year: 1999
//     },
//     {
//         title: 'Dragon Ball Z',
//         score: 20,
//         year: 1989
//     },
//     {
//         title: 'One Piece',
//         score: 95,
//         year: 1999
//     },
//     {
//         title: 'Attack On Titan',
//         score: 50,
//         year: 2013
//     },
//     {
//         title: 'Full Metal Alchemist Brotherhood',
//         score: 95,
//         year: 2009
//     },
//     {
//         title: 'My Hero Academia',
//         score: 97,
//         year: 2016
//     }
// ]

// const highestRated = animes.reduce((bestAnime, currAnime) => {
//     if (currAnime.score > bestAnime.score) {
//         return currAnime;
//     }
//     return bestAnime;
// })
// console.log(highestRated);

// const evens = [2, 4, 6, 8]

// const totalEven = evens.reduce((sum, num) => sum + num, 100)
// console.log(totalEven);

// ARROW FUNCTION W/ KEYWORD 'THIS'
// const person = {
//     firstName: 'Naruto',
//     lastName: 'Uzumaki',
//     fullName: function () { //arrow function doesnt work here
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName());
//         }, 3000) //arrow function works here (constant changes makes it ok)
//     }
// }


const solution = (arr) => {
    // Type your solution here
    let numR = 0;
    let numL = 0;
    let newArr = arr.filter((nums) => {
        return nums >= 0;
    });
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
        if (i === 0) {
            numR += 0;
            console.log(numR, numL);
        } else if (i % 2 === 0) {
            numR += newArr[i];
            console.log(numR, "numR");
        } else {
            numL += newArr[i];
            console.log(numL, "numL");
        }
    }
    if (numR > numL) {
        console.log("Right");
    } else if (numL > numR) {
        console.log("Left");
    } else {
        console.log("");
    }
};
solution([0])

