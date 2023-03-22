'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('registers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      letter_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "letters",
          key: "id",
          as: "letter_id"
        }
      },
      nomor_surat: {
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


      created_at: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.fn('now')
      },
      deleted_at: {
        type: Sequelize.DATEONLY,
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('registers')
  }
}