import './App.css'
import TasksToDo from './components/TasksToDo'
import useToDo from './hooks/useToDo'

export type IDToDo = `${string}-${string}-${string}-${string}-${string}`

export interface TasksToDo {
  id: IDToDo,
  text: string,
  timestamp: number
}

function App() {

  const { tasks, removeTask, addTask } = useToDo()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { elements } = e.currentTarget

    const input = elements.namedItem('to_do')
    const isinput = input instanceof HTMLInputElement
    if (!isinput || isinput === null) return

    addTask(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: IDToDo) => () => {
    removeTask(id)
  }

  return (
    <main>
      <aside>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <label>Type of task</label>
          <input required type="text" name='to_do' placeholder='Ir al gym 🏋️' />
          <button type='submit'>Add task</button>
        </form>
      </aside>
      <section>
        <ul>
          {
            tasks.length === 0 ? (
              <p>There are no tasks at the moment 😮‍💨.</p>
            ) : (
              tasks.map(task => (
                <TasksToDo text={task.text} id={task.id} handleClick={createHandleRemoveItem(task.id)} />
              ))
            )
          }
        </ul>
      </section>
    </main>
  )
}

export default App
