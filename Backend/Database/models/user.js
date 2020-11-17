const Sequelize = require('sequelize')
const db = require('../db')
const {SHA256} = require("crypto-js");
const crypto = require('crypto')

const User = db.define('user', {
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    len: [4,25]
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
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return () => this.getDataValue('password')
    }
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
User.prototype.correctPW = function(pw) {
  return User.encryptPassword(pw, this.salt()) === this.password()
}

// Class methods
User.generateSalt = function() {
  return crypto.randomBytes(18).toString('base64')
}

User.encryptPassword = (pw, salt) => {
  // return AES.encrypt(pw, salt).toString()
  return SHA256(pw, salt).toString()
}

const setSaltAndPassword = (user) => {
  // if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password(), user.salt())
  // }
}

// creates salt and hashes password
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
