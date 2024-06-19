import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes'; // Adjust the import path
import { ThemeProvider } from './sections/context/useThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AllRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
