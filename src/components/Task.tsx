import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css'

interface TaskInfoProps{
  id: number, 
  content: string, 
  completion: boolean,
  deleteTask: (parameter: number)=>void,
  completeTask: (parameter: number) => void,
}

export function Task({id, content, completion, deleteTask, completeTask}: TaskInfoProps){  
  function handleCompletion(){
    completeTask(id)
  }

  function handleDeleteTask(){
    deleteTask(id)
  }
  return (
    <div className={styles.taskContainer}>
      <label className={styles.newCheckbox}>
        <input type="checkbox" onChange={handleCompletion}/>
        <span className={styles.checkbox}></span>
      </label>
      <p style={{textDecoration: completion ? "line-through":"", color: completion ? "var(--gray-300)" : "var(--gray-100)"}}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}

