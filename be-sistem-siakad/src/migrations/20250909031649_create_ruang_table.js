exports.up = async function (knex) {
  return knex.schema.createTable('ruang', (table) => {
    table.bigIncrements('RUANG_ID').primary();
    table.string('KODE', 20).unique();
    table.integer('KAPASITAS');
    table.enu('JENIS', ['Kelas', 'Lab', 'Aula', 'Lainnya']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('ruang');
};
