exports.up = async function (knex) {
  return knex.schema.createTable('siswa', (table) => {
    table.bigIncrements('SISWA_ID').primary();
    table.string('NIS', 20).unique();
    table.string('NISN', 20).unique();
    table.string('NAMA', 120).notNullable();
    table.enu('GENDER', ['L', 'P']).notNullable();
    table.date('TGL_LAHIR');
    table.string('TEMPAT_LAHIR', 80);
    table.string('AGAMA', 20);
    table.string('ALAMAT_JALAN', 255);
    table.string('KOTA', 80);
    table.string('PROVINSI', 80);
    table.string('KODE_POS', 10);
    table.string('PHONE_SISWA', 20);
    table.string('EMAIL', 120);
    table.enu('STATUS_MASUK', ['Baru', 'Pindahan']).defaultTo('Baru');
    table.date('TGL_MASUK');
    table.date('TGL_KELUAR');
    table.enu('ALASAN_KELUAR', ['Lulus', 'Pindah', 'DO', 'Lainnya']);
    table.enu('STATUS', ['Aktif', 'Lulus', 'Nonaktif']).defaultTo('Aktif');
    table.bigInteger('CURRENT_ROMBEL_ID').unsigned()
      .references('ROMBEL_ID').inTable('rombel')
      .onDelete('SET NULL').onUpdate('CASCADE');
    table.text('FOTO_URL');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('siswa');
};
