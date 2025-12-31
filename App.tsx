
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import OrderOnline from './pages/OrderOnline';
import Reservations from './pages/Reservations';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (hash && ['home', 'menu', 'order', 'reservations', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
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
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-green selection:bg-accent-pink selection:text-dark-green">
      <Navbar currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <GallerySection />
      <Footer />
    </div>
  );
};

export default App;
