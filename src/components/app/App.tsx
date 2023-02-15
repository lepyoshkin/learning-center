import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {AboutPage} from '../../pages/about-page/AboutPage';
import {HomePage} from '../../pages/home-page/HomePage';
import {ResourcesPage} from '../../pages/resources-page/ResourcesPage';
import {SuccessPage} from '../../pages/success-page/SuccessPage';
import {ContactForm} from '../contact-form/ContactForm';
import {Footer} from '../footer/Footer';
import {Header} from '../header/Header';

import classes from './App.module.scss';
function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
