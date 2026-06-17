
type DevelopmentKitCard = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

const developmentKitCards: DevelopmentKitCard[] = [
  {
    title: 'Application SDK',
    description: 'Access customer facing data and build unique storefront experience',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/048_69a54c83dcda5dd2fde2e9f7_Open_APIs__SDKs__and_data.png',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/application/client-libraries',
  },
  {
    title: 'Platform SDK',
    description: 'Access and modify seller facing data of required Fynd platform company',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/047_69a54c835e1b9e88b957708f_Embed_into_any_store.png',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/platform/client-libraries',
  },
  {
    title: 'Partner SDK',
    description: 'Access partner panel data to automate operations',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/046_69a54c8327a82770acefdf5a_One_time_website_setup.png',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/partner/client-libraries',
  },
  {
    title: 'Webhook events',
    description: 'Stay in sync with store data and perform an action after a specific event occurs in the store',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/045_69a54c831b12160bb86ffd4a_More_Confident_purchase.png',
    href: 'https://docs.fynd.com/partners/commerce/webhooks/latest/company',
  },
];

export function CommerceDevelopmentKit() {
  return (
    <section className="commerce-development-kit" aria-labelledby="commerce-development-kit-title">
      <div className="commerce-development-kit__page-padding">
        <div className="fds__container">
          <div className="commerce-development-kit__content">
            <div className="commerce-development-kit__header">
              <h2 className="commerce-development-kit__title" id="commerce-development-kit-title">
                Build fast with Fynd Development Kit
              </h2>
              <p className="commerce-development-kit__description">
                Accelerate development, testing and deployment with our suite of tools
              </p>
            </div>

            <div className="commerce-development-kit__cards">
              {developmentKitCards.map((card) => (
                <article className="commerce-development-kit__card" key={card.title}>
                  <img className="commerce-development-kit__icon" src={card.imageSrc} alt="" loading="lazy" />
                  <h3 className="commerce-development-kit__card-title">{card.title}</h3>
                  <p className="commerce-development-kit__card-description">{card.description}</p>
                  <a className="fynd__button fynd__button-secondary" href={card.href} target="_blank" rel="noreferrer">
                    Learn more
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
