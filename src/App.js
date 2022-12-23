import React from 'react';
import './styles/App.scss';

import Home from "./Home"

function App() {
  return (
    <div className="App bg-white max-w-screen-2xl w-full min-h-screen flex items-center justify-start flex-col">
      <Home/>
    </div>
  );
}

export default App;
