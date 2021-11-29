import './Todolist.scss'
import React from 'react'
import axios from 'axios'

//main todo list function includes complete task and remove task function
function Todolist(props) {
    const todolist = props.todolist.map((task,index) => {

        //complete task
        const taskComplete = task => {
            axios.put(`http://localhost:4000/todos/${task._id}` , {
                _id : task._id,
                todo: task.todo,
                description: task.description,
                date:task.date,
                isComplete : !task.isComplete
            }).then(res => props.taskComplete(res.data)).catch(err => console.log(err))
        }

        //remove task
        const removeTask = _id => {
            axios
                .delete(`http://localhost:4000/todos/${task._id}`)
                .then(res => props.removeTask(res.data))
                .catch(err => console.log(err))        } 


        //JSX elements        
        return <li key = {index}>

            <div className="task">
                <p type="checkbox" className = {task.isComplete ? 'isComplete' : 'checkicon'}>
                <p className = {task.isComplete ? 'taskcomplete' : ''} onClick = {() => {
                    taskComplete(task)
                }}>{task.todo} </p></p>
            </div>

            <div className="description">
               <div>
                    <p>{task.description}</p>
               </div>
            </div>
            
            <div className="dates">
                    <p>{task.created_at}</p>
                    <p>{task.updated_at}</p>
                    <p>{task.date}</p>
            </div>
            
            <div className="actions">
                <p className = 'edit' onClick = {() => {
                    props.tasktoUpdate(task)
                    props.showPopup()
                }}>Edit</p>
                <p className = 'close' onClick = {() => {
                    removeTask(task._id)
                    window.location.reload()
                }}>Delete</p>
            </div>
            
        </li>
    })

    
    return (
        <div className = 'tasklist'>
            <ul>
                {todolist}
            </ul>
        </div>
    )
}

export default Todolist
