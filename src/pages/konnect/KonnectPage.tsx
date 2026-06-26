import { MarketingFooter } from '../../components/marketing-footer';
import { PageMetadata } from '../../components/page-metadata';
import { konnectPageMetadata } from '../../pageMetadata';
import './KonnectPage.css';

const DOC_IMAGES_CDN = 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images';

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M11.3981 10.0025L6.95013 5.55483C6.79907 5.40359 6.72172 5.21349 6.71808 4.98453C6.71462 4.75576 6.79197 4.5622 6.95013 4.40386C7.10847 4.2457 7.3003 4.16663 7.52561 4.16663C7.75093 4.16663 7.94275 4.2457 8.10109 4.40386L13.0088 9.31158C13.1109 9.41387 13.183 9.5217 13.225 9.63509C13.2671 9.74847 13.2881 9.87096 13.2881 10.0025C13.2881 10.1341 13.2671 10.2566 13.225 10.37C13.183 10.4834 13.1109 10.5912 13.0088 10.6935L8.10109 15.6012C7.94985 15.7523 7.75975 15.8296 7.5308 15.8333C7.30202 15.8367 7.10847 15.7594 6.95013 15.6012C6.79197 15.4429 6.71289 15.2511 6.71289 15.0257C6.71289 14.8004 6.79197 14.6086 6.95013 14.4503L11.3981 10.0025Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PointerArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M2.9995 10.9952C2.71964 10.9952 2.47976 11.0951 2.28986 11.285C2.09995 11.4749 2 11.7148 2 11.9947C2 12.2745 2.09995 12.5144 2.28986 12.7043C2.47976 12.8942 2.71964 12.9942 2.9995 12.9942H18.6017L14.2939 17.302C14.094 17.5019 13.994 17.7318 14.004 18.0017C14.004 18.2715 14.1039 18.5014 14.2939 18.7013C14.4938 18.9012 14.7236 19.0012 14.9935 19.0111C15.2634 19.0211 15.4933 18.9212 15.6932 18.7213L21.7301 12.6943C21.8301 12.5944 21.9 12.4844 21.94 12.3645C21.98 12.2445 22 12.1246 22 11.9947C22 11.8647 21.98 11.7348 21.94 11.6248C21.9 11.5149 21.8301 11.405 21.7301 11.305L15.7231 5.28801C15.5232 5.08811 15.2834 4.98816 15.0035 4.98816C14.7236 4.98816 14.4938 5.08811 14.2939 5.28801C14.1139 5.48791 14.024 5.72779 14.024 5.99765C14.024 6.26752 14.1139 6.4974 14.3038 6.68731L18.6017 10.9952H2.9995Z"
        fill="currentColor"
      />
    </svg>
  );
}

const konnectChannelCards = [
  {
    title: 'Marketplaces & Webstores channels',
    description:
      'Discover detailed guides and best practices for connecting to leading marketplaces. Effortlessly sync catalogs, update pricing, manage orders, and track returns with Fynd Konnect’s growing list of marketplace channels',
    href: 'https://documentation.fynd.com/konnect/channels/marketplaces-webstores',
  },
  {
    title: 'Warehousing and ERP channels',
    description:
      'Discover how Fynd Konnect connects Warehousing & ERP partners like Unicommerce, Increff, and Vinculum to Fynd Commerce, enabling efficient management of inventory, orders, catalog, and returns',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms',
  },
  {
    title: 'Point of sale (POS) channels',
    description:
      'Seamlessly connect your terminal and cloud POS solutions, such as Ginesys, FyndPOS, Wondersoft, WizApp, and LogicERP, to Fynd Commerce using Fynd Konnect',
    href: 'https://documentation.fynd.com/konnect/channels/pos',
  },
] as const;

const konnectApiLinks = [
  {
    label: 'Authorization',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/authorization/generate-access-token',
  },
  {
    label: 'Catalog',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/catalog/get-product-listings',
  },
  {
    label: 'Pricing',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/pricing/put-update-price',
  },
  {
    label: 'Inventory',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/inventory/put-update-inventory',
  },
  {
    label: 'Orders',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/orders/get-orders',
  },
  {
    label: 'Returns',
    href: 'https://documentation.fynd.com/konnect/channels/erp-wms/api-documentation/returns/get-returns',
  },
] as const;

