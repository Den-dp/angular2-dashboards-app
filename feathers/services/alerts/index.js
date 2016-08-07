'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks/index');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'alerts.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/alerts', service(options));

  // Get our initialize service to that we can bind hooks
  const alertsService = app.service('/alerts');

  // Set up our before hooks
  alertsService.before(hooks.before);

  // Set up our after hooks
  alertsService.after(hooks.after);
};
