import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import HomeLayout from './layouts/HomeLayout';
import Team from './pages/Team';
import Service from './pages/Service';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/kpi-med" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="kpi-med/services/:serviceName" element={<Service />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
