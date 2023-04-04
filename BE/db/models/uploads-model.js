
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class upload_letter extends Model {
}

upload_letter.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      surat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'surat_id'
    },
    filename: {
    type: DataTypes.STRING,
    allowNull: false
    },
    url: {
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
// return letter

module.exports = upload_letter