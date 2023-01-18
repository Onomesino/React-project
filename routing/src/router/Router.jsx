import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../About/About';
import Service from '../Services/Service';
import Page from '../Pages/Page';

const Router = () => {
    return (
        <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/Page">Page</Link>
                </nav>
                <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="/service" element={<Service/>} />
                <Route  path="/page" element={<Page/>} />
                </Routes>
        </BrowserRouter>
    );
}

export default Router;
