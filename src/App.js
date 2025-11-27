import React, { useEffect, useState } from 'react';
import './App.css';
import './ui_app/css/styles.css';
import Home from './ui_app/Home';
import About from './ui_app/About';
import Academics from './ui_app/Academics';
import Admission from './ui_app/Admission';
import Staff from './ui_app/Staff';
import Gallery from './ui_app/Gallery';
import Notices from './ui_app/Notices';
import Contact from './ui_app/Contact';
import Dashboard from './ui_app/Dashboard';
import { initUiApp } from './ui_app/js/script.module';

function App() {
  // simple hash-based navigation to switch between converted pages
  const [route, setRoute] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    // initialize UI behaviors once when app loads
    initUiApp();
    const onHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Re-run UI initialization whenever the route changes so new DOM elements
  // (Navbar/footer/etc.) receive event listeners. initUiApp is idempotent
  // enough for our current needs.
  useEffect(() => {
    try {
      initUiApp();
    } catch (e) {
      // swallow init errors during quick navigations
      // console.warn('initUiApp on route change failed', e);
    }
  }, [route]);

  // Render page based on simple hash routes like '#/' or '#/about'
  const renderRoute = () => {
    const r = route.replace('#', '').toLowerCase();
    switch (r) {
      case '/':
      case '':
        return <Home />;
      case '/about':
        return <About />;
      case '/academics':
        return <Academics />;
      case '/admission':
        return <Admission />;
      case '/staff':
        return <Staff />;
      case '/gallery':
        return <Gallery />;
      case '/notices':
        return <Notices />;
      case '/contact':
        return <Contact />;
      case '/dashboard':
        return <Dashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {renderRoute()}
    </div>
  );
}

export default App;
