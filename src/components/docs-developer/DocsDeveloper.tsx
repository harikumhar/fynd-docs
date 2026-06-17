import { developerDocsCards, type DeveloperDocsCard } from './developerDocsData';

function ArrowIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M13.595 18.655C13.4546 18.5144 13.3757 18.3238 13.3757 18.125C13.3757 17.9263 13.4546 17.7356 13.595 17.595L18.565 12.625H4.125C3.92609 12.625 3.73533 12.546 3.59467 12.4054C3.45402 12.2647 3.375 12.0739 3.375 11.875C3.375 11.6761 3.45402 11.4853 3.59467 11.3447C3.73533 11.204 3.92609 11.125 4.125 11.125H18.565L13.595 6.15502C13.4545 6.01441 13.3756 5.82376 13.3756 5.62502C13.3756 5.42627 13.4545 5.23562 13.595 5.09502C13.7356 4.95453 13.9263 4.87561 14.125 4.87561C14.3238 4.87561 14.5144 4.95453 14.655 5.09502L20.905 11.345C21.0455 11.4856 21.1243 11.6763 21.1243 11.875C21.1243 12.0738 21.0455 12.2644 20.905 12.405L14.655 18.655C14.5144 18.7955 14.3238 18.8744 14.125 18.8744C13.9263 18.8744 13.7356 18.7955 13.595 18.655Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DocsDeveloperCard({ description, external, href, icon, title }: DeveloperDocsCard) {
  return (
    <a className="docs-developer__card" href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      <span className="docs-developer__card-head">
        <span className="docs-developer__icon-wrap">
          <img className="docs-developer__icon" src={icon} alt="" loading="lazy" />
        </span>
        <span className="docs-developer__card-title">{title}</span>
      </span>
      <span className="docs-developer__description">{description}</span>
      <span className="docs-developer__arrow">
        <span className="docs-developer__arrow-track">
          <span className="docs-developer__arrow-icon docs-developer__arrow-icon--primary">
            <ArrowIcon />
          </span>
          <span className="docs-developer__arrow-icon docs-developer__arrow-icon--secondary">
            <ArrowIcon />
          </span>
        </span>
      </span>
    </a>
  );
}

export function DocsDeveloper() {
  return (
    <section className="docs-developer" aria-labelledby="docs-developer-title">
      <div className="fds__container">
        <div className="docs-developer__panel">
          <h2 id="docs-developer-title" className="docs-developer__title">
            Developer documentation
          </h2>
          <div className="docs-developer__grid">
            {developerDocsCards.map((card) => (
              <DocsDeveloperCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
