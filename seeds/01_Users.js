
exports.seed = function(knex, Promise) {
  var tableName = 'users';
  var rows = [
    {
      name: 'Test User',
      username: 'testuser',
      email: 'test@whatever.com',
      password: 'testpassword',
      guid: 'f03ede7c-b121-4112-bcc7-130a3e87988c'
    }
  ];

  // Delete all existing rows, then seed
  return knex(tableName).del()
                        .then( function() {
                          return knex.insert(rows).into(tableName);
                        });
};
