import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(true); // Track visibility of the navbar
    const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && window.scrollY > lastScrollY) {
                // User scrolled past 200px and is scrolling down, hide the navbar
                setIsVisible(false);
            } else if (window.scrollY < lastScrollY || window.scrollY < 200) {
                // User is scrolling up or hasn't scrolled past 200px, show the navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top bg-body-transparent ${isVisible ? '' : 'hide-navbar'}`}>
                <div
                    className="container-fluid"
                    style={{
                        backgroundColor: '#4c946c',
                        padding: '10px',
                        borderRadius: '10px',
                        margin: '15px', // Add 5px margin on the left and right sides
                        border: '1px solid #ddd'
                    }}
                >
                    {/* Navbar brand with white text */}
                    <a className="navbar-brand text-white fw-bold" href="#">
                        Skin Science Solution
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Use ms-auto class to flex the nav items to the right */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3">
                                <a className="nav-link text-white active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-white" href="#">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-white" href="#">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                               <a href='tel:+4733378901'><button style={{color:'orange'}}  className="btn btn-outline-light">Contact Us</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;