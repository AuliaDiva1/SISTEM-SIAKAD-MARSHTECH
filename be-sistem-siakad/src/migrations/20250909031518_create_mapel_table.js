exports.up = async function (knex) {
  return knex.schema.createTable('mapel', (table) => {
    table.bigIncrements('MAPEL_ID').primary();
    table.string('KODE', 20).unique();
    table.string('NAMA', 100).notNullable();
    table.integer('JAM_JP'); // tinyint diganti integer
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('mapel');
};
