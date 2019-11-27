import React from 'react';
import Header from 'sections/Header';
import Footer from 'sections/Footer';
import About from 'sections/About';
import Resume from 'sections/Resume';
import Contact from 'sections/Contact';
import Testimonials from 'sections/Testimonials';
import Portfolio from 'sections/Portfolio';
import { Data } from 'variables/resumeData';

const App = () => {
  return (
    <div className="App">
      <Header data={Data.main} />
      <About data={Data.main} />
      <Resume data={Data.resume} />
      <Portfolio data={Data.portfolio} />
      <Testimonials data={Data.testimonials} />
      <Contact data={Data.main} />
      <Footer data={Data.main} />
    </div>
  );
};

export default App;
