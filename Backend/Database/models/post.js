const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  // add author
  text: {
    type: Sequelize.TEXT,
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

// need to have an option to set as story continuation if post is in story thread and by thread OP
