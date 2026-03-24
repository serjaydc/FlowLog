import React, { useState } from "react";
import { CircleAlert, CircleCheckBig, Clock } from "lucide-react";
import { useTodo } from "../context/TodoContext";
import TaskColumn from "./TaskColumn";
import UpdateTodo from "./UpdateTodo";
import CreateTodo from "./CreateTodo";

const TaskManager = () => {
  const { todos, loading, error } = useTodo();

  const [activeTodo, setActiveTodo] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const taskTodo = todos.filter((todo) => todo.status === "to-do");
  const taskInProgress = todos.filter((todo) => todo.status === "in-progress");
  const taskCompleted = todos.filter((todo) => todo.status === "completed");

  return (
    <div>
      <div className="bg-white rounded-xl p-2">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Task Manager</h2>
            <p className="text-neutral-500">Organize and track your tasks</p>
          </div>
          <div className="flex items-center gap-1">
            {/* <TasksFilter /> */}
            <button
              onClick={() => setIsCreateOpen(true)}
              className="bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Add Task
            </button>
          </div>
        </div>
        {/* Tasks */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <TaskColumn
            title={`To-Do`}
            icon={<CircleAlert className="size-5" />}
            tasks={taskTodo}
            tasksLength={taskTodo.length}
            onEdit={setActiveTodo}
          />
          <TaskColumn
            title="In Progress"
            icon={<Clock className="size-5" />}
            tasks={taskInProgress}
            tasksLength={taskInProgress.length}
            onEdit={setActiveTodo}
          />
          <TaskColumn
            title="Completed"
            icon={<CircleCheckBig className="size-5" />}
            tasks={taskCompleted}
            tasksLength={taskCompleted.length}
            onEdit={setActiveTodo}
          />
        </div>
        {todos.length === 0 && (
          <div className="flex items-center justify-center h-40">
            <p className="text-neutral-500">No tasks found</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-40">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
      {activeTodo && (
        <UpdateTodo task={activeTodo} onClose={() => setActiveTodo(null)} />
      )}
      {isCreateOpen && <CreateTodo onClose={() => setIsCreateOpen(false)} />}
    </div>
  );
};

export default TaskManager;
