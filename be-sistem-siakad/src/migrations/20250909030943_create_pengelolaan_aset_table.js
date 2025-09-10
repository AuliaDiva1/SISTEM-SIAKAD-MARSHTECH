exports.up = async function (knex) {
  return knex.schema.createTable('pengelolaan_aset', (table) => {
    table.increments('PENGELOLAAN_ID').primary();
    table.integer('ASET_ID').unsigned()
      .references('ASET_ID').inTable('aset').onDelete('CASCADE');
    table.date('TANGGAL_PENGELOLAAN').notNullable();
    table.string('JENIS_PENGELOLAAN', 50).notNullable();
    table.text('KETERANGAN');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('pengelolaan_aset');
};
