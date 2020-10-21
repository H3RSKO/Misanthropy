const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    // to be updated with crypto
    type: Sequelize.STRING,
  },
  // add posts
  // add threads
  // add stories
  photo: {
    type: Sequelize.TEXT,
    defaultValue: 'https://storage.cloud.google.com/misanthropy-profile-images/proflie-pic.jpg'
  }
})


module.exports = User
