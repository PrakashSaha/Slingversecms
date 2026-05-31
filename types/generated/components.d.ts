import type { Schema, Struct } from '@strapi/strapi';

export interface SharedMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    displayName: 'menu-link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
    icon: 'twitter';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'X', 'LinkedIn', 'Instagram', 'YouTube', 'GitHub', 'Website']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.menu-link': SharedMenuLink;
      'shared.social-link': SharedSocialLink;
    }
  }
}
