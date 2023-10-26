import { IDToDo } from "../App"

const TasksToDo = ({ id, text, handleClick }: { id: IDToDo, text: string, handleClick: () => void }) => {
  return (
    <li key={id}>
      <p>{text}</p>
      <button className="remove" onClick={handleClick}>Remove</button>
    </li>
  )
}

export default TasksToDo