exports.up = async function (knex) {
  return knex.schema.createTable('sekolah', (table) => {
    table.increments('SEKOLAH_ID').primary();
    table.string('NAMA_SEKOLAH', 100).notNullable();
    table.text('VISI');
    table.text('MISI');
    table.text('SEJARAH');
    table.text('ALAMAT');
    table.string('KOTA', 50);
    table.string('PROVINSI', 50);
    table.string('KODE_POS', 10);
    table.string('NO_TELPON', 15);
    table.string('EMAIL', 100);
    table.string('WEBSITE', 100);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('sekolah');
};
