
const CONTACT_URL =
  'https://www.fynd.com/contact-us?utm_source=https%3A%2F%2Fdocs.fynd.com%2Fpartners%2Fcommerce%2F&utm_medium=CTA';

export function CommerceHero() {
  return (
    <section className="commerce-hero" aria-labelledby="commerce-hero-title">
      <div className="commerce-hero__page-padding">
        <div className="fds__container">
          <div className="commerce-hero__content">
            <div className="commerce-hero__eyebrow">
              <span className="commerce-hero__eyebrow-dot" aria-hidden="true" />
              <span>Commerce developer portal</span>
            </div>

            <div className="commerce-hero__text">
              <h1 id="commerce-hero-title" className="commerce-hero__title">
                Become a partner
              </h1>
              <p className="commerce-hero__description">
                Join our partner ecosystem to share your expertise, create solutions for brands, and shape the
                future of commerce
              </p>
            </div>

            <a
              className="fynd__button fynd__button-primary"
              href={CONTACT_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span>Join now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
