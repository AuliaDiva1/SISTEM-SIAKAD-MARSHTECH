exports.up = async function (knex) {
  return knex.schema.createTable('fasilitas', (table) => {
    table.increments('FASILITAS_ID').primary();
    table.integer('SEKOLAH_ID').unsigned()
      .references('SEKOLAH_ID').inTable('sekolah').onDelete('CASCADE');
    table.string('NAMA_FASILITAS', 100).notNullable();
    table.text('DESKRIPSI');
    table.string('FOTO', 255);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('fasilitas');
};

