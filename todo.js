let command = prompt('what do you want to do')

const todo = ['pick up mangos', 'go shopping']
while (command != 'quit') {
    if (command == 'list') {
        console.log('@@@@@@@@@@@@@@@@@')
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i])
        }
        console.log('@@@@@@@@@@@@@@@@@')
    } else if (command == 'new') {
        const newTodo = prompt('Enter new to do')
        todo.push(newTodo)
    } else if (command == 'delete') {
        const index = prompt('Enter index of delete item')
        todo.splice(index, 1)
        console.log('@@@@@@@@@@@@@@@@@')
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i])
        }
        console.log('@@@@@@@@@@@@@@@@@')
    }
    command = prompt('what do you want to do')
}
