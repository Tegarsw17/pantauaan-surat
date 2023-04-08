
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class disposition extends Model {
}

disposition.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    surat_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'letter_id'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'user_id'
    },
    isi_disposisi: {
    type: DataTypes.STRING,
    allowNull: true
    },
    klasifikasi_surat: {
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
// return disposition

module.exports = disposition