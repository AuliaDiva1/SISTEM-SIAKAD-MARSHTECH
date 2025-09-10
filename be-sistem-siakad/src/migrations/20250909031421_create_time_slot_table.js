exports.up = async function (knex) {
  return knex.schema.createTable('time_slot', (table) => {
    table.increments('SLOT_ID').primary(); // pakai auto increment int
    table.string('LABEL', 20).notNullable();
    table.time('JAM_MULAI').notNullable();
    table.time('JAM_SELESAI').notNullable();
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('time_slot');
};
