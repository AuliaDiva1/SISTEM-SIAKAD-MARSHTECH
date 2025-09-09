exports.up = async function (knex) {
  return knex.schema.createTable('evaluasi_siswa', (table) => {
    table.bigIncrements('EVS_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa');
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.enu('INDIKATOR', ['Keterlibatan','Pemahaman','Disiplin']).notNullable();
    table.integer('SKOR').notNullable();
    table.text('SARAN');
    table.date('TANGGAL').notNullable();
    table.unique(['SISWA_ID','MAPEL_ID','SEMESTER_ID','INDIKATOR']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('evaluasi_siswa');
};