const konnectAnnouncements = [
  {
    title: 'Fynd Konnect <> FirstCry',
    description:
      'FirstCry is India’s go-to destination for baby, kids, and maternity essentials. With Fynd Konnect, brands can list and manage inventory seamlessly, automate returns, and enjoy real-time order sync to grow in the parenting category without tech hurdles',
    image: `${DOC_IMAGES_CDN}/68c3e581ba905e7b7e533760_firstcry.avif`,
    href: 'https://documentation.fynd.com/konnect/channels/marketplaces-webstores/firstcry',
  },
  {
    title: 'Fynd Konnect <> Trendyol',
    description:
      'Connect to Turkey’s largest marketplace and reach customers across Europe and the GCC markets. With Fynd Konnect, streamline your operations, from bulk product mapping to inventory sync, order management, and returns, for global expansion made simple',
    image: `${DOC_IMAGES_CDN}/68c3e5815598397aaef51404_trendyol.avif`,
    href: 'https://documentation.fynd.com/konnect/channels/marketplaces-webstores/trendyol',
  },
  {
    title: 'Fynd Konnect <> Meesho',
    description:
      'Meesho enables sellers to tap into a diverse customer base through social commerce with a mobile-first experience. Fynd Konnect simplifies cataloging, pricing, and order management on Meesho — giving you a single dashboard to grow at scale',
    image: `${DOC_IMAGES_CDN}/68c3e581560d2e53062560d7_meesho.avif`,
    href: 'https://documentation.fynd.com/konnect/channels/marketplaces-webstores/meesho',
  },
  {
    title: 'Fynd Konnect <> Shopee',
    description:
      'Shopee is Southeast Asia’s go-to e-commerce platform. Use Fynd Konnect to manage your catalog, sync inventory and orders in real-time, and simplify multi-store operations — all from a single dashboard',
    image: `${DOC_IMAGES_CDN}/68c3e58165ca5372481e7562_shopee.avif`,
    href: 'https://documentation.fynd.com/konnect/channels/marketplaces-webstores/shopee',
  },
] as const;

