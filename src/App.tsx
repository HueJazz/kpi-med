import React from 'react';
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Services from './components/Services';
import Assistants from './components/Assistants';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <Banner />
      <Cards />
      <Services />
      <Assistants />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
