exports.up = function(knex, Promise) {
  return knex.schema.table("users", tbl => {
    tbl.string("fullname");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", tbl => {
    tbl.dropColumn("fullname");
  });
};
