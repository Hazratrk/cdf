
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/common/Header';
import Footer from './components/common/Footer';


import HomePage from './pages/HomePage'; 
import HomeSlider from './pages/HomeSlider';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ProductsPage from './pages/ProductsPage';
import HsePage from './pages/HsePage';
import ContactPage from './pages/ContactPage';

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

</Routes>
</main>
<Footer />
</div>
</Router>
);
}

export default App;