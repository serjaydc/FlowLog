import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, tasksLength, icon, onEdit }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
        {icon}
        <h2 className="text-lg">{title}</h2>
        <p className="bg-neutral-200 px-2 py-0.5 rounded-lg text-sm max-w-fit">
          {tasksLength}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
