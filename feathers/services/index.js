'use strict';
const alerts = require('./alerts/index');
const authentication = require('./authentication/index');
const user = require('./user/index');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(alerts);
};
