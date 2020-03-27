/**(exports.up)Responsavél pela criação das tabelas */
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};
/**(exports.down)Se der algum problema e quiser voltar a trás dacriação de uma tabela, deletar */
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
