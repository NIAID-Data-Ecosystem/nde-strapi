# Strapi Content Management Overview
This section outlines the content types and their relationships used in the NIAID Data Ecosystem portal.


## Collection Types

### Category

**Purpose**: Organizes content across the portal into meaningful groups.

#### Fields

| Field       | Type                    | Required | Description                                                  |
|-------------|-------------------------|----------|--------------------------------------------------------------|
| `name`      | `string`                | ✅        | Display name of the category.                               |
| `docs`      | Relation to `Doc`       | ❌        | Documentation pages associated with this category.          |
| `events`    | Relation to `Event`     | ❌        | Events grouped under this category.                         |
| `feature`   | Relation to `Featured`  | ❌        | Featured pages associated with this category.               |
| `news`      | Relation to `News`      | ❌        | News items assigned to this category.                       |
| `order`     | `number`                | ❌        | Used to determine display order of categories in lists.     |


---

### Doc

**Purpose**: Provides user-facing documentation, guides, and informational content for the portal.

#### Fields

| Field         | Type                   | Required  | Description                                                                      |
|---------------|------------------------|-----------|----------------------------------------------------------------------------------|
| `name`        | `string`               | ✅        | Title of the documentation page.                                               |
| `subtitle`    | `string`               | ❌        | Secondary heading or summary shown below the title.                            |
| `description` | `rich text`            | ❌        | Main content body, supporting Markdown formatting.                             |
| `slug`        | `UID`                  | ❌        | Auto-generated URL path where the documentation page is accessible.            |
| `category`    | Relation to `Category` | ❌        | One or more categories the page is associated with.                            |
| `order`       | `number`               | ❌        | Determines the position of this page relative to others in category listings.  |


---

### Event

**Purpose**: Information about events related to the NIAID Data Ecosystem.

#### Fields

| Field              | Type                   | Required  | Description                                                                           |
|--------------------|------------------------|-----------|---------------------------------------------------------------------------------------|
| `name`             | `string`               | ✅        | Title of the event.                                                                 |
| `shortDescription` | `string`               | ✅        | Short content to display as a preview in homepage cards.                            |
| `slug`             | `UID`                  | ✅        | Auto-generated URL path where the event long content is accessible.                 |
| `subtitle`         | `string`               | ❌        | Secondary heading or summary shown below the title.                                 |
| `eventDate`        | `date`                 | ❌        | Date when the event takes place.                                                    |
| `description`      | `rich text`            | ❌        | Main content body, supporting Markdown formatting.                                  |
| `image`            | `media`                | ❌        | Uploads and links to one media asset (e.g., JPG, PNG, SVG) to be used as thumbnail. |
| `categories`       | Relation to `Category` | ❌        | One or more categories the event is associated with.                                |

---

### News

**Purpose**: Updates about features and releases related to the NIAID Data Ecosystem.

#### Fields

| Field              | Type                   | Required  | Description                                                                           |
|--------------------|------------------------|-----------|---------------------------------------------------------------------------------------|
| `name`             | `string`               | ✅        | Title of the news item.                                                             |
| `shortDescription` | `string`               | ✅        | Short content to display as a preview in homepage cards.                            |
| `slug`             | `UID`                  | ✅        | Auto-generated URL path where the news long content is accessible.                  |
| `subtitle`         | `string`               | ❌        | Secondary heading or summary shown below the title.                                 |
| `description`      | `rich text`            | ❌        | Main content body, supporting Markdown formatting.                                  |
| `image`            | `media`                | ❌        | Uploads and links to one media asset (e.g., JPG, PNG, SVG) to be used as thumbnail. |
| `categories`       | Relation to `Category` | ❌        | One or more categories the news item is associated with.                            |
---

### Notice

**Purpose**: Displays alerts about downtimes or other issues that may impact users. Notices appear in a banner across the top of all portal pages.

#### Fields

| Field                | Type                   | Required  | Description                                                                                |
|----------------------|------------------------|-----------|--------------------------------------------------------------------------------------------|
| `heading`            | `string`               | ✅        | Short title displayed in the notice banner.                                              |
| `description`        | `rich text`            | ✅        | Full message content. Supports Markdown formatting.                                      |
| `status`             | `enum`                 | ✅        | Defines the type of notice (e.g., info, error, warning, success). Defaults to `warning`. |
| `isActive`           | `boolean`              | ✅        |  Toggle to show or hide the notice on the portal. Defaults to `true`.                    |
| `affectedRepository` | `string`               | ❌        | Optional name of the repository affected by the issue.                                   |



## Relevant Strapi documentation
- [Creating content-types](https://docs-v4.strapi.io/user-docs/content-type-builder/creating-new-content-type)
- [Configuring fields for content-types](https://docs-v4.strapi.io/user-docs/content-type-builder/configuring-fields-content-type)
- [Editing content-types](https://docs-v4.strapi.io/user-docs/content-type-builder/managing-content-types)
