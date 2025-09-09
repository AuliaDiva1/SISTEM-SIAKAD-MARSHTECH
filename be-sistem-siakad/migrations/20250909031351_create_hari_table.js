exports.up = async function (knex) {
  return knex.schema.createTable('hari', (table) => {
    table.increments('HARI_ID').primary();      // INT UNSIGNED AUTO_INCREMENT
    table.string('NAMA_HARI', 20).notNullable(); // contoh: Senin, Selasa
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('hari');
};
