exports.up = async function (knex) {
  return knex.schema.createTable('evaluasi_guru', (table) => {
    table.bigIncrements('EVG_ID').primary();
    table.bigInteger('GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.enu('DIMENSI', ['Perencanaan','Pelaksanaan','Asesmen','Refleksi']).notNullable();
    table.integer('SKOR').notNullable();
    table.text('CATATAN');
    table.date('TANGGAL').notNullable();
    table.unique(['GURU_ID','SEMESTER_ID','DIMENSI']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('evaluasi_guru');
};
