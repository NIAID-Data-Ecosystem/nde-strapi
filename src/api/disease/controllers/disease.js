"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

/**
 * Custom disease controller
 *
 * This controller extends Strapi's default controller to ensure that all
 * disease API responses include properly populated nested data (images,
 * categories in link items) and handle both published and draft content.
 */
module.exports = createCoreController("api::disease.disease", ({ strapi }) => ({
  /**
   * Helper method: Get population configuration
   *
   * Defines what related data should be fetched when querying diseases.
   *
   * @returns Population configuration object
   */
  getPopulateConfig() {
    return {
      // Populate the main disease image (media field)
      image: true,

      // For the 'contacts' component array, populate nested fields
      contacts: {
        populate: {
          image: true,
          categories: true,
        },
      },

      // For the 'externalLinks' component array, populate nested fields
      externalLinks: {
        populate: {
          image: true,
          categories: true,
        },
      },
    };
  },

  /**
   * Helper method: Build query options
   *
   * Constructs the complete query options object that will be passed to
   * Strapi's entity service.
   *
   * @param {Object} ctx - Context object containing request data
   * @param {Object} additionalOptions - Any extra options to merge in
   * @returns {Object} Complete query options for entityService
   */
  async buildQueryOptions(ctx, additionalOptions = {}) {
    // Sanitize the incoming query to remove dangerous parameters
    const sanitizedQuery = await this.sanitizeQuery(ctx);

    // Get population configuration
    const populateConfig = this.getPopulateConfig();

    // Build the base options object
    const options = {
      ...sanitizedQuery,
      populate: populateConfig,
      ...additionalOptions,
    };

    // Handle draft/published content state
    if (ctx.query.publicationState === "preview") {
      options.publicationState = "preview"; // Show both published and draft content
    }
    // If no publicationState is specified, Strapi defaults to published-only
    return options;
  },

  /**
   * Find Method - Get multiple diseases
   *
   * @param {Object} ctx - Context object
   * @returns {Object} Transformed API response with populated data
   */
  async find(ctx) {
    // Build query options
    const options = await this.buildQueryOptions(ctx);

    // Fetch multiple disease records using Strapi's entity service
    const entities = await strapi.entityService.findMany(
      "api::disease.disease",
      options,
    );

    // Sanitize the output to remove any sensitive data
    const sanitizedResults = await this.sanitizeOutput(entities, ctx);

    // Transform the results into Strapi's standard API response format
    return this.transformResponse(sanitizedResults);
  },

  /**
   * FindOne Method - Get single disease
   *
   * @param {Object} ctx - Context object
   * @returns {Object} Transformed API response with populated data
   */
  async findOne(ctx) {
    // Extract the disease ID from the URL parameters
    const { id } = ctx.params;

    // Build query options
    const options = await this.buildQueryOptions(ctx);

    // Fetch a single disease record by ID using Strapi's entity service
    const entity = await strapi.entityService.findOne(
      "api::disease.disease",
      id,
      options,
    );

    // Sanitize the output to remove any sensitive data
    const sanitizedResult = await this.sanitizeOutput(entity, ctx);

    // Transform the result into Strapi's standard API response format
    return this.transformResponse(sanitizedResult);
  },
}));
