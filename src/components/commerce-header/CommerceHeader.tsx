import { useState } from 'react';
import type { FocusEvent } from 'react';

const documentationLinks = [
  {
    label: 'Develop Theme',
    href: 'https://docs.fynd.com/partners/commerce/themes-doc/intro/',
  },
  {
    label: 'Develop Extension',
    href: 'https://docs.fynd.com/partners/commerce/extension/general/get-started/',
  },
  {
    label: 'Storefront REST API',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/application/client-libraries#introduction',
  },
  {
    label: 'Platform REST API',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/platform/client-libraries#introduction',
  },
  {
    label: 'Storefront GraphQL API',
    href: 'https://docs.fynd.com/partners/commerce/sdk/latest/graphql/application/client-libraries#introduction',
  },
  {
    label: 'Webhooks',
    href: 'https://docs.fynd.com/partners/commerce/webhooks/overview',
  },
  {
    label: 'Use Cases',
    href: 'https://docs.fynd.com/partners/commerce/extension/case-studies/communication/whatsapp-order-notification/',
  },
];

const otherPlatformLinks = [
  {
    label: 'Pixelbin',
    href: 'https://www.pixelbin.io/docs/',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/017_67348def4e7bc1f02eb7666c_Pixelbin.svg',
  },
  {
    label: 'Fynd Engage',
    href: 'https://doc.engage.fynd.com/docs/',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/016_67348def2cb565dc286f098d_Component.svg',
  },
  {
    label: 'Boltic',
    href: 'https://docs.boltic.io/',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/001_670ce5b50124a54e8b71c64f_Boltic.svg',
  },
  {
    label: 'Kaily',
    href: 'https://docs.kaily.ai/',
    icon: 'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/019_67348defeafc564cecd6aef7_Copilot.svg',
  },
];

