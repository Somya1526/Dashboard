
import React from 'react';
import { WidgetProvider } from './context/WidgetContext';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <WidgetProvider>
      <Dashboard />
    </WidgetProvider>
  );
}

export default App;

