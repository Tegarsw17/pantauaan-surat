
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class user_dispositon extends Model {
}

user_dispositon.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    disposition_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "disposition_id"
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }
  
)
// return user_dispositon

module.exports = user_dispositon