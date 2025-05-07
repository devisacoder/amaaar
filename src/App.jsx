import React from 'react';
import { EmployeeProvider } from './context/EmployeeContext';
import { MainContent } from './components/MainContext';
import { Sidebar } from './components/Sidebar'
import './styles/variables.scss'; 

export default function App() {
  return (
      <EmployeeProvider>
        <div className="d-flex vh-100">
          <Sidebar />
          <MainContent />
        </div>
      </EmployeeProvider>
  );
}
