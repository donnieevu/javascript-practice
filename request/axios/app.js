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