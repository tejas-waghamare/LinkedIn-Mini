

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Post = require('../models/Post');

// @route    GET api/users/me
// @desc     Get current user's profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Get user error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route    PUT api/users/me
// @desc     Update user profile
// @access   Private
router.put(
  '/me',
  [
    auth,
    check('name', 'Name must be a string').optional().isString(),
    check('bio', 'Bio must be a string').optional().isString(),
    check('jobTitle', 'Job title must be a string').optional().isString(),
    check('skills', 'Skills must be an array').optional().isArray(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorObj = errors.array().reduce((acc, error) => {
        acc[error.param] = error.msg;
        return acc;
      }, {});
      return res.status(400).json(errorObj);
    }

    const { name, bio, jobTitle, skills } = req.body;
    console.log('PUT /api/users/me request body:', req.body);

    try {
      let user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }

      user.name = name !== undefined ? name : user.name;
      user.bio = bio !== undefined ? bio : user.bio;
      user.jobTitle = jobTitle !== undefined ? jobTitle : user.jobTitle;
      user.skills = skills !== undefined ? skills : user.skills;

      await user.save();
      const response = { name: user.name, bio: user.bio, jobTitle: user.jobTitle, skills: user.skills };
      console.log('PUT /api/users/me response:', response);
      res.json(response);
    } catch (err) {
      console.error('Update user error:', err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);

// @route    GET api/users/:id
// @desc     Get user by ID
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const posts = await Post.find({ user: req.params.id })
      .populate('user', 'name')
      .sort({ date: -1 });
    res.json({ user, posts });
  } catch (err) {
    console.error('Get user by ID error:', err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route    DELETE api/users/me
// @desc     Delete authenticated user
// @access   Private
router.delete('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    await User.deleteOne({ _id: req.user.id });
    await Post.deleteMany({ user: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error('Delete user error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;