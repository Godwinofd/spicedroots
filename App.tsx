
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import ErrorBoundary from './components/ErrorBoundary';

// Eager load Home page (critical for initial render)
import Home from './pages/Home';

// Lazy load all other pages for code splitting
const MenuPage = lazy(() => import('./pages/MenuPage'));
const OrderOnline = lazy(() => import('./pages/OrderOnline'));
const Reservations = lazy(() => import('./pages/Reservations'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const RumBar = lazy(() => import('./pages/RumBar'));
const Catering = lazy(() => import('./pages/Catering'));
const Events = lazy(() => import('./pages/Events'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component with Caribbean theme
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#fcfaf7]">
    <div className="text-center space-y-6">
      <div className="relative w-20 h-20 mx-auto">
        <div className="absolute inset-0 border-4 border-[#D1BB94]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-[#D1BB94] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-[#27618E] text-sm tracking-[0.3em] font-bold uppercase animate-pulse">
        Loading...
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (hash && ['home', 'menu', 'order', 'reservations', 'about', 'contact', 'rum-bar', 'catering', 'events'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      } else {
        setCurrentPage('not-found');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'menu': return <MenuPage />;
      case 'order': return <OrderOnline />;
      case 'reservations': return <Reservations />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'rum-bar': return <RumBar />;
      case 'catering': return <Catering />;
      case 'events': return <Events />;
      case 'not-found': return <NotFound />;
      default: return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf7] selection:bg-[#D1BB94] selection:text-white">
      <ErrorBoundary>
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </main>
        <div className="relative z-10">
          <GallerySection />
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default App;
