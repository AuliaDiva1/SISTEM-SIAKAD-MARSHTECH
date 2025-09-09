exports.up = async function (knex) {
  return knex.schema.createTable('riwayat_pendidikan', (table) => {
    table.bigIncrements('RP_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa')
      .onDelete('CASCADE').onUpdate('CASCADE');
    table.enu('JENJANG', ['SD','SMP','SMA']).notNullable();
    table.string('SEKOLAH', 150).notNullable();
    table.smallint('TAHUN_MASUK');
    table.smallint('TAHUN_LULUS');
    table.text('KETERANGAN');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('riwayat_pendidikan');
};
