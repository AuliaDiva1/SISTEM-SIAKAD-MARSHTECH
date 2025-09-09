exports.up = async function (knex) {
  return knex.schema.createTable('semester', (table) => {
    table.bigIncrements('SEMESTER_ID').primary();
    table.string('TA_LABEL', 9).notNullable();
    table.enu('NAMA', ['Ganjil', 'Genap']).notNullable();
    table.date('TGL_MULAI');
    table.date('TGL_SELESAI');
    table.boolean('IS_AKTIF').defaultTo(0);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('semester');
};
