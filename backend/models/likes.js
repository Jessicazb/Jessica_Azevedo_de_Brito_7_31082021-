const { Model, DataTypes } = require("sequelize")

class Likes extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      users_id: {type: DataTypes.INTEGER, allowNull: false},
      post_id: {type: DataTypes.INTEGER, allowNull: false},
    },
      {
        sequelize
      })
  }
}

module.exports = Likes;