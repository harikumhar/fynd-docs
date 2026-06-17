import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from 'react';
import Lottie from 'lottie-react';
import {
  certificationBadges,
  footerContentPairs,
  footerLegalLinks,
  footerLinkGroups,
  footerSocialLinks,
} from './footerData';
import type {
  FooterLink,
  FooterLinkSection,
  FooterSocialPlatform,
  MarketingFooterProps,
} from './types';

const FYND_LOTTIE_URL =
  'https://cdn.pixelbin.io/v2/nameless-waterfall-bf6e98/original/fynd-web/ds-shared/fynd-logo-bottom.json';

type TextVariant =
  | 'heading-xxl'
  | 'heading-xl'
  | 'heading-l'
  | 'heading-m'
  | 'heading-s'
  | 'body-xl'
  | 'body-l'
  | 'body-m'
  | 'body-s'
  | 'body-xs';

type TextWeight = 'regular' | 'medium' | 'semibold';
type TextColor = 'default' | 'secondary' | 'muted' | 'subtle' | 'white';

type TextProps = {
  variant: TextVariant;
  weight?: TextWeight;
  caps?: boolean;
  color?: TextColor;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

function getTextClass(variant: TextVariant, weight: TextWeight, caps: boolean) {
  if (['heading-xxl', 'heading-xl', 'heading-l', 'heading-m', 'heading-s'].includes(variant)) {
    return variant;
  }

  if (variant === 'body-xs' && caps && weight === 'semibold') {
    return 'body-xs-semibold-caps';
  }

  return `${variant}-${weight === 'semibold' ? 'semibold' : weight}`;
}

function getDefaultTextElement(variant: TextVariant): ElementType {
  switch (variant) {
    case 'heading-xxl':
      return 'h1';
    case 'heading-xl':
      return 'h2';
    case 'heading-l':
      return 'h3';
    case 'heading-m':
      return 'h4';
    case 'heading-s':
      return 'h5';
    case 'body-xs':
      return 'span';
    default:
      return 'p';
  }
}

function Text({
  variant,
  weight = 'regular',
  caps = false,
  color,
  as,
  className,
  style,
  children,
}: TextProps) {
  const Component = as ?? getDefaultTextElement(variant);
  const textClass = getTextClass(variant, weight, caps);
  const classes = [
    'fds-text',
    `fds-text__${textClass}`,
    caps && !textClass.includes('caps') ? 'fds-text__caps' : undefined,
    color && color !== 'default' ? `fds-text__color--${color}` : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
}

function FyndBrandmarkLight() {
  return (
    <svg
      width="80"
      height="77"
      viewBox="0 0 52 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fynd"
    >
      <g clipPath="url(#clip0_3102_646)">
        <path
          d="M48.3171 6.63001L42.2971 1.62901C39.6861 -0.54099 35.8981 -0.54099 33.2881 1.62901L26.0051 7.67801L18.7281 1.62901C16.1171 -0.54099 12.3351 -0.54399 9.72208 1.62301L3.68708 6.63001C1.40108 8.52701 0.0800781 11.343 0.0800781 14.315V26.77C0.0800781 29.736 1.39908 32.549 3.68008 34.445L19.6161 47.694C23.3161 50.769 28.6841 50.769 32.3811 47.694L48.3171 34.445C50.6001 32.547 51.9201 29.732 51.9201 26.764V14.31C51.9201 11.344 50.5991 8.52801 48.3171 6.63101V6.63001ZM47.2221 25.941C47.2221 28.035 46.2881 30.023 44.6791 31.362L30.5051 43.146C27.8941 45.316 24.1061 45.316 21.4931 43.146L7.31908 31.362C5.71008 30.023 4.77908 28.035 4.77908 25.941V15.141C4.77908 13.044 5.71308 11.056 7.32808 9.71701L11.5981 6.17601C13.1221 4.91001 15.3301 4.91301 16.8511 6.17901L22.3301 10.734L14.3341 17.373C12.3581 19.017 12.3551 22.051 14.3311 23.695L23.3551 31.215C24.8791 32.484 27.0901 32.487 28.6141 31.218L37.6641 23.695C39.6401 22.051 39.6401 19.017 37.6641 17.373L33.2701 13.721C33.0521 13.54 32.7371 13.54 32.5191 13.721L29.7621 16.011C29.4791 16.246 29.4791 16.68 29.7621 16.914L33.0301 19.631C33.5971 20.101 33.5971 20.967 33.0301 21.437L26.7401 26.67C26.3021 27.031 25.6711 27.031 25.2361 26.667L18.9641 21.44C18.4001 20.97 18.4001 20.104 18.9671 19.634L24.0441 15.417L25.2541 14.413L29.6791 10.737L33.1941 7.81801L35.1641 6.17901C36.6881 4.91301 38.8961 4.91301 40.4171 6.17901L44.6781 9.71701C46.2871 11.056 47.2211 13.041 47.2211 15.138V25.941H47.2221Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3102_646">
          <rect width="52" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(90 10 10)">
        <path
          d="M11.3981 10.0025L6.95013 5.55483C6.79907 5.40359 6.72172 5.21349 6.71808 4.98453C6.71462 4.75576 6.79197 4.5622 6.95013 4.40386C7.10847 4.2457 7.3003 4.16663 7.52561 4.16663C7.75093 4.16663 7.94275 4.2457 8.10109 4.40386L13.0088 9.31158C13.1109 9.41387 13.183 9.5217 13.225 9.63509C13.2671 9.74847 13.2881 9.87096 13.2881 10.0025C13.2881 10.1341 13.2671 10.2566 13.225 10.37C13.183 10.4834 13.1109 10.5912 13.0088 10.6935L8.10109 15.6012C7.94985 15.7523 7.75975 15.8296 7.5308 15.8333C7.30202 15.8367 7.10847 15.7594 6.95013 15.6012C6.79197 15.4429 6.71289 15.2511 6.71289 15.0257C6.71289 14.8004 6.79197 14.6086 6.95013 14.4503L11.3981 10.0025Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function SocialIcon({ platform }: { platform: FooterSocialPlatform }) {
  switch (platform) {
    case 'linkedin':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79ZM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68Zm1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'twitter':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.53 3h3.21l-7.02 8.02L22 21h-6.47l-5.06-6.61L4.68 21H1.47l7.5-8.57L1 3h6.62l4.58 6.05L17.53 3Zm-1.12 16.14h1.78L7.66 4.76H5.75L16.41 19.14Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 7.2a2.9 2.9 0 0 0-2-2.05C19.72 4.7 12 4.7 12 4.7s-7.72 0-9.5.45A2.9 2.9 0 0 0 .5 7.2 30.5 30.5 0 0 0 0 12a30.5 30.5 0 0 0 .5 4.8 2.9 2.9 0 0 0 2 2.05C4.28 19.3 12 19.3 12 19.3s7.72 0 9.5-.45a2.9 2.9 0 0 0 2-2.05A30.5 30.5 0 0 0 24 12a30.5 30.5 0 0 0-.5-4.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.25a9.75 9.75 0 0 0-3.55 18.84c-.08-.8-.16-2.02.03-2.89.18-.78 1.14-4.95 1.14-4.95s-.29-.59-.29-1.45c0-1.36.79-2.37 1.77-2.37.83 0 1.24.63 1.24 1.38 0 .84-.53 2.1-.81 3.26-.23.97.49 1.77 1.45 1.77 1.74 0 3.08-1.84 3.08-4.5 0-2.35-1.69-4-4.1-4-2.8 0-4.44 2.1-4.44 4.27 0 .85.33 1.75.73 2.25.08.1.09.18.07.28l-.27 1.12c-.04.18-.15.22-.34.14-1.27-.59-2.07-2.44-2.07-3.92 0-3.19 2.32-6.12 6.69-6.12 3.51 0 6.24 2.5 6.24 5.85 0 3.49-2.2 6.3-5.26 6.3-1.03 0-1.99-.54-2.32-1.17l-.63 2.4c-.23.88-.84 1.99-1.25 2.66A9.75 9.75 0 1 0 12 2.25Z" />
        </svg>
      );
    default:
      return null;
  }
}

function FyndFooterTrailingBadges() {
  return (
    <>
      {certificationBadges.map((badge) => (
        <img
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          loading="lazy"
          height={64}
          style={{ height: 64, width: 'auto', objectFit: 'contain' }}
        />
      ))}
    </>
  );
}

function FyndFooterLottieWordmark({ src = FYND_LOTTIE_URL }: { src?: string }) {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(src)
      .then((response) => response.json())
      .then((data: Record<string, unknown>) => {
        if (!cancelled) {
          setAnimationData(data);
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!animationData) {
    return null;
  }

  return <Lottie animationData={animationData} loop autoplay style={{ width: '100%', maxWidth: 1272, height: 'auto' }} />;
}

function renderLink(link: FooterLink, className: string, variant: TextVariant = 'body-s') {
  const handleClick = link.onClick
    ? (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        if (!link.href) {
          event.preventDefault();
        }

        link.onClick?.();
      }
    : undefined;

  const content = (
    <Text variant={variant} as="span">
      {link.label}
    </Text>
  );

  if (link.href) {
    return (
      <a
        key={link.label}
        className={className}
        href={link.href}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noopener noreferrer' : undefined}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button key={link.label} type="button" className={className} onClick={handleClick}>
      {content}
    </button>
  );
}

function chunkSections(sections: FooterLinkSection[], size: number) {
  const chunks: FooterLinkSection[][] = [];

  for (let index = 0; index < sections.length; index += size) {
    chunks.push(sections.slice(index, index + size));
  }

  return chunks;
}

function renderLinkSection(section: FooterLinkSection) {
  return (
    <div className="fds-footer__linkSection" key={section.title}>
      <Text variant="body-xs" caps weight="semibold" color="white" as="h3">
        {section.title}
      </Text>
      <ul className="fds-footer__linkList">
        {section.links.map((link) => (
          <li key={link.label}>{renderLink(link, 'fds-footer__link')}</li>
        ))}
      </ul>
    </div>
  );
}

export function MarketingFooter({
  logo = <FyndBrandmarkLight />,
  heading,
  contentPairs = footerContentPairs,
  trailingContent = <FyndFooterTrailingBadges />,
  linkSections = [],
  linkGroups = footerLinkGroups,
  legalLinks = footerLegalLinks,
  socialLinks = footerSocialLinks,
  wordmark = <FyndFooterLottieWordmark />,
  copyright = `© ${new Date().getFullYear()} Shopsense Retail Technologies | Invented in India`,
  className,
  style,
}: MarketingFooterProps) {
  const classes = ['fds-footer', className].filter(Boolean).join(' ');
  const linkSectionRows = chunkSections(linkSections, 4);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <footer className={classes} style={style}>
      <div className="fds__container fds-footer__container">
        {(logo || heading) && (
          <div className="fds-footer__topBlock">
            {logo && <div className="fds-footer__logo">{logo}</div>}
            {heading && (
              <Text variant="heading-xxl" as="h2" color="white">
                {heading}
              </Text>
            )}
          </div>
        )}

        {((contentPairs && contentPairs.length > 0) || trailingContent) && (
          <div className="fds-footer__contentPairs">
            {contentPairs?.map((item, index) => (
              <div className="fds-footer__contentPair" key={`${item.title}-${index}`}>
                <Text variant="body-s" weight="medium" color="white" as="p">
                  {item.title}
                </Text>
                <Text variant="body-s" color="muted" as="p">
                  {item.body}
                </Text>
              </div>
            ))}
            {trailingContent && <div className="fds-footer__trailing">{trailingContent}</div>}
          </div>
        )}

        {linkGroups && linkGroups.length > 0 ? (
          <div className="fds-footer__linkGroups">
            {linkGroups.map((group) => {
              const isOpen = openGroup === group.title;

              return (
                <div className="fds-footer__linkGroup" key={group.title}>
                  <button
                    type="button"
                    className="fds-footer__linkGroupToggler"
                    aria-expanded={isOpen}
                    onClick={() => setOpenGroup((current) => (current === group.title ? null : group.title))}
                  >
                    <span>{group.title}</span>
                    <span
                      className={[
                        'fds-footer__linkGroupChevron',
                        isOpen && 'fds-footer__linkGroupChevron--open',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      aria-hidden="true"
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>

                  <div className="fds-footer__linkGroupContent">
                    <div className="fds-footer__linkRow">{group.sections.map(renderLinkSection)}</div>
                  </div>

                  {isOpen && (
                    <div className="fds-footer__linkGroupMobileContent" style={{ overflow: 'hidden' }}>
                      <div className="fds-footer__linkRow">{group.sections.map(renderLinkSection)}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          linkSectionRows.map((row, index) => (
            <div className="fds-footer__flatRow" key={index}>
              <div className="fds-footer__divider" role="presentation" />
              <div className="fds-footer__linkRow">{row.map(renderLinkSection)}</div>
            </div>
          ))
        )}

        {((legalLinks && legalLinks.length > 0) || (socialLinks && socialLinks.length > 0)) && (
          <div className="fds-footer__bottomRow">
            {legalLinks && legalLinks.length > 0 && (
              <div className="fds-footer__legalLinks">
                {legalLinks.map((link) => renderLink(link, 'fds-footer__legalLink'))}
              </div>
            )}

            {socialLinks && socialLinks.length > 0 && (
              <div className="fds-footer__socialLinks">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    className="fds-footer__socialLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label ?? link.platform}
                  >
                    <SocialIcon platform={link.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {wordmark && (
          <div className={['fds-footer__wordmark', typeof wordmark === 'string' && 'fds-footer__wordmark--text'].filter(Boolean).join(' ')} aria-hidden="true">
            {wordmark}
          </div>
        )}

        {copyright && (
          <div className="fds-footer__copyright">
            <Text variant="body-s" color="muted" as="p">
              {copyright}
            </Text>
          </div>
        )}
      </div>
    </footer>
  );
}
