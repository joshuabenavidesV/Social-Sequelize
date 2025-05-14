const {Sequelize, sequelize, DataTypes, Model} = require('../db/connection');
class Profile extends Model {}

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: {
  type: DataTypes.STRING,
  validate: {
    isDate: true // checks if the string is a valid date
  }
}
}, {
    sequelize,
    modelName: "Profile",
})


module.exports = Profile;