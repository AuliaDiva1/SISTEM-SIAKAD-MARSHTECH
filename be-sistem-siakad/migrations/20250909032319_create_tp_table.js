exports.up = async function (knex) {
  return knex.schema.createTable('tp', (table) => {
    table.bigIncrements('TP_ID').primary();
    table.bigInteger('CP_ID').unsigned()
      .references('CP_ID').inTable('cp').onDelete('CASCADE');
    table.string('KODE_TP', 20).notNullable();
    table.text('DESKRIPSI').notNullable();
    table.text('INDIKATOR');
    table.unique(['CP_ID','KODE_TP']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('tp');
};
