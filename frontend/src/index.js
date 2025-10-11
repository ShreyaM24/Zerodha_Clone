import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './landing page/home/HomePage';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./landing page/signup/SignUp";
import PricingPage from './landing page/pricing/PricingPage';
import AboutPage from './landing page/about/AboutPage';
import ProductPage from './landing page/products/ProductPage';
import SupportPage from './landing page/support/SupportPage';
import NotFound from './landing page/NotFound';
import Navbar from './landing page/Navbar';
import Footer from './landing page/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/pricing" element={<PricingPage/>} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/support" element={<SupportPage/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
)