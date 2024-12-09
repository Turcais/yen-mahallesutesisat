import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'

import AboutPage from '../AboutPage/AboutPage';
import EventSinglePage from '../EventSinglePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';



import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import Contactin from '../../components/hero/contact';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="event-single/:slug" element={<EventSinglePage />} />
          <Route path="service-s2" element={<ServicePageS2 />} />
          <Route path="Contactin" element={<Contactin />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
