const User = require('./user')
const Post = require('./post')
const Thread = require('./thread')

User.hasMany(Post)
Post.belongsTo(User)
Thread.belongsTo(User)

User.hasMany(Thread)
Thread.hasMany(Post)
Post.belongsTo(Thread)

module.exports = {
  User,
  Post,
  Thread
}
