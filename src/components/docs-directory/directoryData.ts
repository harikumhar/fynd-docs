export type DocsDirectoryLink = {
  name: string;
  description: string;
  icon: string;
  href?: string;
  external?: boolean;
};

export type DocsDirectorySection = {
  title: string;
  links: DocsDirectoryLink[];
};

export const docsDirectorySections: DocsDirectorySection[] = [
  {
    title: 'Commerce',
    links: [
      {
        name: 'Fynd Commerce',
        description: 'Get started, understand the basics, or find in-depth articles and tutorials',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/064_6718dbc43109a762d51ba2db_ad2583a101d7ff31e41fa7e2fffafe1c_FCP.svg',
        href: 'https://platform.fynd.com/help/',
        external: true,
      },
      {
        name: 'Fynd AI PIM',
        description: 'Product information management',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/078_6839cf47a701531a0637a36a_PIM.svg',
        href: 'https://documentation.fynd.com/ai-pim',
        external: true,
      },
      {
        name: 'Fynd Konnect',
        description: 'Ready-to-use integrations',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/079_6839cf5df0622f781a4c1e78_Konnect.svg',
        href: 'https://documentation.fynd.com/konnect',
        external: true,
      },
      {
        name: 'Fynd Engage',
        description: 'Customer engagement and loyalty',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/080_6839cf75ac9ba3c7b1838b56_Engage.svg',
        href: 'https://documentation.fynd.com/engage/docs/introduction',
        external: true,
      },
      {
        name: 'Fynd Partners',
        description: 'Tools and resources',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/081_6839cf870b7ec83ab0e03b6e_Partners.svg',
        href: '/partners/commerce/',
      },
      {
        name: 'Store OS',
        description: 'All in-store operations',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/093_693bb3265250096d24418380_StoreOS.svg',
        href: 'https://documentation.fynd.com/commerce/docs/store-os/overview',
        external: true,
      },
      {
        name: 'Fynd Logistics',
        description: 'Multi-courier shipping management',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/098_6a1d2aa8985611af07cb2291_ChatGPT_Image_Jun_1__2026__12_15_38_PM.png',
        href: 'https://documentation.fynd.com/logistics/docs/introduction/about-fynd-logistics',
        external: true,
      },
      {
        name: 'Fynd WMS',
        description: 'Warehouse management system',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/082_6839cfb7955ca1f70cadbe8b_WMS.svg',
      },
      {
        name: 'Fynd TMS',
        description: 'Transport and last-mile fleet management system',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/065_6718dbc53109a762d51ba313_6a1ebca47f92bacabd1e8c204823b890_Fynd_TMS.svg',
      },
    ],
  },
  {
    title: 'AI',
    links: [
      {
        name: 'Kaily',
        description: 'AI-powered chatbots for websites',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/076_6718dbc63109a762d51ba41b_ccd46e8cc29bcdae69d73853f49585a2_CoPilot.svg',
        href: 'https://docs.copilot.live/',
        external: true,
      },
      {
        name: 'Zenith',
        description: 'Ecommerce product recommendations',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/066_6718dbc53109a762d51ba317_Zenith.svg',
        href: 'https://platform.fynd.com/help/docs/extensions/available-extensions/product-recommendation',
        external: true,
      },
    ],
  },
  {
    title: 'Media',
    links: [
      {
        name: 'Pixelbin',
        description: 'AI-powered image editing suite',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/067_6718dbc53109a762d51ba32b_1705ac8d40ee408f6f1a3956bfb841b9_Pixelbin.svg',
        href: 'https://www.pixelbin.io/docs/',
        external: true,
      },
      {
        name: 'GlamAR',
        description: 'AR and VR solutions',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/068_6718dbc53109a762d51ba34b_0a7c62c65886f8405740ffeda55f4baf_GlamAR.svg',
        href: 'https://www.glamar.io/docs/introduction/',
        external: true,
      },
    ],
  },
  {
    title: 'Data ops',
    links: [
      {
        name: 'Boltic',
        description: 'Enterprise-grade data ops platform and workflow builder',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/069_6718dbc53109a762d51ba36f_7e103aecb613a6fc38a3a013342bccb6_Boltic.svg',
        href: 'https://docs.boltic.io/',
        external: true,
      },
    ],
  },
  {
    title: 'Health',
    links: [
      {
        name: 'Gauze',
        description: 'AI-powered automated healthcare solutions',
        icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/077_672c5439b6bcb7e0f17fc66b_38d90d29873ce70566280edb44ec5a95_Gauze.svg',
        href: 'https://docs.gauze.md/',
        external: true,
      },
    ],
  },
];
