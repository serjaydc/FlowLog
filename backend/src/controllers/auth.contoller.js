import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateJWTToken } from "../utils/generateJWTToken.js";

export const authSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (username.length < 3 || username.length > 20) {
      return res
        .status(400)
        .json({ message: "Username must be in between 3-20 characters" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password too short" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    generateJWTToken(res, user._id);

    return res.status(201).json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      message: "Account has been created",
    });
  } catch (error) {
    console.log("Error in authSignup controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const authSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateJWTToken(res, user._id);

    return res.status(200).json({
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      message: "Logged In",
    });
  } catch (error) {
    console.log("Error in authSignin controller", error);
    return res.status(500).json({ message: error.message });
  }
};

export const authSignout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  res.json({ message: "Logged out" });
};

export const authProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error in authProfile controller", error);
    return res.status(500).json({ message: error.message });
  }
};
