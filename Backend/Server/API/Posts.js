const router = require("express").Router();
const { Post, User } = require("../../Database/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.get("/:threadId", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        threadId: req.params.threadId,
      },
      order: [["id", "ASC"]],
      include:
        {
          model: User,
        },
    });
    let data = posts.map(post => ({
      id: post.id,
      text: post.text,
      replyTo: post.replyTo,
      photo: post.photo,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      author: post.user.dataValues.userName,
      authorPhoto: post.user.dataValues.photo,
      memberSince: post.user.dataValues.createdAt,
    }))
    console.log(data);
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.post("/:threadId", async (req, res, next) => {
  try {
    console.log(`the post data in api is: ${JSON.stringify(req.body)}`);
    const post = await Post.create(req.body);
    res.json(post);
  } catch (err) {
    next(err);
  }
});
