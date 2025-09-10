exports.up = async function (knex) {
  return knex.schema.createTable('dokumen_siswa', (table) => {
    table.bigIncrements('DOK_ID').primary();
    table.bigInteger('SISWA_ID').unsigned()
      .references('SISWA_ID').inTable('siswa')
      .onDelete('CASCADE').onUpdate('CASCADE');
    table.enu('JENIS', ['KK','AkteLahir','Foto','IjazahSMP','KIP','Lainnya']).notNullable();
    table.text('FILE_URL').notNullable();
    table.text('KETERANGAN');
    table.unique(['SISWA_ID','JENIS']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('dokumen_siswa');
};
