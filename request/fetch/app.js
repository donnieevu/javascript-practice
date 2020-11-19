// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((response) => {
//         console.log("RESPONSE, WAITING TO PARSE...", response);
//         return response.json()
//     })
//     .then((data) => {
//         console.log('DATA PARSED: ', data);
//         console.log(data.ticker.price);
//     })
//     .catch((err) => {
//         console.log('ERROR!', err);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price);
    } catch (err) {
        console.log('SOMETHING WENT WRONG', err);
    }
}