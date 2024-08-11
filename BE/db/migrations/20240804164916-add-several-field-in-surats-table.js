'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.describeTable('surats').then(async () => {
        await queryInterface.addColumn(
          'surats',
          'status_type',
          {
            type: Sequelize.ENUM('CREATED', 'SEND_TO_APPROVED', 'APPROVED', 'REJECTED', 'DISPOSITION'),
            allowNull: true,
          },
          {
            transaction: t,
          }
        );
      });
    });
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn('surats', 'status_type', {
        transaction: t,
      });
    });
  },
};
