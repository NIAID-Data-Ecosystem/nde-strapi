import type { Schema, Struct } from '@strapi/strapi';

export interface IntegrationPageCardBasic extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_card_basics';
  info: {
    description: '';
    displayName: 'CardBasic';
  };
  attributes: {
    additionalInfo: Schema.Attribute.RichText;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    isRequired: Schema.Attribute.Boolean;
    tabItems: Schema.Attribute.Component<'integration-page.tab-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntegrationPageList extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_lists';
  info: {
    description: '';
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'integration-page.list-item', true>;
    name: Schema.Attribute.String;
  };
}

export interface IntegrationPageListItem extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_list_items';
  info: {
    description: '';
    displayName: 'listItem';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    isRequired: Schema.Attribute.Boolean;
  };
}

export interface IntegrationPageSectionBasic extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_section_basics';
  info: {
    description: '';
    displayName: 'SectionBasic';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntegrationPageSectionWithList extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_section_with_lists';
  info: {
    description: '';
    displayName: 'SectionWithList';
    icon: '';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntegrationPageTabItem extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_tab_items';
  info: {
    description: '';
    displayName: 'tabItem';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntegrationPageTabPanels extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_tab_panels';
  info: {
    description: '';
    displayName: 'TabPanels';
  };
  attributes: {
    cards: Schema.Attribute.Component<'integration-page.card-basic', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface IntegrationPageTabs extends Struct.ComponentSchema {
  collectionName: 'components_integration_page_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    panels: Schema.Attribute.Component<'integration-page.tab-panels', true>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::link-category.link-category'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
    keywords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'integration-page.card-basic': IntegrationPageCardBasic;
      'integration-page.list': IntegrationPageList;
      'integration-page.list-item': IntegrationPageListItem;
      'integration-page.section-basic': IntegrationPageSectionBasic;
      'integration-page.section-with-list': IntegrationPageSectionWithList;
      'integration-page.tab-item': IntegrationPageTabItem;
      'integration-page.tab-panels': IntegrationPageTabPanels;
      'integration-page.tabs': IntegrationPageTabs;
      'shared.link-item': SharedLinkItem;
      'shared.seo': SharedSeo;
    }
  }
}
