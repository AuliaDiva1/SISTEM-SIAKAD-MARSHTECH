exports.up = async function (knex) {
  return knex.schema.createTable('review_kurikulum', (table) => {
    table.bigIncrements('RVK_ID').primary();
    table.bigInteger('GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel');
    table.text('RINGKASAN_TEMUAN').notNullable();
    table.text('REKOMENDASI').notNullable();
    table.date('TANGGAL').notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('review_kurikulum');
};
