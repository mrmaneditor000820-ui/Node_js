const todos = [];

const addTodo = (name) => {

    const newTodo = {
        id: Date.now(),
        name: name,
        completed: false
    };

    todos.push(newTodo);

    return true;
}

const getAllTodos = () => {
    
    console.log(todos);
    
    return todos;
}

const toggle = (id, completed) => {
    const todo = todos.find(todo    => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
}

module.exports = {
    getAllTodos,
    addTodo,
    toggle
}