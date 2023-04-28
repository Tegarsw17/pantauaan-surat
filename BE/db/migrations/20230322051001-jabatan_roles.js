'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('jabatan_roles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jabatan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
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
      // created_at: {
      //   type: Sequelize.DATE,
      //   defaultValue: Date.now()
      // },
      // updated_at: {
      //   type: Sequelize.DATE,
      //   defaultValue: Date.now()
      // },
      // deleted_at: {
      //   type: Sequelize.DATE
      // }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('jabatan_roles')
  }
}
