import { Task } from './Task'
import styles from './TaskDisplay.module.css'

interface AllTasksProps {
  allTasks: TaskProps[],
  deleteTask: (parameter: number) => void,
  completeTask: (parameter: number) => void,
}

export interface TaskProps {
  id: number,
  content: string,
  isCompleted: boolean
}

export function TaskDisplay({allTasks, deleteTask, completeTask}: AllTasksProps){   
  const countAllTasks = allTasks.length
  const countAllCompletedTasks = allTasks.reduce((acc, task)=>{
    if (task.isCompleted) acc+=1
    return acc
  }, 0)

  return (
    <div className={styles.container}>
      <div className={styles.taskCount}>
        <div className={styles.createdTaskCount}>
          <p>Tarefas criadas</p>
          <div className={styles.counter}>
            <p>{countAllTasks}</p>
          </div>
        </div>
        <div className={styles.completedTaskCount}>
          <p>Concluidas</p>
          <div className={styles.counter}>
            <p>{countAllCompletedTasks} de {countAllTasks}</p>
          </div>
        </div>
      </div>
      <div className={styles.allTasks}>
        {allTasks.map((task)=>{
          return <Task key={task.id} id={task.id} content={task.content} completion={task.isCompleted} deleteTask={deleteTask} completeTask={completeTask}/>
        })}
      </div>
    </div>
  )
}