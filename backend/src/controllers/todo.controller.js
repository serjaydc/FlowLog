import Todo from "../models/todo.model.js";

export const todoCreate = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const todo = await Todo.create({
      ...req.body,
      user: req.user._id,
    });
    return res.status(201).json({ todo, message: "Task created" });
  } catch (error) {
    console.log("Error in todoCreate controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const todoRead = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });

    if (!todos) {
      return res.status(404).json({ message: "No todos found" });
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.log("Error in todoRead controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const todoUpdate = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { returnDocument: "after", runValidators: true },
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ todo, message: "Task updated" });
  } catch (error) {
    console.log("Error in todoUpdate controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const todoDelete = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({ todo, message: "Task deleted" });
  } catch (error) {
    console.log("Error in todoDelete controller", error);
    return res.status(500).json({ message: error.message });
  }
};
