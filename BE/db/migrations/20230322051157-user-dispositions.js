'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('user_dispositions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      disposition_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "dispositions",
          key: "id",
          as: "disposition_id"
        }
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
     await queryInterface.dropTable('user_dispositions')
  }
}
