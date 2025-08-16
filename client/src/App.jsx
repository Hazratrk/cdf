// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ProductsPage from './pages/ProductsPage';
import HsePage from './pages/HsePage';
import ContactPage from './pages/ContactPage';
import NonaqueousPage from './pages/NonaqueousPage';
import WaterBasePage from './pages/WaterBasePage'; 
import CompletionWorkoverPage from './pages/CompletionWorkoverPage';
import DrillingSoftwarePage from './pages/DrillingSoftwarePage';
import SubmersiblePumpsPage from './pages/SubmersiblePumpsPage';
import CentralLaboratoryPage from './pages/CentralLaboratoryPage';
import WarehousePage from './pages/WarehousePage';
import LogisticServicesPage from './pages/LogisticServicesPage';
import EngineeringServicesPage from './pages/EngineeringServicesPage';
import ProjectManagementPage from './pages/ProjectManagementPage'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/hse" element={<HsePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="/activities/nonaqueous-drilling-fluids-obm" element={<NonaqueousPage />} />
            <Route path="/activities/water-base-drilling-fluids" element={<WaterBasePage />} />
            <Route path="/activities/completion-and-workover-fluids-services" element={<CompletionWorkoverPage />} />
            <Route path="/activities/drilling-fluids-simulation-software" element={<DrillingSoftwarePage />} />
            <Route path="/activities/submersible-electric-pumps-and-motors-evn" element={<SubmersiblePumpsPage />} />
            <Route path="/activities/central-laboratory" element={<CentralLaboratoryPage />} />
            <Route path="/activities/warehouse" element={<WarehousePage />} />
            <Route path="/activities/logistic-services" element={<LogisticServicesPage />} />
            <Route path="/activities/engineering-services" element={<EngineeringServicesPage />} />
            <Route path="/activities/project-management-services" element={<ProjectManagementPage />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;