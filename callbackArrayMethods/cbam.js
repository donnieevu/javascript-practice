// FOR EACH PRACTICE

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });

const animes = [
    {
        title: 'Naruto',
        score: 90
    },
    {
        title: 'Dragon Ball Z',
        score: 89
    },
    {
        title: 'One Piece',
        score: 95
    },
    {
        title: 'Attack On Titan',
        score: 94
    },
    {
        title: 'Full Metal Alchemist',
        score: 95
    }
]

animes.forEach(function (anime) {
    console.log(`${anime.title} - ${anime.score}/100 `);
})