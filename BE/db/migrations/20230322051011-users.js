'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: true
      },
      jabatan_role_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "jabatan_roles",
          key: "id",
          as: "jabatan_role_id"
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
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
     await queryInterface.dropTable('users')
  }
}
