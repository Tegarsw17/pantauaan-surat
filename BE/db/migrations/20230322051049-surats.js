'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('surats', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "users",
          key: "id",
          as: "user_id"
        }
      },
      jenis_surat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomor_agenda: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nomor_surat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tujuan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pengirim: {
        type: Sequelize.STRING,
        allowNull: false
      },
      perihal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tanggal_surat: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tanggal_diterima: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      control: {
        type: Sequelize.STRING,
        allowNull: false
      },
      unit_proses: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tindak_lanjut: {
        type: Sequelize.STRING,
        allowNull: false
      },
      keterangan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // created_at: {
      //   type: Sequelize.DATEONLY,
      //   defaultValue: Sequelize.fn('now')
      // },
      // updated_at: {
      //   type: Sequelize.DATEONLY,
      //   defaultValue: Sequelize.fn('now')
      // },
      // deleted_at: {
      //   type: Sequelize.DATEONLY,
      // }
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('surats')
  }
}
