import { CommerceBuild } from '../../components/commerce-build';
import { CommerceDevelopmentKit } from '../../components/commerce-development-kit';
import { CommerceEcosystem } from '../../components/commerce-ecosystem';
import { CommerceHeader } from '../../components/commerce-header';
import { CommerceHero } from '../../components/commerce-hero';
import { CommerceMarketplace } from '../../components/commerce-marketplace';
import { CommercePartnerCta } from '../../components/commerce-partner-cta';
import { MarketingFooter } from '../../components/marketing-footer';
import { PageMetadata } from '../../components/page-metadata';
import { commercePageMetadata } from '../../pageMetadata';
import './CommercePage.css';

export function CommercePage() {
  return (
    <div className="commerce-page">
      <PageMetadata metadata={commercePageMetadata} />
      <CommerceHeader />
      <main className="commerce-page__main">
        <CommerceHero />
        <CommerceBuild />
        <CommerceDevelopmentKit />
        <CommerceMarketplace />
        <CommerceEcosystem />
        <CommercePartnerCta />
      </main>
      <MarketingFooter />
    </div>
  );
}
