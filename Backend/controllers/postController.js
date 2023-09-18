const PostModel = require("../models/Post.js");

const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate("user").exec();

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't find posts",
    });
  }
};

const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const updateDoc = await PostModel.findOneAndUpdate(
      { _id: postId },
      {
        $inc: { viewsCount: 1 },
      },
      {
        new: true,
      }
    );
    if (!updateDoc) {
      return res.status(500).json({
        message: "Post is Undefind",
      });
    }

    res.json(updateDoc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't find this post",
    });
  }
};

const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedDoc = await PostModel.findOneAndDelete({ _id: postId });

    if (!deletedDoc) {
      return res.status(404).json({
        message: "Post is not found",
      });
    }

    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Can't delete this Post",
    });
  }
};

const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      { _id: postId },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        user: req.userId,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Can't update this Post",
    });
  }
};

const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't make new post",
    });
  }
};

module.exports = { create, getAll, getOne, remove, update };
