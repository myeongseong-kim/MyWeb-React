import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
    const navRef = useRef();

    let lastScrollY = window.scrollY;
    let ready = true;

    const handleScroll = () => {
        var delta = window.scrollY - lastScrollY;

        if (delta < 0) {
            if (snap && window.scrollY === 0) {
                if (ready) {
                    // setSnap(false);
                    // setHeaderHeight(window.innerHeight);
                    // window.scrollTo({
                    //     top: 0,
                    //     behavior: 'auto'
                    // });
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
                // setSnap(true);
                // setHeaderHeight(navRef.current.clientHeight);
                // window.scrollTo({
                //     top: 1,
                //     behavior: 'auto'
                // });
                toggleSnap(true);
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
            timer = setTimeout(handleScroll, 250);            
        };
        window.addEventListener('scroll', onScroll, false);

        return() => {
            window.removeEventListener('scroll', onScroll, false);
        }
    })


    useEffect(() => {
        const handleRefresh = () => {
            // console.log('refresh');
            setHeaderHeight(window.innerHeight);
            setNavHeight(navRef.current.clientHeight);
        }
        
        window.addEventListener('load', handleRefresh, false);
        return () => {
            window.removeEventListener('load ', handleRefresh, false);
        }
    })

    useEffect(() => {
        const handleResize = () => {
            // console.log('resize');
            setHeaderHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize, false);
        return () => {
            window.removeEventListener('resize', handleResize, false);
        }
    })

    
    const [snap, setSnap] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(window.innerHeight);
    const [navHeight, setNavHeight] = useState(0);
    const toggleSnap = (state) => {
        // console.log(`snap ${state}`);

        setSnap(state);
        if (state) {
            setHeaderHeight(navRef.current.clientHeight);
            window.scrollTo({
                top: 1,
                behavior: 'auto'
            });
            lastScrollY = 1;
        } 
        else {
            setHeaderHeight(window.innerHeight);
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });
            lastScrollY = 0;
        }    
    }


    return (
        <Router>
            <Header snap={snap} height={headerHeight} />
            <Nav ref={navRef} toggleSnap={toggleSnap} />
            <Main topMargin={navHeight}/>
            <Footer />
        </Router>
    );
}

export default App;