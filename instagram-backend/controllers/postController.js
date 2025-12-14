const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    const { image, caption } = req.body;

    if (!image) {
      return res.status(400).json({ message: "Image required" });
    }

    const post = await Post.create({
      image,
      caption,
      user: req.userId,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeed = async (req, res) => {
  try {
    // TEMP: show ALL posts (important for now)
    const posts = await Post.find()
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.userId)) {
      post.likes.push(req.userId);
      await post.save();
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
