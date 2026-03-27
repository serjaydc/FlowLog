import React, { useState } from "react";
import { useMood } from "../context/MoodContext";
import { SmilePlus, Smile, Meh, Frown, Angry, X } from "lucide-react";

const moods = [
  { type: "excellent", label: "Excellent", icon: SmilePlus },
  { type: "good", label: "Good", icon: Smile },
  { type: "neutral", label: "Neutral", icon: Meh },
  { type: "bad", label: "Bad", icon: Frown },
  { type: "terrible", label: "Terrible", icon: Angry },
];

const moodColors = {
  excellent: "text-blue-500",
  good: "text-emerald-500",
  neutral: "text-yellow-500",
  bad: "text-red-500",
  terrible: "text-taupe-500",
};

const CreateMood = ({ onClose }) => {
  const { createMood } = useMood();
  const [selectedMood, setSelectedMood] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(new Date().toISOString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const CreateMood = {
      moodType: selectedMood,
      description,
      date,
    };
    await createMood(CreateMood);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white max-w-2xl w-full rounded-lg p-4 container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Log Your Mood</h2>
          <button
            onClick={onClose}
            type="button"
            className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
          >
            <X className="size-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <p className="mb-2 text-sm">How are you feeling today?</p>
          <div className="flex items-center justify-between gap-2 mb-4">
            {moods.map((mood) => (
              <div
                key={mood.type}
                onClick={() => setSelectedMood(mood.type)}
                className={`cursor-pointer border rounded-lg p-4 flex flex-col items-center gap-2 transition w-full
            ${
              selectedMood === mood.type
                ? "border-neutral-300 bg-neutral-200 "
                : "border-neutral-200"
            }`}
              >
                <mood.icon
                  className={`${
                    selectedMood === mood.type
                      ? moodColors[mood.type]
                      : "text-neutral-300"
                  } size-8`}
                />
                <p className="text-sm">{mood.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm mb-1">
              Date
            </label>
            <div className="flex items-center gap-2 bg-neutral-200 border border-neutral-300 rounded-md py-2 px-2 mb-4">
              <input
                type="date"
                name="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm mb-1">
              Description (Optional)
            </label>
            <div className="flex items-center gap-2 bg-neutral-200 border border-neutral-300 rounded-md py-2 px-2 mb-4">
              <textarea
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full bg-transparent outline-none resize-none h-20"
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

export default CreateMood;
