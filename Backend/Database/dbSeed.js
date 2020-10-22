const db = require('./db')
const {User, Post, Thread} = require('./models')

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

const threadData = [
  {
    title: 'The Awakening',
    views: 21,
    story: true,
    userId: 1
  },
  {
    title: 'How to write short stories',
    views: 21,
    upvotes: 15,
    story: false,
    userId: 2
  }
]

const postData = [
  {
    text: 'Cool new conscept art',
    photo: 'https://storage.cloud.google.com/misanthropy-post-images/scifi-post.jpg',
    userId: 1,
    threadId: 1
  },
  {
    text: 'That looks awesome',
    userId: 2,
    replyTo: 1,
    threadId: 2
  }
]


const seedDB = async () => {
  try {
    await db.sync({force: true})
    console.log('db flushed and models synced!')

    const createdUsers = await Promise.all(
      userData.map(user => User.create(user))
    )
    console.log('Added users')

    const createThreads = await Promise.all(
      threadData.map(thread => Thread.create(thread))
    )
    console.log('Added Threads')

    const createdPosts = Promise.all(
      postData.map(post => Post.create(post))
    )
    console.log('Added posts')


  }
  catch(err) {console.log(err)}
}

seedDB()
