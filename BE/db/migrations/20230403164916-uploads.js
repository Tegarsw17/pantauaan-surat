'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('upload_letters', {
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
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url: {
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
     await queryInterface.dropTable('upload_letters')
  }
}

