const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");
//1
User.hasOne(Profile);
Profile.belongsTo(User);
//2
User.hasMany(Post);
Post.belongsTo(User);
//3
Post.hasMany(Comment);
Comment.belongsTo(Post)
//4
User.belongsToMany(Like, { through: 'UserLike' });
Like.belongsToMany(User, { through: 'UserLike' });

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}