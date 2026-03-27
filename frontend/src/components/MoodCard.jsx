import React from "react";
import { SmilePlus, Smile, Meh, Frown, Trash, Angry } from "lucide-react";
import { useMood } from "../context/MoodContext";

const MoodCard = ({ mood }) => {
  const { deleteMood } = useMood();
  const { moodType, description, date } = mood;
  const dateFixed = new Date(date).toLocaleDateString();

  const renderContent = () => {
    switch (moodType) {
      case "excellent":
        return (
          <div className="border-l-4 border-blue-500 rounded-xl h-40">
            <div className="border border-neutral-300 rounded-lg p-2 h-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 border border-blue-200 p-3 rounded-full max-w-fit">
                    <SmilePlus className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-lg">Excellent</p>
                    <p className="text-neutral-500 text-sm">{dateFixed}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMood(mood)}
                  className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <Trash className="text-red-700 size-5" />
                </button>
              </div>
              <p className="text-neutral-700 wrap-break-word line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        );

      case "good":
        return (
          <div className="border-l-4 border-emerald-500 rounded-xl h-40">
            <div className="border border-neutral-300 rounded-lg p-2 h-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 border border-emerald-200 p-3 rounded-full max-w-fit">
                    <Smile className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-lg">Good</p>
                    <p className="text-neutral-500 text-sm">{dateFixed}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMood(mood)}
                  className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <Trash className="text-red-700 size-5" />
                </button>
              </div>
              <p className="text-neutral-700 wrap-break-word line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        );

      case "neutral":
        return (
          <div className="border-l-4 border-orange-500 rounded-xl h-40">
            <div className="border border-neutral-300 rounded-lg p-2 h-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-orange-100 border border-orange-200 p-3 rounded-full max-w-fit">
                    <Meh className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-lg">Neutral</p>
                    <p className="text-neutral-500 text-sm">{dateFixed}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMood(mood)}
                  className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <Trash className="text-red-700 size-5" />
                </button>
              </div>
              <p className="text-neutral-700 wrap-break-word line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        );

      case "bad":
        return (
          <div className="border-l-4 border-red-500 rounded-xl h-40">
            <div className="border border-neutral-300 rounded-lg p-2 h-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-red-100 border border-red-200 p-3 rounded-full max-w-fit">
                    <Frown className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-lg">Bad</p>
                    <p className="text-neutral-500 text-sm">{dateFixed}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMood(mood)}
                  className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <Trash className="text-red-700 size-5" />
                </button>
              </div>
              <p className="text-neutral-700 wrap-break-word line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        );

      case "terrible":
        return (
          <div className="border-l-4 border-taupe-500 rounded-xl h-40">
            <div className="border border-neutral-300 rounded-lg p-2 h-40">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-taupe-100 border border-taupe-200 p-3 rounded-full max-w-fit">
                    <Angry className="text-taupe-500" />
                  </div>
                  <div>
                    <p className="text-lg">Terrible</p>
                    <p className="text-neutral-500 text-sm">{dateFixed}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteMood(mood)}
                  className="cursor-pointer hover:bg-neutral-300 p-1 rounded-lg transition-colors duration-200 ease-in-out"
                >
                  <Trash className="text-red-700 size-5 " />
                </button>
              </div>
              <p className="text-neutral-700 wrap-break-word line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
};

export default MoodCard;
