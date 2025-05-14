const {Sequelize, sequelize, DataTypes, Model} = require('../db/connection');
class Comment extends Model {}

Comment.init({
    body: DataTypes.STRING,
    createdAt: {
    type: DataTypes.STRING,
    validate: {
    isDate: true // checks if the string is a valid date
  }
}
}, {
    sequelize,
    modelName: "Comment",
})


module.exports = Comment;