import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { SupportPanel } from './components/SupportPanel';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <Dashboard />
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;