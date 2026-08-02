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

const toggleTodo = (id) => {

    const todo = todos.find(t => t.id == id);

    if (todo) {
        todo.completed = !todo.completed;
    }
}

module.exports = {
    getAllTodos,
    addTodo,
    toggleTodo
}