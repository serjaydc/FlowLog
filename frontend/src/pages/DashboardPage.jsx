import React, { useState } from "react";
import TaskManager from "../components/TaskManager";
import MoodBoard from "../components/MoodBoard";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  const [view, setView] = useState("tasks");

  return (
    <div className="h-screen pt-10">
      <div className="container mx-auto px-2 py-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user.username} 👋
          </h1>
          <p className="text-neutral-500 mb-4">
            Track your tasks and mood in one place. Let's make today productive
            and positive.
          </p>
          {/* Tabs */}
          <div className="bg-white p-1 rounded-full max-w-sm flex justify-between ">
            <button
              onClick={() => setView("tasks")}
              className={`${view === "tasks" ? "active bg-gray-200 rounded-full" : ""} w-full p-1`}
            >
              Tasks
            </button>

            <button
              onClick={() => setView("moodboard")}
              className={`${view === "moodboard" ? "active bg-gray-200 rounded-full" : ""} w-full p-1`}
            >
              Mood Board
            </button>
          </div>
        </div>

        {/* Content */}
        {view === "tasks" && <TaskManager />}
        {view === "moodboard" && <MoodBoard />}
      </div>
    </div>
  );
};

export default DashboardPage;
