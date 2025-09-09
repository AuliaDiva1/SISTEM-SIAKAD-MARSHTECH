exports.up = async function (knex) {
  return knex.schema.createTable('lokasi', (table) => {
    table.increments('LOKASI_ID').primary();
    table.integer('SEKOLAH_ID').unsigned().unique()
      .references('SEKOLAH_ID').inTable('sekolah').onDelete('CASCADE');
    table.string('LINK_MAPS', 255);
    table.decimal('LATITUDE', 10, 6);
    table.decimal('LONGITUDE', 10, 6);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('lokasi');
};
