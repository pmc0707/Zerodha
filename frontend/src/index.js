import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage'; 
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import Pricing from './landing_page/home/Pricing';
import SupportPage from './landing_page/support/SupportPage';
import Topnav from './Topnav';
import Footer from './Footer';
import NotFound from './NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Topnav/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
