import { MarketingFooter } from '../../components/marketing-footer';
import { PageMetadata } from '../../components/page-metadata';
import { aiPimDocsPageMetadata } from '../../pageMetadata';
import './AiPimDocsPage.css';

const DOC_IMAGES_CDN = 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images';

const aiPimDocCards = [
  {
    title: 'AI Enrichment',
    description:
      'Generates SEO-optimized product titles, rich descriptions, relevant keywords, and attribute values using AI, just from product images.',
    href: 'https://documentation.fynd.com/ai-pim/docs/dashboard/product-enrichment',
    icon: `${DOC_IMAGES_CDN}/688b1af3f729089d1c3f0a74_AI-Facial-Skin-Analysis.svg`,
  },
  {
    title: 'Flexible Taxonomy',
    description:
      'Customizes your PIM data structure to fit any product line or domain, allowing you to define attributes, hierarchies, and relationships as needed.',
    href: 'https://documentation.fynd.com/ai-pim/docs/taxonomy/single-attributes',
    icon: `${DOC_IMAGES_CDN}/688b1af3fb7caf1a9511f02a_Agile.svg`,
  },
  {
    title: 'Product Listing',
    description:
      'Explore how to create and manage products, assign related tasks, and track readiness to ensure your catalog is production-ready.',
    href: 'https://documentation.fynd.com/ai-pim/docs/product/spd',
    icon: `${DOC_IMAGES_CDN}/688b1be8f1d0a686a8e3ac8f_Product-listing.svg`,
  },
  {
    title: 'Rule Engine and Automation',
    description:
      'Checkout the no-code rule engine that lets you create smart "if-this-then-that" rules to tag, enrich content, and even apply AI image enhancements.',
    href: 'https://documentation.fynd.com/ai-pim/docs/settings/rules',
    icon: `${DOC_IMAGES_CDN}/688b1af35c288ecbde7dd502_Rule-Engine-Automation.svg`,
  },
  {
    title: 'Marketplace Transformation',
    description:
      'Converts your catalog for multiple platforms (e.g., Amazon, Myntra, Flipkart) with one click, ensuring correct formats and preventing listing issues.',
    href: 'https://documentation.fynd.com/ai-pim/docs/dashboard/transformations',
    icon: `${DOC_IMAGES_CDN}/688b1af3c25c527be7f7bcb8_Marketplace-transformation.svg`,
  },
  {
    title: 'Access control and Teams',
    description:
      'Manage catalogs with tasks and role-based permissions, enabling teams to collaborate, assign tasks, and track progress with full accountability.',
    href: 'https://documentation.fynd.com/ai-pim/docs/manage-account/overview',
    icon: `${DOC_IMAGES_CDN}/688b1af308e06ccb3a715682_access-control.svg`,
  },
] as const;

export function AiPimDocsPage() {
  return (
    <div className="ai-pim-docs-page">
      <PageMetadata metadata={aiPimDocsPageMetadata} />
      <main className="ai-pim-docs-page__main">
        <section className="ai-pim-docs-hero" aria-labelledby="ai-pim-docs-hero-title">
          <div className="ai-pim-docs-hero__page-padding">
            <div className="fds__container ai-pim-docs-hero__container">
              <div className="ai-pim-docs-hero__content">
                <div className="ai-pim-docs-hero__eyebrow">
                  <span className="ai-pim-docs-hero__eyebrow-dot" aria-hidden="true" />
                  <span>Documentation</span>
                </div>
                <div className="ai-pim-docs-hero__text">
                  <h1
                    className="ai-pim-docs-hero__title"
                    data-text-style="heading-l"
                    id="ai-pim-docs-hero-title"
                  >
                    AI PIM Documentation
                  </h1>
                  <p className="ai-pim-docs-hero__description" data-text-style="body-l-regular">
                    First time setup, management, configuration and user guide for all information
                    related to PIM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ai-pim-docs-directory" aria-label="AI PIM documentation topics">
          <div className="ai-pim-docs-directory__page-padding">
            <div className="fds__container">
              <div className="ai-pim-docs-directory__grid">
                {aiPimDocCards.map((card) => (
                  <article className="ai-pim-docs-directory__card" key={card.href}>
                    <img className="ai-pim-docs-directory__icon" src={card.icon} alt="" loading="lazy" />
                    <h3 className="ai-pim-docs-directory__card-title" data-text-style="body-xl-medium">
                      {card.title}
                    </h3>
                    <p className="ai-pim-docs-directory__card-description" data-text-style="body-m-regular">
                      {card.description}
                    </p>
                    <a className="ai-pim-docs-directory__learn-more" href={card.href} data-text-style="body-m-medium">
                      <span>Learn more</span>
                      <svg
                        className="ai-pim-docs-directory__learn-more-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M11.3981 10.0025L6.95013 5.55483C6.79907 5.40359 6.72172 5.21349 6.71808 4.98453C6.71462 4.75576 6.79197 4.5622 6.95013 4.40386C7.10847 4.2457 7.3003 4.16663 7.52561 4.16663C7.75093 4.16663 7.94275 4.2457 8.10109 4.40386L13.0088 9.31158C13.1109 9.41387 13.183 9.5217 13.225 9.63509C13.2671 9.74847 13.2881 9.87096 13.2881 10.0025C13.2881 10.1341 13.2671 10.2566 13.225 10.37C13.183 10.4834 13.1109 10.5912 13.0088 10.6935L8.10109 15.6012C7.94985 15.7523 7.75975 15.8296 7.5308 15.8333C7.30202 15.8367 7.10847 15.7594 6.95013 15.6012C6.79197 15.4429 6.71289 15.2511 6.71289 15.0257C6.71289 14.8004 6.79197 14.6086 6.95013 14.4503L11.3981 10.0025Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
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
