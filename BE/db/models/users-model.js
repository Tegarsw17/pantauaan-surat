
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class user extends Model {
}

user.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: true
      },
      jabatan_role_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'jabatan_role_id'
,      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
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
// return user

module.exports = user