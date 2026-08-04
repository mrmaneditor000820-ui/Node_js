const express = require('express');
const { addTodo, getAllTodos, toggleTodo } = require('../controllers/todo');

const router = express.Router();

router.post('/add', (req, res) => {
    addTodo(req.body.data);
    res.redirect('/todo');
});

router.get('/', (req, res) => {
    res.render("todo", {
        todos: getAllTodos()
    });
});

router.post("/toggle/:id", (req, res) => {

    toggleTodo(req.params.id);

    res.redirect("/todo");

});

module.exports = router;