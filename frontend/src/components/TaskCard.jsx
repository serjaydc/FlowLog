import React, { useState } from "react";
import { PenLine, Trash } from "lucide-react";
import { useTodo } from "../context/TodoContext";

const TaskCard = ({ task, onEdit }) => {
  const { deleteTodo } = useTodo();
  const { title, description, priority, dueDate } = task;
  const dateFixed = new Date(dueDate).toLocaleDateString();

  return (
    <div className="border border-neutral-300 rounded-lg p-2 h-44 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="wrap-break-word line-clamp-2">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(task)}
            className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
          >
            <PenLine className="size-5" />
          </button>
          <button
            onClick={() => deleteTodo(task)}
            className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
          >
            <Trash className="text-red-700 size-5" />
          </button>
        </div>
      </div>
      <p className="wrap-break-word line-clamp-3">{description}</p>
      <div className="flex items-center gap-2">
        <p
          className={`capitalize px-2 rounded-lg max-w-fit ${priority === "low" ? "text-green-600 bg-green-100 border border-green-200" : priority === "medium" ? "text-yellow-600 bg-yellow-100 border border-yellow-200" : priority === "high" && "text-red-600 bg-red-100 border border-red-200"}`}
        >
          {priority}
        </p>
        <p className="px-2 border border-neutral-300 rounded-lg">
          Due: {dateFixed}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
