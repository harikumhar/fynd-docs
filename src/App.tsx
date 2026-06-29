import { Route, Routes } from 'react-router-dom';
import { AiPimDocsPage } from './pages/ai-pim-docs/AiPimDocsPage';
import { CommercePage } from './pages/commerce/CommercePage';
import { DocsPage } from './pages/docs/DocsPage';
import { KonnectPage } from './pages/konnect/KonnectPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DocsPage />} />
      <Route path={ROUTES.partnersCommerce} element={<CommercePage />} />
      <Route path={ROUTES.aiPimDocs} element={<AiPimDocsPage />} />
      <Route path={ROUTES.konnect} element={<KonnectPage />} />
    </Routes>
  );
}
