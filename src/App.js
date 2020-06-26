import React from 'react';
import './App.css';
import NewsSourcesBoard from './components/NewsSourcesBoard/NewsSourcesBoard';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Filters />
      <NewsSourcesBoard sourcesPerPage={6} />
    </div>
  );
}

export default App;
