import express from 'express';
import * as todoList from '../controllers/todo.js';

const router = express.Router();

//routes for get and post
router.route('/Todos')
    .get(todoList.index)
    .post(todoList.save);

//routes for put and delete
router.route('/Todos/:id')
    .get(todoList.get)
    .put(todoList.update)
    .delete(todoList.remove);

export default router; 