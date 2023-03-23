
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class jabatan_role extends Model {
}

jabatan_role.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jabatan: {
    type: DataTypes.STRING,
    allowNull: false
    },
    role: {
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
// return jabatan_role

module.exports = jabatan_role