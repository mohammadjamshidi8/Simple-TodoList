import React from "react";

export default function Tasks({ allTasks,task, setTasks }) {
  const completeTaskHandler = () => {

  };

  return (
    <div className="w-full flex items-center shadow-md bg-gray-100 p-3 rounded-md">
      <div className="w-2/3 px-5 flex items-center gap-x-2">
        <span className="font-bold flex">{task.id} .</span>
        <span>{task.title}</span>
      </div>
      <div className="w-1/3 flex gap-x-4 text-white font-bold">
        <button
          onClick={completeTaskHandler}
          className="w-1/2 bg-green-500 py-3 rounded-md"
        >
          Complete
        </button>
        <button className="w-1/2 bg-rose-500 py-3 rounded-md">Delete</button>
      </div>
    </div>
  );
}
