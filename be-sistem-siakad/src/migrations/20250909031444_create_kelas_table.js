exports.up = async function (knex) {
  return knex.schema.createTable('kelas', (table) => {
    table.increments('KELAS_ID').primary();
    table.string('NAMA_KELAS', 50).notNullable();
    table.string('TINGKAT', 20).notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('kelas');
};
