'use strict';

/**
 * Self-registration through POST /api/auth/local/register is not a feature of
 * this platform: portal end users sign in through external identity providers,
 * and Strapi content-API users are provisioned by admins only. Strapi enables
 * registration by default and stores that setting in the database, where it
 * can be re-enabled from the admin panel or come back with a fresh DB. Enforce
 * it here on every boot so the setting is version-controlled.
 */
const disablePublicRegistration = async (strapi) => {
  const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });
  const advanced = (await pluginStore.get({ key: 'advanced' })) || {};

  if (advanced.allow_register !== false) {
    await pluginStore.set({
      key: 'advanced',
      value: { ...advanced, allow_register: false },
    });
    strapi.log.warn('[security] users-permissions self-registration was enabled; disabled it.');
  }

  // Defense in depth: also revoke the register action from every role, so the
  // endpoint returns 403 even if the setting above is toggled back on.
  const { count } = await strapi.db
    .query('plugin::users-permissions.permission')
    .deleteMany({ where: { action: 'plugin::users-permissions.auth.register' } });

  if (count > 0) {
    strapi.log.warn(`[security] Removed ${count} users-permissions "auth.register" permission(s).`);
  }
};

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    await disablePublicRegistration(strapi);
  },
};
