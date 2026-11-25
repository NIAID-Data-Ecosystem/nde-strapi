'use strict';

module.exports = {
  async check(ctx) {
    try {
      // Basic database ping
      await strapi.db.connection.raw('SELECT 1');
      ctx.send({ status: 'ok' });
    } catch (error) {
      strapi.log.error(`Health check failed: ${error.message}`);
      ctx.status = 503;
      ctx.send({ status: 'error' });
    }
  },
};
