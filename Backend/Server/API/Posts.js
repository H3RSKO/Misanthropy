const router = require('express').Router()
const {Post} = require('../../Database/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch(err) {next(err)}
})
