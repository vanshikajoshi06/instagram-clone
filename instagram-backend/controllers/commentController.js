const Comment = require("../models/Comment");
const Post = require("../models/Post");

exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text required" });
    }

    const comment = await Comment.create({
      user: req.userId,
      post: req.params.postId,
      text,
    });

    await Post.findByIdAndUpdate(req.params.postId, {
      $push: { comments: comment._id },
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
    })
      .populate("user", "username")
      .sort({ createdAt: 1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
