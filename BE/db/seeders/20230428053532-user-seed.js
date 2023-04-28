'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
          fullname: 'admin',
          jabatan_role_id: 1,
          phone: '085723144211',
          email: 'admin@gmail.com',
          password: '$2y$08$E/vyuoVXAteVeG3YNYnW.O084jpd/cuSIOBZ4rdWs5/yjCmard3yK' //admin123
      },
      {
        fullname: 'supervisior',
        jabatan_role_id: 2,
        phone: '085723144212',
        email: 'spv@gmail.com',
        password: '$2y$08$cUNyXgwsHmx8AYkH027GhOdCJl1BuLFixCM4yyzIUZ1HQBQHLr8JK' //spv123
    },
    {
      fullname: 'manager',
      jabatan_role_id: 2,
      phone: '085723144212',
      email: 'manager@gmail.com',
      password: '$2y$08$Ekqw20Ss3QQzYktrFgak5OFoUAXo/38PsvPhNR/.MG/rsmFhQZota' //manager123
  },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
