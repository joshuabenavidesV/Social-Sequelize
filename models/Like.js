const {Sequelize, sequelize, DataTypes, Model} = require('../db/connection');
class Like extends Model {}

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: {
    type: DataTypes.STRING,
    validate: {
    isDate: true // checks if the string is a valid date
  }
}
}, {
    sequelize,
    modelName: "Like",
})
module.exports = Like;