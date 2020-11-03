const Sequelize = require('sequelize')
const db = require('../db')
const {AES} = require("crypto-js");
const crypto = require('crypto')

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false,
    len: [4,25]
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  password: {
    // to be updated with crypto
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password')
    },
    len: [5,25]
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` acts like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  // add posts
  // add threads
  // add stories
  photo: {
    type: Sequelize.TEXT,
    defaultValue: 'https://storage.cloud.google.com/misanthropy-profile-images/proflie-pic.jpg'
  }
})

// Instance method
User.prototype.correctPW = (pw) => {
  return User.encryptPassword(pw, this.salt()) === this.password()
}


// Class methods
User.generateSalt = function() {
  return crypto.randomBytes(256).toString('base64')
}

User.encryptPassword = (pw, salt) => {
  AES.encrypt(pw, salt).toString()
}



module.exports = User
