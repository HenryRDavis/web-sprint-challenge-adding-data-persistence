
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
        
    })
    .createTable('tasks', tbl => {
        tbl.increments();
    })
    .createTable('resources', tbl => {
        tbl.increments();
    })
};

exports.down = function(knex) {
  
};
