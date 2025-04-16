import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { username, email, password, role, adminSecret } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    if (role === "admin") {
      if (adminSecret !== process.env.ADMIN_SECRET) {
        return res.status(403).json({
          message: "Invalid admin secret",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      role: role || "user",
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res
      .status(200)
      .json({ token, role: user.role, username: user.username });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};
