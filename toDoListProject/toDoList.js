let input = prompt('What would you like to do?');
const todos = ['buy food', 'go shopping'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********');
    } else if (input === 'new') {
        input = prompt('add a todo');
        todos.push(input);
    } else if (input === 'delete') {
        input = prompt("enter index you want to delete");
        todos.splice(input, 1);
    }
    input = prompt('What would you like to do?');
}
console.log("You quit the app.");
