import React from 'react'

const DeleteItem = ({ taskId, delTask }) => {
    const handleDelete = () => {
        delTask(taskId)
    }
    
  return (
    <>
    <i className="fa-solid fa-trash rounded-lg cursor-pointer" onClick={handleDelete}></i>
    </>
  )
}

export default DeleteItem