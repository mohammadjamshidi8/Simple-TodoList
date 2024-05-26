import React from "react";

export default function Tasks({ task, setTasks }) {


  const completeTaskHandler = (taskId) => {
    setTasks((allTasks) => (
      allTasks.map(task => task.id === taskId ? {...task , complete : !task.complete} : task)
    ))
  };

  const deleteTaskHandler = (taskId) => {
    setTasks(allTasks => allTasks.filter(task => task.id !== taskId))
  }

  return (
    <div className={`w-full flex items-center shadow-md bg-gray-100 p-3 rounded-md ${task.complete ? 'complete' : ''}`}>
      <div className={`w-2/3 px-5 flex items-center gap-x-2 ${task.complete ? 'line-through' : ''}`}>
        <span className="font-bold flex">{task.id} .</span>
        <span>{task.title}</span>
      </div>
      <div className="w-1/3 flex gap-x-4 text-white font-bold">
        <button
          onClick={() => completeTaskHandler(task.id)}
          className="w-1/2 bg-green-500 py-3 rounded-md"
        >
          Complete
        </button>
        <button className="w-1/2 bg-rose-500 py-3 rounded-md" onClick={() => deleteTaskHandler(task.id)}>Delete</button>
      </div>
    </div>
  );
}
