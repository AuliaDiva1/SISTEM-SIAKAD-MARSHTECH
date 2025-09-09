exports.up = async function (knex) {
  return knex.schema.createTable('pesan', (table) => {
    table.increments('ID_PESAN').primary();
    table.integer('ID_PENGIRIM').notNullable();
    table.enu('PENGIRIM_ROLE', ['GURU','ORANG_TUA']).notNullable();
    table.integer('ID_PENERIMA').notNullable();
    table.enu('PENERIMA_ROLE', ['GURU','ORANG_TUA']).notNullable();
    table.string('SUBJEK', 150);
    table.text('ISI_PESAN').notNullable();
    table.timestamp('TANGGAL_KIRIM').defaultTo(knex.fn.now());
    table.enu('STATUS', ['TERKIRIM','TERBACA','DIBALAS']).defaultTo('TERKIRIM');
  });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists('pesan');
};
