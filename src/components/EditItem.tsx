import React from 'react'

const EditItem = ({ taskId, taskDetails, setEdit }) => {
    const handleSetEdit = () => {
        setEdit ({
            id: taskId,
            task: taskDetails
        })
    }
    return (
        <>
            <i className="fa-solid fa-pen rounded-lg cursor-pointer" onClick={handleSetEdit}></i>
        </>
    )
}

export default EditItem