import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    return (
        <Router>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </Router>
    );
}

export default App;