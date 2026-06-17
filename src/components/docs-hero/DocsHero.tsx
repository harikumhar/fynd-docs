
const HERO_IMAGE_SRC =
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/070_6718dbc53109a762d51ba3c6_Fynd_Documentation.png';

const HERO_IMAGE_SRC_SET = [
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/072_6718dbc53109a762d51ba3c6_Fynd_20Documentation-p-500.png 500w',
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/073_6718dbc53109a762d51ba3c6_Fynd_20Documentation-p-800.png 800w',
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/071_6718dbc53109a762d51ba3c6_Fynd_20Documentation-p-1080.png 1080w',
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/070_6718dbc53109a762d51ba3c6_Fynd_Documentation.png 1296w',
].join(', ');

export function DocsHero() {
  return (
    <section className="docs-hero" aria-labelledby="docs-hero-title">
      <div className="docs-hero__page-padding">
        <div className="fds__container docs-hero__container">
          <div className="docs-hero__layout">
            <div className="docs-hero__copy">
              <h1 id="docs-hero-title" className="docs-hero__title">
                Fynd Documentation
              </h1>
              <p className="docs-hero__description">
                Access guides, help, and user docs for all our products and platforms here
              </p>
            </div>

            <div className="docs-hero__media" aria-hidden="true">
              <img
                className="docs-hero__image"
                src={HERO_IMAGE_SRC}
                srcSet={HERO_IMAGE_SRC_SET}
                sizes="(max-width: 1296px) 100vw, 1296px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="docs-hero__mobile-notch" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 393 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#docs-hero-notch-clip)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0V24V72H24.1V24H24C10.7452 24 0 13.2548 0 0ZM176.1 72H24.1001V24H82.159C88.5242 24 94.6287 26.5286 99.1295 31.0294L109.071 40.9706C113.572 45.4714 119.676 48 126.041 48H176.1H200.2V72H176.1ZM224.3 48H200.2V72H224.3H248.4V48H224.3ZM272.5 48H248.4V72H272.5V48ZM272.5 48H296.6V72H272.5V48ZM320.7 48H296.6V72H320.7V48ZM320.7 48H344.8H368.9V72H344.8H320.7V48ZM393 24V48V72H368.9V48H369C382.255 48 393 37.2548 393 24Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="docs-hero-notch-clip">
              <rect width="393" height="47" fill="currentColor" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
