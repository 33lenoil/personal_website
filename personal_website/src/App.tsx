import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Index from './pages/index';
import Photography from './pages/photography';
import Contact from './pages/contact';
import Album from './pages/album';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<Index />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/album/:albumId" element={<Album />} />
            </Routes>
        </Router>
    )
}