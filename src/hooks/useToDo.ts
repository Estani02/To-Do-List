import { useState } from "react"
import { IDToDo, TasksToDo } from "../App"

const useToDo = () => {

  const [tasks, setTasks] = useState<TasksToDo[]>([])

  const addTask = (text: string) => {
    const newTask: TasksToDo = {
      id: crypto.randomUUID(),
      text: text,
      timestamp: Date.now()
    }
    setTasks((prevtasksToDo) => {
      return [...prevtasksToDo, newTask]
    })
  }

  const removeTask = (id: IDToDo) => {
    setTasks((prevtasksToDo) => {
      return prevtasksToDo.filter(task => task.id !== id)
    })
  }

  return {
    tasks,
    removeTask,
    addTask
  }

}

export default useToDo