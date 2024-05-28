import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Services from '../components/Services';
import Assistants from '../components/Assistants';
import Contact from '../components/Contact';
import Publications from '../components/Publications';

const FAQ: React.FC = () => {
  return (
    <div>
        <Banner />
        <Cards />
        <Services />
        <Assistants />
        <Publications />
        <Contact />
    </div>
  );
}

export default FAQ;