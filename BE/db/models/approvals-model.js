
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class approval extends Model {
}

approval.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    letter_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'letter_id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'user_id'
    },
    status: {
    type: DataTypes.STRING,
    allowNull: true
    },
    catatan: {
    type: DataTypes.STRING,
    allowNull: true
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
// return approval

module.exports = approval