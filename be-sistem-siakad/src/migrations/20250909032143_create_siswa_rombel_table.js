exports.up = async function (knex) {
  return knex.schema.createTable('siswa_rombel', (table) => {
    table.bigIncrements('SR_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa')
      .onDelete('CASCADE').onUpdate('CASCADE');
    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester').onUpdate('CASCADE');
    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel').onUpdate('CASCADE');
    table.integer('NO_ABSEN');
    table.unique(['SISWA_ID','SEMESTER_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('siswa_rombel');
};
