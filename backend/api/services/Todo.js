import Todo from "../models/todo.js";



export const search = (params = {}) => {
    const promise = Todo.find(params).exec();
    return promise;
};

//to post data
export const create = (todo) => {
    const newTodo = new Todo(todo);
    return newTodo.save(); 
}

//to get data
export const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

//to put data
export const update = (todo) => {
    todo._id = todo.id;
    const promise = Todo.findByIdAndUpdate(todo.id, todo, { new: true }).exec();
    return promise; 
}

//to delete data
export const remove = (id) => {
    const promise = Todo.findByIdAndDelete(id).exec();
    return promise;
}