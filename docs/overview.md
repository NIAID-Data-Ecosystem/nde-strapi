# Strapi Content Management Overview
The **NIAID Data Ecosystem** contains content that for simplicity and consistency, is managed by the authors/editors using the management system (CMS), [Strapi](https://docs.strapi.io/). This documentation outlines how Strapi is used within the NIAID Data Ecosystem to manage content across the platform.


```
                        +---------------------------+
                        |     Frontend Website      |
                        +---------------------------+
                                     |
               +---------------------+----------------------+
               |                                            |
+----------------------------+               +----------------------------+
|  NDE API                   |               |  Strapi CMS                |
|  Aggregates metadata from  |               |  Created + managed by      |
|  selected sources.         |               |  content editors.          |
|  ex: Datasets,             |               |  ex: Updates, About,       |
|  Computational tools       |               |  Knowledge center docs     |
+----------------------------+               +----------------------------+
               |                                            |
               |                                            |
+----------------------------+               +----------------------------+
|  External Data Sources     |               |  External Data Sources     |
| - Dataverse                |               | via Admin UI               |
| - Zenodo                   |               +----------------------------+
| - Other APIs               |
+----------------------------+
```



## Content in the NIAID Data Ecosystem
The NIAID Data Ecosystem features two primary categories of content:

1. Aggregated Data (programmatically retrieved via the [NIAID Data Ecosystem API](https://api.data.niaid.nih.gov/))

    This data is not managed by Strapi, but instead aggregated from various external sources via APIs and used in the frontend search for metadata. This content is dynamic and updated as data is added/updated in the NDE API. The NDE API-driven content provides searchable and filterable data (datasets, computational tools).


2. CMS-Managed Content (authored and updated via Strapi)

    This content is manually authored and curated, and complements the NIAID Data Ecosystem portal by providing context, explanations, and updates. The Strapi CMS content provides narrative and informational scaffolding around that data (help documentation, announcements, guides, etc).

## Purpose of the Strapi Instance
Strapi serves as the content management system (CMS) for the editorial content within the NIAID Data Ecosystem. This includes:

 - News and updates
 - Documentation pages
 - About content
 - Disease pages
 - etc.

It provides a user-friendly interface for content editors to update and manage site content without needing to touch source code.
