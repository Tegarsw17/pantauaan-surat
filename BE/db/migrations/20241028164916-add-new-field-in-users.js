'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.describeTable('users').then(async () => {
        await queryInterface.addColumn(
          'users',
          'is_admin',
          {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
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
      await queryInterface.removeColumn('users', 'is_admin', {
        transaction: t,
      });
    });
  },
};
