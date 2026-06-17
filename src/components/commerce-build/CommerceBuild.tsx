
type BuildAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

type BuildCard = {
  title: string;
  description: string;
  imageSrc: string;
  actions: BuildAction[];
};

const buildCards: BuildCard[] = [
  {
    title: 'Build Commerce Extensions',
    description: 'Create high-performance extensions to extend the core functionality of Fynd Platform stores',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/038_69a54500883dbc16a1377d1b_partner-image04.avif',
    actions: [
      {
        label: 'Get started',
        href: 'https://docs.fynd.com/partners/commerce/extension/general/get-started/',
        variant: 'primary',
      },
      {
        label: 'Build payment extension',
        href: 'https://docs.fynd.com/partners/commerce/extension/payments-doc/get-started/',
        variant: 'secondary',
      },
    ],
  },
  {
    title: 'Build Fynd Platform Themes',
    description:
      'Create high-speed, adaptable themes with FDK CLI in popular frontend technologies, including Vue.js and React',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/036_69a545001354bb86984795ac_partner-image03.avif',
    actions: [
      {
        label: 'Create new theme',
        href: 'https://docs.fynd.com/partners/commerce/themes-doc/get-started/',
        variant: 'primary',
      },
      {
        label: 'Customize existing theme',
        href: 'https://docs.fynd.com/partners/commerce/themes-doc/development/',
        variant: 'secondary',
      },
    ],
  },
  {
    title: 'Learn Fynd Platform',
    description:
      'Get acquainted with the features and capabilities of the Fynd Platform to enhance your ability to assist sellers',
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/039_69a54500f2656bb074f9320a_partner-image02.avif',
    actions: [
      {
        label: 'Learn more',
        href: 'https://documentation.fynd.com/commerce/docs/introduction/what-is-fp',
        variant: 'primary',
      },
    ],
  },
  {
    title: 'Go Headless',
    description: "Quickly and easily integrate Fynd Platform with your client's existing storefront on desired platforms",
    imageSrc:
      'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/037_69a545005eb103bdebc4d7d7_partner-image01.avif',
    actions: [
      {
        label: 'Learn more',
        href: 'https://docs.fynd.com/partners/commerce/headless/',
        variant: 'primary',
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3981 10.0025L6.95013 5.55483C6.79907 5.40359 6.72172 5.21349 6.71808 4.98453C6.71462 4.75576 6.79197 4.5622 6.95013 4.40386C7.10847 4.2457 7.3003 4.16663 7.52561 4.16663C7.75093 4.16663 7.94275 4.2457 8.10109 4.40386L13.0088 9.31158C13.1109 9.41387 13.183 9.5217 13.225 9.63509C13.2671 9.74847 13.2881 9.87096 13.2881 10.0025C13.2881 10.1341 13.2671 10.2566 13.225 10.37C13.183 10.4834 13.1109 10.5912 13.0088 10.6935L8.10109 15.6012C7.94985 15.7523 7.75975 15.8296 7.5308 15.8333C7.30202 15.8367 7.10847 15.7594 6.95013 15.6012C6.79197 15.4429 6.71289 15.2511 6.71289 15.0257C6.71289 14.8004 6.79197 14.6086 6.95013 14.4503L11.3981 10.0025Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getBuildActionClassName(variant: BuildAction['variant'] = 'secondary') {
  return ['fynd__button', variant === 'primary' ? 'fynd__button-primary' : 'fynd__button-secondary'].join(' ');
}

export function CommerceBuild() {
  return (
    <section className="commerce-build" aria-labelledby="commerce-build-title">
      <div className="commerce-build__heading-pad">
        <div className="fds__container">
          <div className="commerce-build__heading">
            <h2 className="commerce-build__title" id="commerce-build-title">
              Start building today
            </h2>
            <p className="commerce-build__description">Kickstart your development journey on Fynd Commerce</p>
          </div>
        </div>
      </div>

      <div className="commerce-build__scroller">
        <div className="commerce-build__cards-pad">
          <div className="fds__container">
            <div className="commerce-build__cards">
              {buildCards.map((card) => (
                <article className="commerce-build__card" key={card.title}>
                  <div className="commerce-build__image-wrap">
                    <img className="commerce-build__image" src={card.imageSrc} alt="" loading="lazy" />
                  </div>
                  <div className="commerce-build__card-content">
                    <h3 className="commerce-build__card-title">{card.title}</h3>
                    <p className="commerce-build__card-description">{card.description}</p>
                    <div className="commerce-build__actions">
                      {card.actions.map((action) => (
                        <a
                          className={getBuildActionClassName(action.variant)}
                          href={action.href}
                          key={action.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{action.label}</span>
                          {action.variant === 'primary' ? (
                            <span className="fynd__button-icon" aria-hidden="true">
                              <ArrowIcon />
                            </span>
                          ) : null}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
