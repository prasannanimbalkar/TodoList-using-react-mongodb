import './Addtask.scss'
import React, {useState} from 'react'
import axios from 'axios'

//add task function used to post data
function Addtask(props) {
    const [task, Settask] = useState("")
    const [description, SetDescription] = useState("")
    const [date, SetDate] = useState("")
    
    const addtask = () => {
        if (task.trim() === '') {
            return
        } else {
            axios
                .post('http://localhost:4000/todos', {
                    todo: task,
                    description: description,
                    isComplete: false,
                    created_at: new Date(),
                    date: date
                })
                .then(res => {
                    Settask("")
                    SetDescription("")
                    SetDate("")
                    props.addTask(res.data)
                })
                .catch(err => console.log(err))
            }
            // fetch('http://localhost:4000/todos',{
            //             method: 'post',
            //             body: JSON.stringify({
            //                 todo : task,
            //                 isComplete: false
            //             })
                        
            //         })
            //         .then(res => {
            //             Settask("")
            //             props.addTask(res.data)
            //         })
            //         .catch(err => console.log(err))
                
            
    }
    //returns the html layout for adding a task
    return (
        <div className='addtask'>
            <input
                type='text'
                placeholder='Add Task . . .'
                value={task}
                onChange = {event => Settask(event.target.value)}/>
            <input 
                type='text'
                placeholder='Add Description . . .'
                value={description}
                onChange = {event => SetDescription(event.target.value)}/>
            <input 
                type='datetime-local'
                value={date}
                onChange = {event => SetDate(event.target.value)}/>
            <button onClick={() => addtask()}>Add Task</button>
        </div>
    )
}
//exporting the task
export default Addtask
