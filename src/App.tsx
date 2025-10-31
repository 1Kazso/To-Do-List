import { useState } from "react"
import AddTask from "./components/AddTask"
import ListItem from "./components/ListItem"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Sample Task",
      completed: false,
      createdOn: new Date()
    },
  ])

  // function to add new task to existing tasks array
  const addNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    // the spread operator ()...) is used to create a new array with existing tasks and the new task
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId: number) => {
    const updTasks = tasks.filter((task) => {
      return task.id !== taskId
    })
    setTasks(updTasks)
  }

  const toggleComplete = (taskId: number) => {
    const updTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updTasks)
  }
  return (
    <div className="w-screen h-screen flex justify-center bg-stone-200 ">
      <div className="flex flex-col items-center m-24 w-2xl">
        <div className="text-2xl">TO DO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-300 cursor-pointer">Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-gray-200 rounded-lg p-2 text-black hover:bg-slate-200 cursor-pointer">
              <option defaultValue="all">All</option>
              <option value="done">Done</option>
              <option value="unfinished">Not Finished</option>
            </select>
          </div>
        </div> {/* end of button */}
        <AddTask addNewTask={addNewTask} />
        <div className="bg-slate-300 w-full rounded-lg mt-4 p-8 py-6 px-8">
          {tasks.map((task) => (
            <ListItem key={task.id} task={task} delTask={deleteTask} toggleComplete={toggleComplete} />
          ))}
        </div>{/* end of list */}
      </div>
    </div>
  )
}

export default App