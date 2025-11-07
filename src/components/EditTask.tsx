import React from 'react'

const EditTask = ({taskToEdit, updateTask, setTaskToEdit}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        updateTask(taskToEdit.id, taskToEdit.task)
    }
    const handleChange = (e) => {
        setTaskToEdit({
            ...taskToEdit, 
            task: e.target.value
        })
    }
    return (
        <div className="w-6/8">
            <form>
                <div>
                    <label htmlFor="Task" className="block mb-2 text-xl font-medium text-gray-900">Task</label>
                    <input type="text" id="Edit" value={taskToEdit.task} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Groceries" required />
                </div>
                <div className="border-indigo-500 border-2 w-30 p-2 text-center rounded-lg hover:bg-indigo-500 hover:text-white">
                    <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditTask