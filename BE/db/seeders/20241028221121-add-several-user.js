'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
    {
      fullname: 'KASIE TEKOP DAN OPERASI',
      jabatan_role_id: 11,
      phone: '085723144211',
      email: 'kasie1@gmail.com',
      password: '$2a$12$yZ8iTZ1OzwYaDgi09TOhqOKwGUQfnGannXEEfObkKH5hiupzN9/Ty' //test123
    },
    {
      fullname: 'KASIE KAMPEN DAN YANDAR',
      jabatan_role_id: 12,
      phone: '085723144211',
      email: 'kasie2@gmail.com',
      password: '$2a$12$yZ8iTZ1OzwYaDgi09TOhqOKwGUQfnGannXEEfObkKH5hiupzN9/Ty' //test123
    },
    {
      fullname: 'KASIE PEL. DAN KERJASAMA',
      jabatan_role_id: 13,
      phone: '085723144211',
      email: 'kasie3@gmail.com',
      password: '$2a$12$yZ8iTZ1OzwYaDgi09TOhqOKwGUQfnGannXEEfObkKH5hiupzN9/Ty' //test123
    }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
