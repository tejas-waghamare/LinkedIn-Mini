const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const User = require('../models/User');
const Post = require('../models/Post');

/* ===================== USERS ===================== */

// GET all users
router.get('/users', adminAuth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// DELETE any user
router.delete('/user/:id', adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    await Post.deleteMany({ user: req.params.id });
    await user.deleteOne();

    res.json({ msg: 'User and posts deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

/* ===================== POSTS ===================== */

// GET all posts
router.get('/posts', adminAuth, async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'name email').sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// DELETE any post
router.delete('/post/:id', adminAuth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: 'Post not found' });

    await post.deleteOne();
    res.json({ msg: 'Post removed by admin' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
