import { DocsCommerceCta } from '../../components/docs-commerce-cta';
import { DocsDirectory } from '../../components/docs-directory';
import { DocsDeveloper } from '../../components/docs-developer';
import { DocsHero } from '../../components/docs-hero';
import { MarketingFooter } from '../../components/marketing-footer';
import { PageMetadata } from '../../components/page-metadata';
import { docsPageMetadata } from '../../pageMetadata';
import './DocsPage.css';

export function DocsPage() {
  return (
    <div className="docs-page">
      <PageMetadata metadata={docsPageMetadata} />
      <main className="docs-page__main">
        <DocsHero />
        <DocsDirectory />
        <DocsDeveloper />
        <DocsCommerceCta />
      </main>
      <MarketingFooter />
    </div>
  );
}
