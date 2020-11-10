// const tweetForm = document.querySelector('#tweetForm');
// const tweetContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {

//     e.preventDefault();
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     // console.log(`${tweetForm.elements.username.value}: ${this.elements.tweet.value}`); //2 diff ways of using it (this)
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = this.elements.tweet
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');

//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`);
//     tweetContainer.append(newTweet);
// }


const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const qtyInput = this.elements.qty;
    const productInput = this.elements.product;

    addItem(qtyInput.value, productInput.value)
    qtyInput.value = '';
    productInput.value = '';
})

const addItem = (qty, product) => {
    const newItem = document.createElement('li')
    const list = document.querySelector("#list")
    newItem.append(`${qty} ${product}s `);
    list.append(newItem)
}