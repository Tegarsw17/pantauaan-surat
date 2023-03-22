'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('approvals', {
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
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catatan: {
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
     await queryInterface.dropTable('approvals')
  }
}
