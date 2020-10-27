let input = prompt('What would you like to do?');
const todos = ['buy food', 'go shopping'];

while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('***********');
        console.log('TODO LIST');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********');
    }

    else if (input === 'new') {
        const newTodo = prompt('add a todo');
        todos.push(newTodo);
        console.log(`${newTodo} was added to list`);
    }

    else if (input === 'delete') {
        const index = parseInt(prompt("enter index you want to delete"));
        if (!Number.isNaN(index) && index <= todos.length) {
            const deleted = todos.splice(index, 1);
            console.log(`to do item "${deleted[0]}" was deleted.`);
        }
        else {
            console.log("Unknown index, select index within list.");
        }
    }
    input = prompt('What would you like to do?');
}
console.log("You quit the app.");
