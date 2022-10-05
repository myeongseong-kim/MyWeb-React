import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    let lastScrollY = window.scrollY;
    let ready = true;

    const handleScroll = () => {
        var delta = window.scrollY - lastScrollY;
        // console.log(delta);

        if (delta < 0) {
            if (snap && window.scrollY === 0) {
                if (ready) {
                    setSnap(false);
                }
                else {
                    window.scrollTo({
                        top: 1,
                        behavior: 'auto'
                    });
                    ready = true; 
                }
            }
            else ready = false;
        }
        else if (delta > 0) {
            if (!snap && lastScrollY === 0) {
                setSnap(true);
                window.scrollTo({
                    top: 1,
                    behavior: 'auto'
                });
            }
            else ready = false;
        }


        lastScrollY = window.scrollY;
        // console.log(lastScrollY);
    }


    useEffect(() => {
        var timer = null
        var onScroll = () => {
            if(timer != null) {
                clearTimeout(timer);        
            }
            timer = setTimeout(handleScroll, 125);            
        };

        window.addEventListener('scroll', onScroll, false);
        // window.addEventListener('wheel', onScroll, false);
        // window.addEventListener('touchmove', onScroll, false);

        return() => {
            window.removeEventListener('scroll', onScroll, false);
            // window.removeEventListener('wheel', onScroll, false);
            // window.removeEventListener('touchmove', onScroll, false);
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