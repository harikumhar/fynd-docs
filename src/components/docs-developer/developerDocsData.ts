export type DeveloperDocsCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
  external?: boolean;
};

export const developerDocsCards: DeveloperDocsCard[] = [
  {
    title: 'Developer portal',
    description:
      'Join the Fynd partner ecosystem and code powerful solutions with full access to APIs, SDKs, and our entire platform toolkit',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/074_6718dbc63109a762d51ba3ea_Partner_portal.svg',
    href: 'https://partners.fynd.com',
    external: true,
  },
  {
    title: 'Fynd Community',
    description:
      'Join a community of developers, designers, and more to collaborate, discuss, and solve problems together',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/075_6718dbc63109a762d51ba3f5_Fynd_Community.svg',
    href: 'https://community.fynd.com/c/fynd-platform/5',
    external: true,
  },
];
