async function hello() {
}

const sing = async () => {
    throw "PROBLEM!!"
    return 'LALALALALA'
}

sing()
    .then((data) => {
        console.log('PROMISE RESOLVED WITH:', data);
    })
    .catch((err) => {
        console.log('PROMISE REJECTED!', err);
    })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'monsterboydanger') return 'WELCOME!'
    throw 'Invalid Paswowrd'
}

login('aznfreak8178')
    .then(msg => {
        console.log('logged in!');
        console.log(msg);
    })
    .catch((err) => {
        console.log("ERROR:", err);
    })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000) // this line will only run until after the red is resolved. 
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'ALL DONE'
}

// rainbow().then(() => {
//     console.log("END OF RAINBOW!");
// })

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW!");
}
printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        setTimeout(() => {
            if (rand < .7) {
                resolve(`Here is your fake data from ${url}`)
            }
            reject('Connection Timeout :/!')
        }, 1000)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1')
        let data2 = await fakeRequest('/page2')
        console.log(data1);
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR");
        console.log('error is: ', e);
    }

}