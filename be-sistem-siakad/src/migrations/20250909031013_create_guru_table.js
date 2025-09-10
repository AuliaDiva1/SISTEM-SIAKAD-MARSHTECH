exports.up = async function (knex) {
  return knex.schema.createTable('guru', (table) => {
    table.bigIncrements('GURU_ID').primary();
    table.string('NIP', 30);
    table.string('NAMA', 100).notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('guru');
};
