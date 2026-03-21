import React from "react";

import { useTodo } from "../context/TodoContext";

const TaskManager = () => {
  const { todos } = useTodo();
  console.log(todos);

  return (
    <div className="bg-white rounded-xl p-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Task Manager</h2>
          <p className="text-neutral-500">Organize and track your tasks</p>
        </div>
        {/* Filter */}
        <div className="flex items-center gap-1">
          {/* <TasksFilter /> */}
          <button className="bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer">
            Add Task
          </button>
        </div>
      </div>
      {/* Tasks */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {todos.map((todo) => (
          <div key={todo._id} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{todo.title}</h3>
            <p className="text-sm text-gray-500">{todo.description}</p>
            <p className="text-md">Status: {todo.status}</p>
            <p>Due Date: {todo.dueDate.slice(0, 10)}</p>
            <p>Priority: {todo.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
