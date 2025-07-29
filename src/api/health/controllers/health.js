'use strict';

module.exports = {
  async check(ctx) {
    try {
      // Basic database ping
      await strapi.db.connection.raw('SELECT 1');

      ctx.send({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: Date.now(),
        env: process.env.NODE_ENV,
      });
    } catch (error) {
      ctx.status = 503;
      ctx.send({
        status: 'error',
        message: 'Database unavailable',
        error: error.message,
      });
    }
  },
};
