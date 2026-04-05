import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllProjectsPage } from './pages/AllProjectsPage';
import { ProjectGalleryPage } from './pages/ProjectGalleryPage';
import { PageLoader } from './components/PageLoader';
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return (
    <PageLoader>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<AllProjectsPage />} />
        <Route path="/project/:id" element={<ProjectGalleryPage />} />
      </Routes>
    </PageLoader>);

}