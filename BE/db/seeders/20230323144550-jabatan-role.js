module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jabatan_roles', [
      {
        id: 1,
        jabatan: 'staff TU',
        role: 'admin',
      },
      {
        id: 2,
        jabatan: 'kabid TU',
        role: 'supervisior',
      },
      {
        id: 3,
        jabatan: 'Kepala Kantor',
        role: 'manager',
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jabatan_roles', null, {});
  }
};