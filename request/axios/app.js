// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log('RESPONSE: ', res.data.ticker.price);
//     })
//     .catch((err) => {
//         console.log('ERROR OCCURED! ', err);
//     })


const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price);
    } catch (err) {
        console.log("ERROR!", err);
    }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button')

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('LI')
    newLi.append(jokeText)
    jokes.append(newLi)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (err) {
        return "NO JOKES AVAILABLE SORRY!"
    }

}

button.addEventListener('click', addNewJoke)