export function CommerceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);

  const handleDocsBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsDocsOpen(false);
    }
  };

  return (
    <header className="commerce-header">
      <div className="commerce-header__container">
        <a className="commerce-header__logo-link" href="/" aria-label="Fynd Partners home">
          <img
            className="commerce-header__logo"
            src="https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/034_694256f022495e9bd4a7d92f_Partners_Dark.svg"
            width="170"
            height="37"
            alt="Fynd Partners"
          />
        </a>

        <nav className="commerce-header__nav" aria-label="Partners navigation">
          <a className="commerce-header__nav-link" href="https://platform.fynd.com/">
            Platforms
          </a>
          <a className="commerce-header__nav-link commerce-header__nav-link--active" href="/">
            Partner Program
          </a>
          <div
            className="commerce-header__nav-item"
            onBlur={handleDocsBlur}
            onFocus={() => setIsDocsOpen(true)}
            onMouseEnter={() => setIsDocsOpen(true)}
            onMouseLeave={() => setIsDocsOpen(false)}
          >
            <button
              className="commerce-header__nav-link commerce-header__nav-trigger"
              type="button"
              aria-expanded={isDocsOpen}
              aria-haspopup="true"
              onClick={() => setIsDocsOpen((current) => !current)}
            >
              <span>Documentation</span>
              <span className="commerce-header__chevron" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.33594 12L16.0026 18.6667L22.6693 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div className="commerce-header__dropdown" data-open={isDocsOpen}>
              <div className="commerce-header__dropdown-card">
                <div className="commerce-header__product-block">
                  <div className="commerce-header__product">
                    <img
                      className="commerce-header__product-icon"
                      src="https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/Fynd_one/Doc_Images/015_6734864b2fddaf5cd2633313_Fynd_commerce_icon.svg"
                      alt=""
                    />
                    <div>
                      <div className="commerce-header__product-title">Fynd Commerce</div>
                      <div className="commerce-header__product-copy">Unified and composable commerce platform</div>
                    </div>
                  </div>

                  <div className="commerce-header__doc-links">
                    {documentationLinks.map((link) => (
                      <a className="commerce-header__dropdown-link" href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <span className="commerce-header__card-notch" aria-hidden="true">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M31.0014 0H0.865234C5.1087 0 9.17835 1.68571 12.1789 4.68629L26.3151 18.8224C29.3156 21.823 31.0014 25.8927 31.0014 30.1361V0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>

                <div className="commerce-header__dropdown-side">
                  <div className="commerce-header__dropdown-label">other platforms</div>
                  {otherPlatformLinks.map((link) => (
                    <a
                      className="commerce-header__platform-link"
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="commerce-header__platform-icon" src={link.icon} alt="" />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <a className="commerce-header__action fynd__button fynd__button-primary" href="https://partners.fynd.com/auth/login">
          Login
        </a>

        <button
          className="commerce-header__menu"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="commerce-mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="currentColor" />
            <path
              d="M12.3333 10.6667C12.3333 11.1087 12.1577 11.5326 11.8452 11.8452C11.5326 12.1577 11.1087 12.3333 10.6667 12.3333C10.2246 12.3333 9.80072 12.1577 9.48816 11.8452C9.17559 11.5326 9 11.1087 9 10.6667C9 10.2246 9.17559 9.80072 9.48816 9.48816C9.80072 9.17559 10.2246 9 10.6667 9C11.1087 9 11.5326 9.17559 11.8452 9.48816C12.1577 9.80072 12.3333 10.2246 12.3333 10.6667ZM12.3333 15.6667C12.3333 16.1087 12.1577 16.5326 11.8452 16.8452C11.5326 17.1577 11.1087 17.3333 10.6667 17.3333C10.2246 17.3333 9.80072 17.1577 9.48816 16.8452C9.17559 16.5326 9 16.1087 9 15.6667C9 15.2246 9.17559 14.8007 9.48816 14.4882C9.80072 14.1756 10.2246 14 10.6667 14C11.1087 14 11.5326 14.1756 11.8452 14.4882C12.1577 14.8007 12.3333 15.2246 12.3333 15.6667ZM10.6667 22.3333C11.1087 22.3333 11.5326 22.1577 11.8452 21.8452C12.1577 21.5326 12.3333 21.1087 12.3333 20.6667C12.3333 20.2246 12.1577 19.8007 11.8452 19.4882C11.5326 19.1756 11.1087 19 10.6667 19C10.2246 19 9.80072 19.1756 9.48816 19.4882C9.17559 19.8007 9 20.2246 9 20.6667C9 21.1087 9.17559 21.5326 9.48816 21.8452C9.80072 22.1577 10.2246 22.3333 10.6667 22.3333ZM17.3333 10.6667C17.3333 11.1087 17.1577 11.5326 16.8452 11.8452C16.5326 12.1577 16.1087 12.3333 15.6667 12.3333C15.2246 12.3333 14.8007 12.1577 14.4882 11.8452C14.1756 11.5326 14 11.1087 14 10.6667C14 10.2246 14.1756 9.80072 14.4882 9.48816C14.8007 9.17559 15.2246 9 15.6667 9C16.1087 9 16.5326 9.17559 16.8452 9.48816C17.1577 9.80072 17.3333 10.2246 17.3333 10.6667ZM15.6667 17.3333C16.1087 17.3333 16.5326 17.1577 16.8452 16.8452C17.1577 16.5326 17.3333 16.1087 17.3333 15.6667C17.3333 15.2246 17.1577 14.8007 16.8452 14.4882C16.5326 14.1756 16.1087 14 15.6667 14C15.2246 14 14.8007 14.1756 14.4882 14.4882C14.1756 14.8007 14 15.2246 14 15.6667C14 16.1087 14.1756 16.5326 14.4882 16.8452C14.8007 17.1577 15.2246 17.3333 15.6667 17.3333ZM17.3333 20.6667C17.3333 21.1087 17.1577 21.5326 16.8452 21.8452C16.5326 22.1577 16.1087 22.3333 15.6667 22.3333C15.2246 22.3333 14.8007 22.1577 14.4882 21.8452C14.1756 21.5326 14 21.1087 14 20.6667C14 20.2246 14.1756 19.8007 14.4882 19.4882C14.8007 19.1756 15.2246 19 15.6667 19C16.1087 19 16.5326 19.1756 16.8452 19.4882C17.1577 19.8007 17.3333 20.2246 17.3333 20.6667ZM20.6667 12.3333C21.1087 12.3333 21.5326 12.1577 21.8452 11.8452C22.1577 11.5326 22.3333 11.1087 22.3333 10.6667C22.3333 10.2246 22.1577 9.80072 21.8452 9.48816C21.5326 9.17559 21.1087 9 20.6667 9C20.2246 9 19.8007 9.17559 19.4882 9.48816C19.1756 9.80072 19 10.2246 19 10.6667C19 11.1087 19.1756 11.5326 19.4882 11.8452C19.8007 12.1577 20.2246 12.3333 20.6667 12.3333ZM22.3333 15.6667C22.3333 16.1087 22.1577 16.5326 21.8452 16.8452C21.5326 17.1577 21.1087 17.3333 20.6667 17.3333C20.2246 17.3333 19.8007 17.1577 19.4882 16.8452C19.1756 16.5326 19 16.1087 19 15.6667C19 15.2246 19.1756 14.8007 19.4882 14.4882C19.8007 14.1756 20.2246 14 20.6667 14C21.1087 14 21.5326 14.1756 21.8452 14.4882C22.1577 14.8007 22.3333 15.2246 22.3333 15.6667ZM20.6667 22.3333C21.1087 22.3333 21.5326 22.1577 21.8452 21.8452C22.1577 21.5326 22.3333 21.1087 22.3333 20.6667C22.3333 20.2246 22.1577 19.8007 21.8452 19.4882C21.5326 19.1756 21.1087 19 20.6667 19C20.2246 19 19.8007 19.1756 19.4882 19.4882C19.1756 19.8007 19 20.2246 19 20.6667C19 21.1087 19.1756 21.5326 19.4882 21.8452C19.8007 22.1577 20.2246 22.3333 20.6667 22.3333Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="commerce-header__mobile-panel" id="commerce-mobile-menu" data-open={isMenuOpen}>
        <a className="commerce-header__mobile-link" href="https://platform.fynd.com/">
          Platforms
        </a>
        <a className="commerce-header__mobile-link commerce-header__mobile-link--active" href="/">
          Partner Program
        </a>
        <div className="commerce-header__mobile-group">
          <div className="commerce-header__mobile-label">Documentation</div>
          {documentationLinks.map((link) => (
            <a className="commerce-header__mobile-sub-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
