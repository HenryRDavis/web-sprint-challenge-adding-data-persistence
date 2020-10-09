exports.up = function (knex) {
    return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("project_name").notNullable();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource_name").notNullable();
      tbl.string("description");

    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task_name").notNullable();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('RESTRICT')
      .onDelete('CASCADE');
    })

    .createTable("project_res", tbl => {
      tbl.increments();
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('RESTRICT')
      .onDelete('CASCADE');
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onUpdate('RESTRICT')
      .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_res")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};