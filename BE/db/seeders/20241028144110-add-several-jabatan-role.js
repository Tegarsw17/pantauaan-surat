module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jabatan_roles', [
      {
        id: 11,
        jabatan: 'KASIE TEKOP DAN OPERASI',
        role: 'kasie',
      },
      {
        id: 12,
        jabatan: 'KASIE KAMPEN DAN YANDAR',
        role: 'kasie',
      },
      {
        id: 13,
        jabatan: 'KASIE PEL. DAN KERJASAMA',
        role: 'kasie',
      },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jabatan_roles', null, {});
  }
};