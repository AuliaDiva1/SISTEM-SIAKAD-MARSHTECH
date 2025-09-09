exports.up = async function (knex) {
  return knex.schema.createTable('admin', (table) => {
    table.increments('ADMIN_ID').primary();
    table.integer('SEKOLAH_ID').unsigned()
      .references('SEKOLAH_ID').inTable('sekolah').onDelete('CASCADE');
    table.string('NAMA', 100).notNullable();
    table.string('USERNAME', 50).unique().notNullable();
    table.string('PASSWORD', 255).notNullable();
    table.enu('ROLE', ['Super Admin', 'Admin']).defaultTo('Admin');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('admin');
};
