exports.up = async function (knex) {
  return knex.schema.createTable('cp', (table) => {
    table.bigIncrements('CP_ID').primary();
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.string('FASE', 5).notNullable();
    table.text('DESKRIPSI').notNullable();
    table.string('SUMBER', 100);
    table.unique(['MAPEL_ID','FASE']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('cp');
};
