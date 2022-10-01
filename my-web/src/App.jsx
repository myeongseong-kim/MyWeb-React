import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
        if (lastScrollY === 0) {
            if (window.scrollY === 0) {
                setSnap(false);
                console.log("UP!");
            }
            else {
                setSnap(true);
                console.log("DOWN!");
            }
        }
        lastScrollY = window.scrollY;
        // console.log(lastScrollY);
    }


    useEffect(() => {
        lastScrollY = window.scrollY;

        var timer = null
        var onScroll = () => {
            if(timer != null) {
                clearTimeout(timer);        
            }
            timer = setTimeout(handleScroll, 125);            
        };

        window.addEventListener('wheel', onScroll, false);
        window.addEventListener('touchmove', onScroll, false);

        return() => {
            window.removeEventListener('wheel', onScroll, false);
            window.removeEventListener('touchmove', onScroll, false);
        }
    })
    
    const [snap, setSnap] = useState(false);

    return (
        <Router>
            <Header snap={snap} />
            <Main />
            <Footer />
        </Router>
    );
}

export default App;