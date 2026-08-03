const todos = [];

const addTodo = (name) => {

    const newTodo = {
        id: Date.now(),
        name: name
    };

    todos.push(newTodo);

    return true;
}

const getAllTodos = () => {
    
    console.log(todos);
    
    return todos;
}



module.exports = {
    getAllTodos,
    addTodo
}