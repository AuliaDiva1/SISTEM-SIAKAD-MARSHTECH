exports.up = async function (knex) {
  return knex.schema.createTable('relasi_ortu', (table) => {
    table.bigIncrements('REL_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa')
      .onDelete('CASCADE').onUpdate('CASCADE');
    table.bigInteger('ORTU_ID').unsigned()
      .references('ORTU_ID').inTable('ortu').onUpdate('CASCADE');
    table.enu('HUBUNGAN', ['Ayah', 'Ibu', 'Wali']).notNullable();
    table.boolean('IS_KONTAK_DARURAT').defaultTo(0);
    table.unique(['SISWA_ID', 'ORTU_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('relasi_ortu');
};
