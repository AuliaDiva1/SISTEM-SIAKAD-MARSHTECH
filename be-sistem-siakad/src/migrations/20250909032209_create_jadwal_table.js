exports.up = async function (knex) {
  return knex.schema.createTable('jadwal', (table) => {
    table.bigIncrements('JADWAL_ID').primary();
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel');
    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel');
    table.bigInteger('GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru');
    table.bigInteger('RUANG_ID').unsigned()
      .references('RUANG_ID').inTable('ruang');
    table.integer('HARI_ID').unsigned()
      .references('HARI_ID').inTable('hari');
    table.integer('SLOT_ID').unsigned()
      .references('SLOT_ID').inTable('time_slot');
    table.unique(['SEMESTER_ID','ROMBEL_ID','HARI_ID','SLOT_ID']);
    table.unique(['SEMESTER_ID','GURU_ID','HARI_ID','SLOT_ID']);
    table.unique(['SEMESTER_ID','RUANG_ID','HARI_ID','SLOT_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('jadwal');
};
