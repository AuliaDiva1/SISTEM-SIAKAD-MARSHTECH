exports.up = async function (knex) {
  return knex.schema.createTable('rombel', (table) => {
    table.bigIncrements('ROMBEL_ID').primary();
    table.string('NAMA', 30).notNullable();
    table.enu('TINGKAT', ['X', 'XI', 'XII']).notNullable();
    table.string('JURUSAN', 20);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('rombel');
};
