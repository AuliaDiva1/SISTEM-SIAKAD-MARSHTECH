exports.up = async function (knex) {
  return knex.schema.createTable('penilaian', (table) => {
    table.bigIncrements('PENILAIAN_ID').primary();

    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa')
      .onUpdate('CASCADE').onDelete('CASCADE');

    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel')
      .onUpdate('CASCADE').onDelete('CASCADE');

    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester')
      .onUpdate('CASCADE').onDelete('CASCADE');

    table.decimal('NILAI_TUGAS', 5, 2);
    table.decimal('NILAI_UTS', 5, 2);
    table.decimal('NILAI_UAS', 5, 2);
    table.decimal('NILAI_AKHIR', 5, 2);

    // perbaikan di sini
    table.string('PREDIKAT', 1);

    table.text('DESKRIPSI');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('penilaian');
};
