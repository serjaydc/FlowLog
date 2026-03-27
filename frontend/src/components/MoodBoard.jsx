import React, { useState } from "react";
import { useMood } from "../context/MoodContext";
import CreateMood from "./CreateMood";
import MoodCounter from "./MoodCounter";
import MoodCard from "./MoodCard";

const MoodBoard = () => {
  const { moods, error } = useMood();

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div>
      <div className="bg-white rounded-xl p-2">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Mood Board</h2>
            <p className="text-neutral-500">Track your emotional wellbeing</p>
          </div>
          <div className="flex items-center gap-4">
            <MoodCounter moods={moods} />
            <button
              onClick={() => setIsCreateOpen(true)}
              className="bg-gray-900 rounded-lg px-8 py-2 text-white hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Add Mood
            </button>
          </div>
        </div>
        {/* Mood Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {moods.map((mood) => (
            <MoodCard key={mood.id} mood={mood} />
          ))}
        </div>
        {moods.length === 0 && (
          <div className="flex items-center justify-center h-40">
            <p className="text-neutral-500">No moods found</p>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-40">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
      {isCreateOpen && <CreateMood onClose={() => setIsCreateOpen(false)} />}
    </div>
  );
};

export default MoodBoard;
