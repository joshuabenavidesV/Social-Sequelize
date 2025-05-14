const {Sequelize, sequelize, DataTypes, Model} = require('../db/connection');

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    sequelize,
    modelName: "User",
})

module.exports = User;