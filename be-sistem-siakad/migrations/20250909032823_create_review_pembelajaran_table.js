exports.up = async function (knex) {
  return knex.schema.createTable('review_pembelajaran', (table) => {
    table.bigIncrements('RVP_ID').primary();
    table.bigInteger('GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru');
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.enu('PERIODE', ['Mingguan','Bulanan','AkhirSemester']).notNullable();
    table.integer('MINGGU_KE');
    table.text('RINGKASAN_TEMUAN').notNullable();
    table.text('AKSI_PERBAIKAN');
    table.text('EVIDENCE_LINK');
    table.date('TANGGAL').notNullable();
    table.unique(
      ['GURU_ID','MAPEL_ID','ROMBEL_ID','SEMESTER_ID','PERIODE','MINGGU_KE'],
      'rpb_unique'
    );
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('review_pembelajaran');
};
