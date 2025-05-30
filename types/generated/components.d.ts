import type { Attribute, Schema } from '@strapi/strapi';

export interface IntegrationPageCardBasic extends Schema.Component {
  collectionName: 'components_integration_page_card_basics';
  info: {
    description: '';
    displayName: 'CardBasic';
  };
  attributes: {
    additionalInfo: Attribute.RichText;
    content: Attribute.RichText & Attribute.Required;
    icon: Attribute.Media<'images'>;
    isRequired: Attribute.Boolean;
    tabItems: Attribute.Component<'integration-page.tab-item', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationPageList extends Schema.Component {
  collectionName: 'components_integration_page_lists';
  info: {
    description: '';
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.RichText;
    items: Attribute.Component<'integration-page.list-item', true>;
    name: Attribute.String;
  };
}

export interface IntegrationPageListItem extends Schema.Component {
  collectionName: 'components_integration_page_list_items';
  info: {
    description: '';
    displayName: 'listItem';
    icon: 'bulletList';
  };
  attributes: {
    description: Attribute.RichText;
    isRequired: Attribute.Boolean;
  };
}

export interface IntegrationPageSectionBasic extends Schema.Component {
  collectionName: 'components_integration_page_section_basics';
  info: {
    description: '';
    displayName: 'SectionBasic';
    icon: 'apps';
  };
  attributes: {
    description: Attribute.RichText;
    slug: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationPageSectionWithList extends Schema.Component {
  collectionName: 'components_integration_page_section_with_lists';
  info: {
    description: '';
    displayName: 'SectionWithList';
    icon: '';
  };
  attributes: {
    description: Attribute.RichText;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationPageTabItem extends Schema.Component {
  collectionName: 'components_integration_page_tab_items';
  info: {
    description: '';
    displayName: 'tabItem';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationPageTabPanels extends Schema.Component {
  collectionName: 'components_integration_page_tab_panels';
  info: {
    description: '';
    displayName: 'TabPanels';
  };
  attributes: {
    cards: Attribute.Component<'integration-page.card-basic', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface IntegrationPageTabs extends Schema.Component {
  collectionName: 'components_integration_page_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    description: Attribute.RichText;
    panels: Attribute.Component<'integration-page.tab-panels', true>;
    slug: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'integration-page.card-basic': IntegrationPageCardBasic;
      'integration-page.list': IntegrationPageList;
      'integration-page.list-item': IntegrationPageListItem;
      'integration-page.section-basic': IntegrationPageSectionBasic;
      'integration-page.section-with-list': IntegrationPageSectionWithList;
      'integration-page.tab-item': IntegrationPageTabItem;
      'integration-page.tab-panels': IntegrationPageTabPanels;
      'integration-page.tabs': IntegrationPageTabs;
    }
  }
}
