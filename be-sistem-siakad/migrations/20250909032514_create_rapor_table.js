exports.up = async function (knex) {
  return knex.schema.createTable('rapor', (table) => {
    table.bigIncrements('RAPOR_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.decimal('TOTAL_SKOR', 6, 2);
    table.integer('RANGKING');
    table.text('CATATAN_WALI');
    table.enu('STATUS', ['Draft','Final']).defaultTo('Draft');
    table.unique(['SISWA_ID','SEMESTER_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('rapor');
};
