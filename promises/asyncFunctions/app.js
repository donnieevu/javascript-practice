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
        console.log("ERROR", err);
    })