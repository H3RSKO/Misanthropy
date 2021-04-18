const router = require('express').Router()
const {Post} = require('../../Database/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch(err) {next(err)}
})

router.get('/:threadId', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: {
        threadId: req.params.threadId
      },
      order: [
        ['id', 'ASC'],
    ],
    })
    res.json(posts)
  } catch(err) {next(err)}
})

router.post('/:threadId', async (req, res, next) => {
  try {
    console.log(`the post data in api is: ${JSON.stringify(req.body)}`)
    const post = await Post.create(req.body)
    res.json(post)
  } catch(err) {next(err)}
})
