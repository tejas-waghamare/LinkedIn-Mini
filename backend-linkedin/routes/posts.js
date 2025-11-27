// // routes/posts.js
// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth');
// const { check, validationResult } = require('express-validator');
// const Post = require('../models/Post');

// // @route    POST api/posts
// // @desc     Create a post
// // @access   Private
// router.post(
//   '/',
//   [
//     auth,
//     check('text', 'Text is required').not().isEmpty(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       const errorObj = errors.array().reduce((acc, error) => {
//         acc[error.param] = error.msg;
//         return acc;
//       }, {});
//       return res.status(400).json(errorObj);
//     }

//     try {
//       const { text } = req.body;
//       const post = new Post({
//         text,
//         user: req.user.id,
//       });

//       await post.save();
//       const populatedPost = await Post.findById(post._id).populate('user', 'name');
//       res.json(populatedPost);
//     } catch (err) {
//       console.error('Create post error:', err.message);
//       res.status(500).json({ msg: 'Server error' });
//     }
//   }
// );

// // @route    GET api/posts
// // @desc     Get all posts
// // @access   Public
// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find()
//       .populate('user', 'name')
//       .sort({ date: -1 });
//     res.json(posts);
//   } catch (err) {
//     console.error('Get posts error:', err.message);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const Post = require('../models/Post');
const User = require('../models/User');

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    auth,
    check('text', 'Text is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('name');
      const newPost = new Post({
        text: req.body.text,
        user: req.user.id,
        name: user.name,
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  }
);

// @route    GET api/posts
// @desc     Get all posts
// @access   Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'name').sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check if user owns the post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Post.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Post deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;