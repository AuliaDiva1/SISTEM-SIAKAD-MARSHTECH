exports.up = async function (knex) {
  return knex.schema.createTable('aset', (table) => {
    table.increments('ASET_ID').primary();
    table.string('NAMA_ASET', 100).notNullable();
    table.string('JENIS_ASET', 50).notNullable();
    table.integer('JUMLAH').notNullable();
    table.string('LOKASI', 100);
    table.string('KONDISI', 50);
    table.date('TANGGAL_PEROLEHAN');
    table.decimal('NILAI_ASET', 15, 2);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('aset');
};
