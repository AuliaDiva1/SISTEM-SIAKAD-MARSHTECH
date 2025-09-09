exports.up = async function (knex) {
  return knex.schema.createTable('anggaran', (table) => {
    table.increments('ANGGARAN_ID').primary();
    table.integer('ASET_ID').unsigned()
      .references('ASET_ID').inTable('aset').onDelete('CASCADE');
    table.integer('TAHUN_ANGGARAN').notNullable(); // knex tidak punya table.year()
    table.decimal('BIAYA_PENGADAAN', 15, 2);
    table.decimal('BIAYA_PEMELIHARAAN', 15, 2);
    table.decimal('TOTAL_BIAYA', 15, 2);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('anggaran');
};
