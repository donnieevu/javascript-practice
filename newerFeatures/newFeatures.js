//DEFAULT PARAMS PRACTICE (NEW WAY)
// function greet(msg = 'WASSUP', person) {
//     console.log(`${msg}, ${person}!`);
// }
// greet("AYE GIVE ME SOME", 'DOGGY')

// SPREAD PRACTICE
// console.log(...'yoo');
// console.log('y', 'o', 'o');
// const nums = [1, 2, 3, 45, 76, 7, 4, 8, 5,]

// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

// const heroes = ['All Might', 'Goku', 'Vegeta']
// const villains = ['Frieza', 'One-For-All', 'Cooler']

// const allPeople = [...heroes, ...villains, 'doggy doo-doo']
// console.log(allPeople);

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { isFurry: true, family: 'Caninae' };
// const catDog = { ...feline, ...canine } //since canine 2nd, its family wins.
// console.log(catDog);


// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'tobias123!',
//     username: 'tfunke'
// }
// const newUser = { ...dataFromForm, id: 1234, isAdmin: false };
// console.log(newUser); //scenario why we would spread objects

// REST PARAMS PRACTICE

// function sum(...nums) {

//     return nums.reduce((sum, num) => sum + num);
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to ${gold}`);
//     console.log(`Silver medal goes to ${silver}`);
//     console.log(`Thanks everyone else: ${everyoneElse}`);
// }
// raceResults('Donny', 'Goku', 'Freiza', 'Cooler', 'Cell')

// DESTRUCTURING PRACTICE

// const raceResults = ['Donny', 'Cooler', 'Viper', 'Sage', 'Omen', 'Breach']
// const [gold, silver, bronze, ...everyoneElse] = raceResults
// console.log(gold);
// console.log(silver);
// console.log(bronze);
// console.log(everyoneElse);

const user = {
    email: 'donnyisdope@gmail.com',
    password: 'password',
    firstName: 'donny',
    lastName: 'vu',
    born: 1996,
    biography: 'realest dude alive',
    city: 'Mansfield',
    state: 'TX',
    isDope: true
}
// // const email = user.email;
// const { email, firstName, lastName, city, state, isDope } = user; //equivalent
// console.log(email, firstName, lastName, city, state, isDope);
// const { born: birthYear, biography: bio } = user
// console.log(birthYear, bio);

// function fullName(user) {
//     const { firstName, lastName } = user
//     return `${firstName} ${lastName}`;
// }

// DESTRUCTURING PARAMS PRACTICE
function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

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
        score: 97,
        year: 2016
    }
]
// animes.map((anime) => {
//     return `${anime.title} (${anime.year}) is rated ${anime.score}`
// })

animes.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
}) //shorter version