'use strict';
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class DispositionLetter extends Model {
  static associate(models) {
    DispositionLetter.belongsTo(models.Surat, {
      foreignKey: 'surat_id',
      as: 'surat',
    });
  }
}

DispositionLetter.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  surat_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'surats',
      key: 'id',
    },
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  recipient_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pengirim: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nomor_surat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  perihal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tanggal_surat: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tanggal_diterima: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  catatan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  deleted_at: {
    type: DataTypes.DATEONLY,
  },
}, {
  sequelize,
  modelName: 'DispositionLetter',
  tableName: 'disposition_letters',
  timestamps: true,
  paranoid: true,
  underscored: true,
});

module.exports = DispositionLetter