import { format } from 'date-and-time'
import DeleteItem from './DeleteItem'
import TaskStatus from './TaskStatus'
import EditItem from './EditItem'
import { useState } from 'react'

const ListItem = ({ task, delTask, toggleComplete, setTaskToEdit }) => {
    // (editThisTask, setEditThisTask) = useState
    return (
        <div className='bg-white my-4 text-black p-4 rounded-lg flex justify-between'>
            <div className='flex'>
                <TaskStatus taskId={task.id} TaskStatus={task.completed} toggleComplete={toggleComplete} />
                {/* <i class="fa-solid fa-square-check"></i> */}
                <div className='flex flex-col m-2'>
                    <span className='font-semibold'>{task.task}</span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD HH:mm:ss')}</span>
                </div>
            </div>
            <div className="relative top-5">
                <DeleteItem taskId={task.id} delTask={delTask} />
                <EditItem taskId={task.id} taskDetails={task.task} setEdit={setTaskToEdit} />
            </div>
        </div>
    )
}

export default ListItem