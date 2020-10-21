const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  // add author
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  replyTo: {
    // references the other post id
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  photo: {
    type: Sequelize.TEXT,
    defaultValue: '',
    allowNull: true
  }
})

module.exports = Post
