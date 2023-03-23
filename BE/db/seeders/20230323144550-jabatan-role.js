module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jabatan_roles', [
      {
        jabatan: 'staff TU',
        role: 'admin',
      },
      {
        jabatan: 'kabid TU',
        role: 'supervisior',
      },
      {
        jabatan: 'Kepala Kantor',
        role: 'manager',
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jabatan_roles', null, {});
  }
};