import { Route, Routes } from 'react-router-dom';
import { CommercePage } from './pages/commerce/CommercePage';
import { DocsPage } from './pages/docs/DocsPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<DocsPage />} />
      <Route path={ROUTES.partnersCommerce} element={<CommercePage />} />
    </Routes>
  );
}
