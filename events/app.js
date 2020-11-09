const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log('YOU CLICKED ME');
}

function scream() {
    console.log('AHHHH');
    console.log('NO TOUCHHHHHHHHH');
}
btn.onmouseenter = scream;


const h1 = document.querySelector('h1')
h1.onclick = () => (alert('you clicked h1'))

const btn3 = document.querySelector('#v3')
btn3.addEventListener('dblclick', () => {
    alert("CLICKED!");
})

function twist() {
    console.log("twist");
}

function shout() {
    console.log("shout");
}

const tasButton = document.querySelector("#tas")
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)