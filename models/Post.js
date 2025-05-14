const {Sequelize, sequelize, DataTypes, Model} = require('../db/connection');
class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: {
    type: DataTypes.STRING,
    validate: {
    isDate: true // checks if the string is a valid date
  }
}
}, {
    sequelize,
    modelName: "Post",
})


module.exports = Post;