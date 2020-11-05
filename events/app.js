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
