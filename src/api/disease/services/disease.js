'use strict';

/**
 * disease service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disease.disease');
