import { Calendar } from "lucide-react";
import React from "react";

const TasksCounter = ({ tasksLength }) => {
  return (
    <div className="bg-neutral-200 border border-neutral-300 px-2 py-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Calendar />
          <p className="text-md">Showing: All Tasks</p>
        </div>

        <p className="text-md bg-neutral-300 px-2 py-0.5 rounded-lg">
          {tasksLength} {tasksLength === 1 ? "Task" : "Tasks"}
        </p>
      </div>
    </div>
  );
};

export default TasksCounter;
