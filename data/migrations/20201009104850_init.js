
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name').notNullable()
        tbl.string('description')
        tbl.string('completed').notNullable().defaultTo(false)

    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
        tbl.string("name").notNullable();
        tbl.string("description").notNullable();
        tbl.string("notes");
        tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("description")
    })
    .createTable("project_resources", (tbl) => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
