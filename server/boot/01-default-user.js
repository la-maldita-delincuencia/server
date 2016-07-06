'use strict';

module.exports = function(server, next) {
  var username = process.env.LMD_DEFAULT_ADMIN_USER;
  var password = process.env.LMD_DEFAULT_ADMIN_PASS;

  if (!username || !password) {
    return;
  }

  server.models.User.findOrCreate(
    {where: {email: username}},
    {
      email: username,
      password: password,
    },
    function(err, instance, created) {
      next();
    }
  );
};
