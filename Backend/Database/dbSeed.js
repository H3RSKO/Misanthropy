const db = require('./db')
const {User, Post} = require('./models')

const userData = [
  {
    name: 'yosef',
    email: 'yosef@test.com',
    password: 'passwordHash',
    photo: 'https://storage.cloud.google.com/misanthropy-profile-images/headshot.jpg'
  },
  {
    name: 'yedid',
    email: 'yedid@test.com',
    password: 'passwordHash',
    photo: ''
  },
]

const postData = [
  {
    text: 'Cool new conscept art',
    photo: 'https://storage.cloud.google.com/misanthropy-post-images/scifi-post.jpg',
    userId: 1
  },
  {
    text: 'That looks awesome',
    userId: 2,
    replyTo: 1
  }
]

const seedDB = async () => {
  try {
    await db.sync({force: true})
    console.log('db flushed and models synced!')

    const createdUsers = await Promise.all(
      userData.map((user) => User.create(user))
    )
    console.log('Added users')

    const createdPosts = Promise.all(
      postData.map((post) => {Post.create(post)})
    )
    console.log('Added posts')
  }
  catch(err) {console.log(err)}
}

seedDB()
