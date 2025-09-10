exports.up = async function (knex) {
  return knex.schema.createTable('guru_karyawan', (table) => {
    table.increments('ID_USER').primary();
    table.string('NAMA', 100).notNullable();
    table.string('NIP_NIK', 50).unique().notNullable();
    table.enu('JABATAN', ['GURU', 'TU', 'BK', 'ADMIN', 'KURIKULUM']).notNullable();
    table.string('EMAIL', 100).unique().notNullable();
    table.string('NO_HP', 20);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('guru_karyawan');
};
