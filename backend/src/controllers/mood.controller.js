import Mood from "../models/mood.model.js";

export const moodCreate = async (req, res) => {
  try {
    if (!req.body.moodType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const mood = await Mood.create({
      ...req.body,
      user: req.user._id,
    });
    return res.status(201).json({ mood, message: "Mood created" });
  } catch (error) {
    console.log("Error in moodCreate controller", error);
    return res.status(500).json({ message: error.message });
  }
};
export const moodRead = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user._id });

    if (!moods) {
      return res.status(404).json({ message: "No moods found" });
    }

    return res.status(200).json(moods);
  } catch (error) {
    console.log("Error in moodRead controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const moodDelete = async (req, res) => {
  try {
    const mood = await Mood.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!mood) {
      return res.status(404).json({ message: "Mood not found" });
    }

    return res.status(200).json({ mood, message: "Mood deleted" });
  } catch (error) {
    console.log("Error in moodDelete controller", error);
    return res.status(500).json({ message: error.message });
  }
};
