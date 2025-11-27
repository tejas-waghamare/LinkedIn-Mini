const Admin = require("../models/Admin");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ADMIN LOGIN
exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const payload = { admin: { id: admin.id } };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      res.json({ token, admin: { id: admin.id, email: admin.email } });
    });

  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET ADMIN PROFILE
exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("-password");
    res.json(admin);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE USER + POSTS
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    await Post.deleteMany({ user: req.params.id });
    res.json({ msg: "User and related posts deleted" });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

// GET ALL POSTS
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email");
    res.json(posts);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: "Post deleted" });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
