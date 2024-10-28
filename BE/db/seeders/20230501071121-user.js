'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
    {
      id: 1,
      fullname: 'Kepala Kantor',
      jabatan_role_id: 3,
      phone: '085723144211',
      email: 'manager@gmail.com',
      password: '$2b$08$K4vxH/fN8/JzHyzCxPcNjejo0oT0kz/M4gRnV0AQcB/0AOJ.hA7oK', //manager123
      is_admin: true,
    },
    {
      id: 2,
      fullname: 'Kasubag TU',
      jabatan_role_id: 2,
      phone: '085723144211',
      email: 'spv@gmail.com',
      password: "$2b$08$wZ2S3eBy2itPowwpHnOboOrCpyLqGdn5EJa.Yd/DIMr9YUXO9.hz2" //'spv123'
    },
    {
      id: 3,
      fullname: 'admin',
      jabatan_role_id: 1,
      phone: '085723144211',
      email: 'admin@gmail.com',
      password: '$2b$08$wj.8rcOSkrIanZ88f9BmK.iigucxh3SBqUFhZQMSBQ6hewrM1XQCq', //'admin123'
      is_admin: true,
    }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
