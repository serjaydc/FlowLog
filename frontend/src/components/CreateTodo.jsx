import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";
import { X } from "lucide-react";

const CreateTodo = ({ onClose }) => {
  const { createTodo } = useTodo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("to-do");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState(new Date().toISOString());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CreateTodo = {
      title,
      description,
      status,
      priority,
      dueDate,
    };

    await createTodo(CreateTodo);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full rounded-lg p-4 container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Create New Task</h2>
          <button
            onClick={onClose}
            type="button"
            className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
          >
            <X className="size-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm mb-1">
              Title
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm mb-1">
              Description
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-transparent outline-none resize-none h-20"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="status" className="text-sm mb-1">
                Status
              </label>
              <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
                <select
                  name="status"
                  id="status"
                  className="w-full"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="to-do">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="priority" className="text-sm mb-1">
                Priority
              </label>
              <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
                <select
                  name="priority"
                  id="priority"
                  className="w-full"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="duedate" className="text-sm mb-1">
              Due Date (Optional)
            </label>
            <div className="flex items-center gap-2 bg-gray-200 rounded-md py-2 px-2 mb-4">
              <input
                type="date"
                name="duedate"
                id="duedate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onClose}
              type="button"
              className="border border-gray-300 rounded-lg px-8 py-2 hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
