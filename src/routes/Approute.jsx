import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Settings from '../pages/Settings';

const Approute = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/library' element={<Library/>}/>
                <Route path='/settings' element={<Settings/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Approute;
