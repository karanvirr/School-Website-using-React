import React, { useEffect, useState } from 'react';
import './App.css';
import './ui_app/css/styles.css';
import Home from './ui_app/Home';
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

  // For now we render only Home (you can create other page components and switch by route)
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
