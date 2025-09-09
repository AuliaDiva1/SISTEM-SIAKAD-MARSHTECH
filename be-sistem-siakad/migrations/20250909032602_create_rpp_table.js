exports.up = async function (knex) {
  return knex.schema.createTable('rpp', (table) => {
    table.bigIncrements('RPP_ID').primary();

    table.bigInteger('GURU_ID').unsigned()
      .references('GURU_ID').inTable('guru')
      .onDelete('CASCADE');

    table.bigInteger('MAPEL_ID').unsigned()
      .references('MAPEL_ID').inTable('mapel')
      .onDelete('CASCADE');

    table.bigInteger('ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel')
      .onDelete('CASCADE');

    table.bigInteger('SEMESTER_ID').unsigned()
      .references('SEMESTER_ID').inTable('semester')
      .onDelete('CASCADE');

    table.string('JUDUL', 150).notNullable();

    table.enu('MODE_KURIKULUM', ['Merdeka','K13']).defaultTo('Merdeka');
    table.enu('STATUS', ['Draft','Diajukan','Disetujui','Revisi','Ditolak']).defaultTo('Draft');

    table.datetime('TGL_AJUAN').nullable();
    table.datetime('TGL_APPROVAL').nullable();

    table.bigInteger('REVIEWER_ID').unsigned()
      .nullable()
      .references('GURU_ID').inTable('guru')
      .onDelete('SET NULL');

    table.text('CATATAN_REVISI').nullable();
    table.string('FILE_URL', 255).nullable(); // ✅ ganti string, lebih pas untuk URL
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('rpp');
};
