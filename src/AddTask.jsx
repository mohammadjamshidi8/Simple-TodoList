import React, { useState , useRef } from 'react'
import Tasks from './Tasks'

export default function AddTask() {
    // state
    const [inputValue , setInputValue] = useState('')
    const [tasks , setTasks] = useState([])

    const inputRef = useRef(null)


    // get input value and save in state
    const changeInputHandler = (ev) => {
        const value = ev.target.value

        setInputValue(value)
    }

    // add task to state array
    const addTaskHandler = () => {

        const newTask = {
            id: tasks.length + 1,
            title: inputValue,
            complete : false
        }

        setTasks([...tasks,newTask])
        setInputValue('')
        inputRef.current.focus()
    }


  return (
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='font-bold text-xl'>Todo List App</h1>
        <div className='flex gap-x-5 w-full'>
            <input ref={inputRef} value={inputValue} onChange={changeInputHandler} type="text" className='outline-none rounded-md px-4 py-3 border-[1px] border-gray-200 w-3/4' placeholder='Add New Task ...'  />
            <button  onClick={addTaskHandler} className='w-1/4 px-6 py-3 bg-teal-400 rounded-md font-thin'>ADD</button>
        </div>
        {tasks.map(task => <Tasks key={task.id} task={task} allTasks={tasks} setTasks={setTasks} />)}
    </div>
  )
}
