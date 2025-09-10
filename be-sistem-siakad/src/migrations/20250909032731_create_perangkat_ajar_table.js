exports.up = async function (knex) {
  return knex.schema.createTable('perangkat_ajar', (table) => {
    table.bigIncrements('PERANGKAT_ID').primary();
    table.bigInteger('RPP_ID').unsigned()
      .references('RPP_ID').inTable('rpp').onDelete('CASCADE');
    table.enu('JENIS', ['ModulAjar','LKPD','Media','Rubrik','BahanBaca','Lainnya']).notNullable();
    table.string('NAMA', 150).notNullable();
    table.text('FILE_URL').notNullable();
    table.text('KETERANGAN');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('perangkat_ajar');
};
