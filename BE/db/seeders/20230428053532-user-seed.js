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
          password: '$2b$08$cx8NZQJlfYk6VGtShDpjR.6Z5km3oPtcWmvH.4cr2UhRb7zTuPyzi' //admin123
      },
      {
        fullname: 'supervisior',
        jabatan_role_id: 2,
        phone: '085723144212',
        email: 'spv@gmail.com',
        password: '$2b$08$ehvBv.jMJI8lkvgcu8slj.mqLlKWgBWGKnVYbZzsupR7x6zxRSaWi' //spv123
    },
    {
      fullname: 'manager',
      jabatan_role_id: 2,
      phone: '085723144212',
      email: 'manager@gmail.com',
      password: '$2b$08$A1d6CYIGaIjMD12C/e.Dd.Dae5iHtR03RuNhC3VCOsS0jAtTUgwoy' //manager123
  },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
