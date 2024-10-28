'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('disposition_letters', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      surat_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "surats",
          key: "id",
          as: "surat_id"
        }
      },
      sender_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pengirim: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomor_surat: {
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
      catatan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATEONLY,
      },
      updated_at: {
        type: Sequelize.DATEONLY,
      },
      deleted_at: {
        type: Sequelize.DATEONLY,
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('disposition_letters')
  }
}
