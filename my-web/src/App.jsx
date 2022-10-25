import React, { useEffect, useState, useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    const navRef = useRef();
    const footerRef = useRef();

    let lastScrollY = window.scrollY;
    let ready = true;

    const handleSnap = () => {
        var delta = window.scrollY - lastScrollY;

        if (!lock) {
            if (delta < 0) {
                if (snap && window.scrollY === 0) {
                    if (ready) {
                        toggleSnap(false);
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
                    toggleSnap(true);
                }
                else ready = false;
            }
        }

        lastScrollY = window.scrollY;
        // console.log(lastScrollY);
    }

    useEffect(() => {
        var timer = null
        var handleScroll = () => {
            if(timer != null) {
                clearTimeout(timer);        
            }
            timer = setTimeout(handleSnap, 125);
        };
        window.addEventListener('scroll', handleScroll, false);

        return() => {
            window.removeEventListener('scroll', handleScroll, false);
        }
    });

    useEffect(() => {
        const handleRefresh = () => {
            // console.log('refresh');
            setNavHeight(navRef.current.clientHeight);
            // console.log(navHeight);
            setFooterHeight(footerRef.current.clientHeight);
            // console.log(footerHeight);
        }
        
        window.addEventListener('load', handleRefresh, false);
        return () => {
            window.removeEventListener('load ', handleRefresh, false);
        }
    });
 

    const [navHeight, setNavHeight] = useState(remToPixels(7.5));
    const [footerHeight, setFooterHeight] = useState(remToPixels(23.2));

    const [snap, setSnap] = useState(false);
    const toggleSnap = (state) => {
        // console.log(`snap ${state}`);
        setSnap(state);
        if (state) {
            window.scrollTo({
                top: 1,
                behavior: 'auto'
            });
            lastScrollY = 1;
        } 
        else {
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
            lastScrollY = 0;
        }    
    }

    const [lock, setLock] = useState(false);

    function remToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }


    return (
        <Router>
            <Header snap={snap} minHeight={navHeight} setLock={setLock} />
            <Nav ref={navRef} toggleSnap={toggleSnap} />
            <Main topMargin={navHeight} bottomMargin={footerHeight} />
            <Footer ref={footerRef} />
        </Router>
    );
}

export default App;