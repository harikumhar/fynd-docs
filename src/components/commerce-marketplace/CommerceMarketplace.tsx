
type MarketplaceItem = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  imageAlt: string;
};

const marketplaceItems: MarketplaceItem[] = [
  {
    title: 'Extension Marketplace',
    description: 'Build your commerce extension and list it on our Extension Marketplace',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/040_69a54b8dc32ddbbbd0e0a6d3_Theme_Marketplace.avif',
    href: 'https://extensions.fynd.com/',
    imageAlt: '',
  },
  {
    title: 'Theme Marketplace',
    description: 'Create stunning ecommerce themes and list them on our Theme Marketplace',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/041_69a54b8dea31d88d001f1eec_Extension_Marketplace.avif',
    href: 'https://themes.fynd.com/',
    imageAlt: '',
  },
];

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3981 10.0025L6.95013 5.55483C6.79907 5.40359 6.72172 5.21349 6.71808 4.98453C6.71462 4.75576 6.79197 4.5622 6.95013 4.40386C7.10847 4.2457 7.3003 4.16663 7.52561 4.16663C7.75093 4.16663 7.94275 4.2457 8.10109 4.40386L13.0088 9.31158C13.1109 9.41387 13.183 9.5217 13.225 9.63509C13.2671 9.74847 13.2881 9.87096 13.2881 10.0025C13.2881 10.1341 13.2671 10.2566 13.225 10.37C13.183 10.4834 13.1109 10.5912 13.0088 10.6935L8.10109 15.6012C7.94985 15.7523 7.75975 15.8296 7.5308 15.8333C7.30202 15.8367 7.10847 15.7594 6.95013 15.6012C6.79197 15.4429 6.71289 15.2511 6.71289 15.0257C6.71289 14.8004 6.79197 14.6086 6.95013 14.4503L11.3981 10.0025Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CommerceMarketplace() {
  return (
    <section className="commerce-marketplace" aria-labelledby="commerce-marketplace-title">
      <div className="commerce-marketplace__page-padding">
        <div className="fds__container">
          <div className="commerce-marketplace__content">
            <div className="commerce-marketplace__header">
              <h2 className="commerce-marketplace__title" id="commerce-marketplace-title">
                Solutions Marketplace
              </h2>
              <p className="commerce-marketplace__description">
                Easily sell your solutions to Fynd Platform sellers using our Extensions and Themes marketplace
              </p>
            </div>

            <div className="commerce-marketplace__rows">
              {marketplaceItems.map((item, index) => {
                const isReversed = index % 2 === 1;

                return (
                  <article
                    className={[
                      'commerce-marketplace__row',
                      isReversed ? 'commerce-marketplace__row--reversed' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    key={item.title}
                  >
                    <div className="commerce-marketplace__text">
                      <div className="commerce-marketplace__copy">
                        <h3 className="commerce-marketplace__row-title">{item.title}</h3>
                        <p className="commerce-marketplace__row-description">{item.description}</p>
                      </div>
                      <a className="fynd__button fynd__button-primary" href={item.href} target="_blank" rel="noreferrer">
                        <span>Learn more</span>
                        <span className="fynd__button-icon" aria-hidden="true">
                          <ChevronRightIcon />
                        </span>
                      </a>
                    </div>

                    <div className="commerce-marketplace__image-wrap">
                      <img className="commerce-marketplace__image" src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
