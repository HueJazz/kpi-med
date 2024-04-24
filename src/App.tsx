import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import HomeLayout from './layouts/HomeLayout';
import Publications from './pages/Publications';
import Team from './pages/Team';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
          {/* <Route path="/sign-in" element={<Login />}/>
          <Route path="/sign-up" element={<Registration />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
