import { request, response } from 'express';
import * as todoList from '../services/Todo.js' 

const errorhandler = (message , response) => {
    response.status(500);
    response.json({error:message});
}

//to check if db is connected successfully
const setSuccessResponse = (data , response) => {
    response.status(200);
    response.json(data);
}

export const index = async (request, response) => {
    try {
        const Todo = await todoList.search();
        setSuccessResponse(Todo, response)
    } catch(e) {
        errorhandler(e.message , response);
    }
} 

//to post data in the db
export const save = async (request, response) => {
    try{
        const Todo = {...request.body};
        const newTodo = await todoList.create(Todo);
        setSuccessResponse(newTodo, response)
        // res.status(200);
    }catch(e) {
        errorhandler(e.message , response);
    }
} 

//to get data in the db
export const get = async (request, response) => {
    try{
        const id = request.params.id;
        const Todo = await todoList.get(id);
        setSuccessResponse(Todo, response)
        // res.status(200);
    }catch(e) {
        errorhandler(e.message , response);
    }
} 

//to put data in the db
export const update = async (request, response) => {
    try{
        const id = request.params.id;
        const Todo = {...request.body, id};
        const updatedTodo = await todoList.update(Todo);
        setSuccessResponse(updatedTodo, response);
    }catch(e) {
        errorhandler(e.message , response);
    }
}

//to remove data in the db
export const remove = async (request, response) => {
    try{
        const id = request.params.id;
        const updatedTodo = await todoList.remove(id);
        setSuccessResponse({message: `Task ${id} removed successfully`}, response);
    }catch(e) {
        errorhandler(e.message , response);
    }
}