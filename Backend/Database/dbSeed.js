const db = require('./db')
const {User} = require('./models')

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


const seedDB = async () => {
  try {
    await db.sync({force: true})
    console.log('db flushed and models synced!')

    const createdUsers = await Promise.all(
      userData.map((user) => User.create(user))
    )
    console.log('Added users')
  }
  catch(err) {console.log(err)}
}

seedDB()
