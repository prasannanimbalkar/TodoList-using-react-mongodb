import './Updatetask.scss'
import React ,{useState} from 'react'
import axios from 'axios'

//update function for tasks
function Updatetask(props) {
    const [task,setTask] = useState(props.task.todo)
    const [description,setDescription] = useState(props.task.description)
    const [updated_at,setModDate] = useState(props.task.updated_at)
    
    const updateTask = () => {
        //updating task
        if(task.trim() === '' || props.task.todo === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:4000/todos/${props.task._id}`,{
                _id : props.task._id,
                todo : task,
                description: description,
                isComplete : props.task.isComplete,
                updated_at: new Date(),
            }).then(res => {
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err))
            window.location.reload()
        }

        //updating description
        if(task.trim() === '' || props.task.description === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:4000/todos/${props.task._id}`,{
                _id : props.task._id,
                todo : task,
                description: description,
                isComplete : props.task.isComplete,
                updated_at: new Date(),
            }).then(res => {
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err => console.log(err))
            window.location.reload()
        }
    }

    //popup for updating the task details
    return (
        <div className = 'popup'>
            <div className = 'popup-content'>
                <input type = 'text'  placeholder = 'Update Task . . .' value = {task} onChange = {event => setTask(event.target.value)}/>
                <input type = 'text'  placeholder = 'Update Desc . . .' value = {description} onChange = {event => setDescription(event.target.value)}/>
                <button onClick = {() => updateTask()}>Update</button>
            </div>
        </div>
    )
}

export default Updatetask
