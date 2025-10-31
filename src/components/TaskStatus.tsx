const TaskStatus = ({ taskId, TaskStatus, toggleComplete}) => {

    const handleToggle = () => {
        toggleComplete(taskId)
    }

  return (
    <button onClick={handleToggle}>
        {TaskStatus ? <i className="fa-solid fa-square-check"></i>
        :
        <i className=" fa-regular fa-square cursor-pointer"></i>}
    </button>

  )
}

export default TaskStatus