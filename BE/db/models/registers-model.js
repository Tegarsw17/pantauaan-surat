
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class register extends Model {
}

register.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    letter_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'letter_id'
    },
    nomor_surat: {
    type: DataTypes.STRING,
    allowNull: false
    },
    pengirim: {
    type: DataTypes.STRING,
    allowNull: false
    },
    perihal: {
    type: DataTypes.STRING,
    allowNull: false
    },
    tanggal_surat: {
    type: DataTypes.DATE,
    allowNull: false
    },
    tanggal_diterima: {
    type: DataTypes.DATE,
    allowNull: false
    },
    status: {
    type: DataTypes.STRING,
    allowNull: false
    },
    control: {
    type: DataTypes.STRING,
    allowNull: false
    },
    unit_proses: {
    type: DataTypes.STRING,
    allowNull: false
    },
    tindak_lanjut: {
    type: DataTypes.STRING,
    allowNull: false
    },
    keterangan: {
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
// return register

module.exports = register