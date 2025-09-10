exports.up = async function (knex) {
  return knex.schema.createTable('rpp_detail', (table) => {
    table.bigIncrements('RPP_DET_ID').primary();
    table.bigInteger('RPP_ID').unsigned()
      .references('RPP_ID').inTable('rpp').onDelete('CASCADE');
    table.integer('MINGGU_KE').notNullable();
    table.string('TOPIK', 150).notNullable();
    table.text('TUJUAN_PEMBELAJARAN').notNullable();
    table.text('MATERI').notNullable();
    table.text('METODE').notNullable();
    table.text('ASESMEN').notNullable();
    table.text('SUMBER_BELAJAR').notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('rpp_detail');
};
