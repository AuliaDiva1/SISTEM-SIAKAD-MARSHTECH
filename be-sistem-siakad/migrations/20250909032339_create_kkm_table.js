exports.up = async function (knex) {
  return knex.schema.createTable('kkm', (table) => {
    table.bigIncrements('KKM_ID').primary();
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.integer('NILAI_KKM').notNullable();
    table.unique(['MAPEL_ID','ROMBEL_ID','SEMESTER_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('kkm');
};
