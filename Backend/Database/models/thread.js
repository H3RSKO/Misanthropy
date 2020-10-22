const Sequelize = require('sequelize')
const db = require('../db')

const Thread = db.define('thread', {
  // add post connector
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  views: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: true
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: true
  },
  story: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Thread
