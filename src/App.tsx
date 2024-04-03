import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes'; // Adjust the import path

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;
