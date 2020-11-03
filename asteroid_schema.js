exports.up = function(knex){
    return knex.schema.createTable('asteroids', function(table) {
        table.float('id');
        table.string('name');
        table.text('url');
        table.float('diameter_in_meters_min');
        table.boolean('is_hazardous');
        table.float('kilometers_per_second');
        table.float('miss_distance_lunar');
        table.string('orbiting_body');
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable("asteroids");
  };
  