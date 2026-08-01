const todos = [];

const addTodo = (name) => {

    const todo = {
        id: Date.now(),
        name: name,
        completed: false
    };

    todos.push(todo);

    return true;
}

const getAllTodos = () => {
    return todos;
}

module.exports = {
    getAllTodos,
    addTodo
}