export function KonnectPage() {
  return (
    <div className="konnect-page">
      <PageMetadata metadata={konnectPageMetadata} />
      <main className="konnect-page__main">
        <section className="konnect-hero" aria-labelledby="konnect-hero-title">
          <div className="konnect-hero__page-padding">
            <div className="fds__container">
              <div className="konnect-hero__layout">
                <div className="konnect-hero__copy">
                  <div className="konnect-hero__header">
                    <div className="konnect-hero__eyebrow">
                      <span className="konnect-hero__eyebrow-dot" aria-hidden="true" />
                      <span>Konnect Developer Portal</span>
                    </div>
                    <div className="konnect-hero__text">
                      <h1 className="konnect-hero__title" data-text-style="heading-xl" id="konnect-hero-title">
                        Your Commerce <br />
                        fully connected
                      </h1>
                      <p className="konnect-hero__description" data-text-style="body-l-regular">
                        With step-by-step tutorials, detailed API references, and best practices, explore how Fynd
                        Konnect empowers merchants to achieve scalability, enhance efficiency, and drive success across
                        diverse sales channels
                      </p>
                    </div>
                  </div>
                  <div className="konnect-hero__actions">
                    <a
                      className="fynd__button fynd__button-secondary-light konnect-hero__button"
                      href="https://documentation.fynd.com/konnect/docs/introduction"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Explore docs</span>
                      <span className="fynd__button-icon konnect-hero__button-icon">
                        <ChevronIcon />
                      </span>
                    </a>
                    <a
                      className="fynd__button fynd__button-primary-light konnect-hero__button"
                      href="https://documentation.fynd.com/konnect/apis/konnect"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>API references</span>
                      <span className="fynd__button-icon konnect-hero__button-icon">
                        <ChevronIcon />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="konnect-hero__media">
                  <div className="konnect-hero__video-wrap">
                    <video
                      className="konnect-hero__video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload noremoteplayback noplaybackrate"
                      preload="metadata"
                    >
                      <source
                        src="https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/original/webflow-team/konnect_dev_portal/_Hero-section-hevc-safari.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/original/webflow-team/konnect_dev_portal/_Hero-section-vp9-chrome.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="konnect-stack" aria-labelledby="konnect-stack-title">
          <div className="konnect-stack__page-padding">
            <div className="fds__container">
              <div className="konnect-stack__content">
                <div className="konnect-stack__header">
                  <div className="konnect-stack__text">
                    <h2 className="konnect-stack__title" data-text-style="heading-l" id="konnect-stack-title">
                      Power your Retail Stack with Fynd Konnect
                    </h2>
                    <p className="konnect-stack__description" data-text-style="body-l-regular">
                      Bring your entire retail ecosystem together with Fynd Konnect’s ready-to-use channels for leading
                      marketplaces, storefronts, ERPs, WMS, and POS systems.
                    </p>
                  </div>
                </div>

                <div className="konnect-stack__media">
                  <div className="konnect-stack__video-wrap">
                    <video
                      className="konnect-stack__video"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controlsList="nodownload noremoteplayback noplaybackrate"
                      preload="metadata"
                    >
                      <source
                        src="https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/original/webflow-team/konnect_dev_portal/_Mobile-Card_Count-hevc-safari.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/original/webflow-team/konnect_dev_portal/_Mobile-Card_Count-hevc-safari.webm"
                        type="video/webm"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="konnect-docs" aria-labelledby="konnect-docs-title">
          <div className="konnect-docs__page-padding">
            <div className="fds__container">
              <div className="konnect-docs__content">
                <div className="konnect-docs__header">
                  <div className="konnect-docs__text">
                    <h2 className="konnect-docs__title" data-text-style="heading-l" id="konnect-docs-title">
                      Konnect documentation &amp; APIs
                    </h2>
                    <p className="konnect-docs__description" data-text-style="body-l-regular">
                      Explore comprehensive documentation, API reference, and step-by-step guides to seamlessly connect
                      marketplaces, webstores, POS systems, and more. Build smarter, faster, and better
                    </p>
                  </div>
                </div>

                <div className="konnect-docs__body">
                  <div className="konnect-docs__cards">
                    {konnectChannelCards.map((card) => (
                      <a className="konnect-docs__card" href={card.href} key={card.href}>
                        <img
                          className="konnect-docs__card-icon"
                          src={`${DOC_IMAGES_CDN}/688b59d61d17b6933236f59b_7931ab1650b867a1ddc2f7fee241a888_Frame_2147225371.png`}
                          alt=""
                          loading="lazy"
                        />
                        <span className="konnect-docs__card-text">
                          <span className="konnect-docs__card-title" data-text-style="body-xl-medium">
                            {card.title}
                          </span>
                          <span className="konnect-docs__card-description" data-text-style="body-m-regular">
                            {card.description}
                          </span>
                        </span>
                        <span className="konnect-docs__card-arrow" aria-hidden="true">
                          <PointerArrowIcon />
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="konnect-docs__api-column">
                    <picture className="konnect-docs__api-picture">
                      <source
                        media="(max-width: 640px)"
                        srcSet={`${DOC_IMAGES_CDN}/68c3c7b58fa52100d6073144_apis-image-mobile.avif`}
                      />
                      <source
                        media="(max-width: 991px)"
                        srcSet={`${DOC_IMAGES_CDN}/68c3c7b5c0311dcaa90ec009_apis-image.avif`}
                      />
                      <img
                        className="konnect-docs__api-image"
                        src={`${DOC_IMAGES_CDN}/68c3c7b5c0311dcaa90ec009_apis-image.avif`}
                        alt=""
                        loading="lazy"
                      />
                    </picture>

                    <div className="konnect-docs__api-panel">
                      <div className="konnect-docs__api-intro">
                        <div className="konnect-docs__api-copy">
                          <h3 className="konnect-docs__api-title" data-text-style="heading-s">
                            Our APIs
                          </h3>
                          <p className="konnect-docs__api-description" data-text-style="body-m-regular">
                            Dive into our interactive API Playground to explore and test REST API capabilities
                          </p>
                        </div>
                        <a
                          className="konnect-docs__api-link konnect-docs__api-link--hug"
                          href="https://documentation.fynd.com/konnect/apis/konnect"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>API Playground</span>
                          <span className="konnect-docs__api-link-icon">
                            <ChevronIcon />
                          </span>
                        </a>
                      </div>

                      <div className="konnect-docs__divider" />

                      <div className="konnect-docs__api-copy">
                        <h3 className="konnect-docs__api-title" data-text-style="heading-s">
                          Explore API docs
                        </h3>
                        <p className="konnect-docs__api-description" data-text-style="body-m-regular">
                          A unified set of APIs to securely manage product-master, pricing, inventory, orders, and
                          returns across your ERP/WMS/POS systems
                        </p>
                      </div>

                      <div className="konnect-docs__api-links">
                        {konnectApiLinks.map((link) => (
                          <a className="konnect-docs__api-link" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                            <span>{link.label}</span>
                            <span className="konnect-docs__api-link-icon">
                              <ChevronIcon />
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="konnect-announcements" aria-labelledby="konnect-announcements-title">
          <div className="konnect-announcements__header-pad">
            <div className="fds__container">
              <div className="konnect-announcements__header">
                <div className="konnect-announcements__text">
                  <h2
                    className="konnect-announcements__title"
                    data-text-style="heading-l"
                    id="konnect-announcements-title"
                  >
                    Announcements
                  </h2>
                  <p className="konnect-announcements__description" data-text-style="body-l-regular">
                    Stay updated with our latest features and channels
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="konnect-announcements__rail" aria-label="Latest Konnect announcements">
            <div className="konnect-announcements__rail-container">
              <div className="konnect-announcements__cards">
                {konnectAnnouncements.map((announcement) => (
                  <article className="konnect-announcements__card" key={announcement.href}>
                    <div className="konnect-announcements__image-wrap">
                      <img className="konnect-announcements__image" src={announcement.image} alt="" loading="lazy" />
                      <span className="konnect-announcements__badge">New Channel</span>
                    </div>
                    <div className="konnect-announcements__card-content">
                      <h3 className="konnect-announcements__card-title" data-text-style="body-xl-medium">
                        {announcement.title}
                      </h3>
                      <p className="konnect-announcements__card-description" data-text-style="body-m-regular">
                        {announcement.description}
                      </p>
                      <div className="konnect-announcements__card-actions">
                        <a className="fynd__button fynd__button-secondary konnect-announcements__button" href={announcement.href}>
                          <span>Explore docs</span>
                          <span className="fynd__button-icon konnect-announcements__button-icon">
                            <ChevronIcon />
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
