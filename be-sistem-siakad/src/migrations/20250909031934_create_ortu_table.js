exports.up = async function (knex) {
  return knex.schema.createTable('ortu', (table) => {
    table.bigIncrements('ORTU_ID').primary();
    table.string('NAMA', 120).notNullable();
    table.string('PHONE', 20).notNullable();
    table.string('EMAIL', 120);
    table.string('PEKERJAAN', 100);
    table.string('ALAMAT', 255);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('ortu');
};
