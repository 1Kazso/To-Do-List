const AddTask = ({ addNewTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // check if the input field is empty
        if (!e.currentTarget.form.Task.value)
            return
        addNewTask(e.currentTarget.form.Task.value)
        e.currentTarget.form.Task.value = ""
    }
    return (
        <div className="w-6/8">
            <form>
                <div>
                    <label htmlFor="Task" className="block mb-2 text-xl font-medium text-gray-900">Task</label>
                    <input type="text" id="Task" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Groceries" required />
                </div>
                <div className="border-indigo-500 border-2 w-30 p-2 text-center rounded-lg hover:bg-indigo-500 hover:text-white">
                    <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Add New Task</button>
                </div>
            </form>
        </div>

    )
}

export default AddTask