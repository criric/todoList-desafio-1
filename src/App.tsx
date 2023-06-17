import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { TaskDisplay, TaskProps } from './components/TaskDisplay'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const [newTaskText, setNewTaskText] = useState("")

  function handleNewTaskTextChange(event: React.ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function handleCreateTask(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    if (!newTaskText) return
    setTasks([...tasks, {
      id: Math.floor(Math.random()*10000),
      content: newTaskText,
      isCompleted: false
    }])
    setNewTaskText("")
  }

  function deleteTask(id: number){
    const newTaksList = [...tasks]
    const filteredTasks = newTaksList.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }

  function completeTask(id: number){
    const newTaskList = [...tasks]
    newTaskList.map(task => task.id === id ? task.isCompleted = !task.isCompleted : task)    
    setTasks(newTaskList)
  }
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.container}>
          <input type="text" placeholder="Adicione uma nova tarefa" value={newTaskText} onChange={handleNewTaskTextChange}/>
          <button type='submit' onClick={handleCreateTask}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <TaskDisplay allTasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
      </div>
    </>
  )
}

export default App
