'use strict';

const router = require('./router/index');
const routerEvents = require('./router/events');

// use middleware should only ever be used once
// see http://router5.github.io/docs/middleware.html
router.useMiddleware(require('./router/dom').transition);

$(() => {
  router.start();

  routerEvents.addHandlers();
});
