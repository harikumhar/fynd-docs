
const DECORATIVE_IMAGES = [
  {
    className: 'docs-commerce-cta__image docs-commerce-cta__image--first',
    src: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/053_6707a3a8d07105fbeafc5121_Subtract_1.webp',
  },
  {
    className: 'docs-commerce-cta__image docs-commerce-cta__image--second',
    src: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/051_6707a3a7d07105fbeafc4fe7_Subtract_4.avif',
  },
  {
    className: 'docs-commerce-cta__image docs-commerce-cta__image--third',
    src: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/054_6707a3a8d07105fbeafc5140_Subtract_3.webp',
  },
  {
    className: 'docs-commerce-cta__image docs-commerce-cta__image--fourth',
    src: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/055_6707a3a8d07105fbeafc5149_Subtract_4.webp',
  },
  {
    className: 'docs-commerce-cta__image docs-commerce-cta__image--fifth',
    src: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/052_6707a3a7d07105fbeafc5017_Subtract_5.webp',
  },
];

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

export function DocsCommerceCta() {
  return (
    <section className="docs-commerce-cta" aria-labelledby="docs-commerce-cta-title">
      <div className="fds__container">
        <div className="docs-commerce-cta__wrapper">
          <div className="docs-commerce-cta__content">
            <h2 id="docs-commerce-cta-title" className="docs-commerce-cta__title">
              Join the <span className="docs-commerce-cta__title-accent">commerce revolution</span>
            </h2>
            <a className="docs-commerce-cta__button fynd__button fynd__button-primary" href="https://www.fynd.com/contact-us">
              <span>Contact us</span>
              <span className="docs-commerce-cta__button-icon">
                <ArrowIcon />
              </span>
            </a>
          </div>

          {DECORATIVE_IMAGES.map((image) => (
            <img key={image.src} className={image.className} src={image.src} alt="" loading="lazy" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
