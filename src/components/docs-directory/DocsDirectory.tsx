import { docsDirectorySections, type DocsDirectoryLink } from './directoryData';

function DocsDirectoryCard({ description, external, href, icon, name }: DocsDirectoryLink) {
  const isDisabled = !href;
  const rel = external ? 'noreferrer nofollow' : undefined;
  const target = external ? '_blank' : undefined;

  return (
    <a
      className={`docs-directory__card${isDisabled ? ' docs-directory__card--disabled' : ''}`}
      href={href}
      rel={rel}
      target={target}
      aria-disabled={isDisabled || undefined}
      tabIndex={isDisabled ? -1 : undefined}
    >
      <img className="docs-directory__icon" src={icon} alt="" loading="lazy" />
      <span className="docs-directory__card-content">
        <span className="docs-directory__card-title">{name}</span>
        <span className="docs-directory__card-description">{description}</span>
      </span>
    </a>
  );
}

export function DocsDirectory() {
  return (
    <section className="docs-directory" aria-labelledby="docs-directory-title">
      <div className="fds__container docs-directory__container">
        <h2 id="docs-directory-title" className="docs-directory__sr-title">
          Documentation categories
        </h2>

        <div className="docs-directory__sections">
          {docsDirectorySections.map((section, index) => (
            <section
              key={section.title}
              className={`docs-directory__section${
                index === docsDirectorySections.length - 1 ? ' docs-directory__section--last' : ''
              }`}
              aria-labelledby={`docs-directory-${section.title.toLowerCase().replaceAll(' ', '-')}`}
            >
              <h3
                id={`docs-directory-${section.title.toLowerCase().replaceAll(' ', '-')}`}
                className="docs-directory__section-title"
              >
                {section.title}
              </h3>
              <div className="docs-directory__grid">
                {section.links.map((link) => (
                  <DocsDirectoryCard key={`${section.title}-${link.name}`} {...link} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
