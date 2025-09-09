exports.up = async function (knex) {
  return knex.schema.createTable('catatan_bk', (table) => {
    table.bigIncrements('BK_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.date('TANGGAL').notNullable();
    table.integer('POIN').defaultTo(0);
    table.text('KETERANGAN');
    table.bigInteger('BK_GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('catatan_bk');
};
