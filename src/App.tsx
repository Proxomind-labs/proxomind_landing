import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PartnersPage from './pages/PartnersPage';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/ai-consulting" element={<Navigate to="/products" replace />} />
          <Route path="/contact" element={<Navigate to="/partners#partner-inquiry" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
