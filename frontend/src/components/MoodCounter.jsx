import { Angry, Frown, Meh, Smile, SmilePlus } from "lucide-react";
import React from "react";

const MoodCounter = ({ moods }) => {
  const moodExcellent = moods.filter((mood) => mood.moodType === "excellent");
  const moodGood = moods.filter((mood) => mood.moodType === "good");
  const moodNeutral = moods.filter((mood) => mood.moodType === "neutral");
  const moodBad = moods.filter((mood) => mood.moodType === "bad");
  const moodTerrible = moods.filter((mood) => mood.moodType === "terrible");
  return (
    <div>
      <div className="max-w-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="bg-blue-100 border border-blue-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <SmilePlus className="size-5 text-blue-500" />
            {moodExcellent.length > 0 ? (
              <p className="">Excellent: {moodExcellent.length}</p>
            ) : null}
          </div>
          <div className="bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <Smile className="size-5 text-emerald-500" />
            {moodGood.length > 0 ? (
              <p className="">Good: {moodGood.length}</p>
            ) : null}
          </div>
          <div className="bg-orange-100 border border-orange-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <Meh className="size-5 text-orange-500" />
            {moodNeutral.length > 0 ? (
              <p className="">Neutal: {moodNeutral.length}</p>
            ) : null}
          </div>
          <div className="bg-red-100 border border-red-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <Frown className="size-5 text-red-500" />
            {moodBad.length > 0 ? (
              <p className="">Bad: {moodBad.length}</p>
            ) : null}
          </div>
          <div className="bg-taupe-100 border border-taupe-200 px-4 py-2 rounded-lg flex items-center gap-2">
            <Angry className="size-5 text-taupe-500" />
            {moodTerrible.length > 0 ? (
              <p className="">Terrible: {moodTerrible.length}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodCounter;
