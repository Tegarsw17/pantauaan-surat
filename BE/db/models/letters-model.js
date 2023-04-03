
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class surat extends Model {
}

surat.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'user_id'
    },
    jenis_surat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nomor_agenda: {
      type: DataTypes.INTEGER,
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
// return surat

module.exports = surat