exports.up = async function (knex) {
  return knex.schema.createTable('rpp_tp', (table) => {
    table.bigIncrements('RPP_TP_ID').primary();
    table.bigInteger('RPP_ID').unsigned()
      .references('RPP_ID').inTable('rpp').onDelete('CASCADE');
    table.bigInteger('TP_ID').unsigned()
      .references('TP_ID').inTable('tp');
    table.unique(['RPP_ID','TP_ID']);
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('rpp_tp');
};
