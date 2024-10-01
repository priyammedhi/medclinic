import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <div className='divsize'>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    {/* Left Section: Company Name */}
                    <div className='cname' style={{
                        textAlign: 'left',
                        fontSize: '60px',
                        fontWeight: 'bold',
                        color: '#000',
                        fontFamily: 'serif',
                    }}>
                        <p style={{ margin: 0 }}>SKIN</p>
                        <p style={{ margin: 0 }}>SCIENCE</p>
                        <p style={{ margin: 0 }}>SOLUTION (S3)</p>
                    </div>

                    {/* Right Section: Navigation Links */}
                    <div style={{
                        fontSize: '20px',
                        color: '#000',
                    }}>
                        <ul className="list-unstyled d-lg-block d-flex justify-content-center" style={{ margin: 0, padding: 0 }}>
                            <li style={{ marginBottom: '10px', marginRight: '15px' }}>
                                <Link to="/" aria-label="Home" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                            </li>
                            <li style={{ marginBottom: '10px', marginRight: '15px' }}>
                                <Link to="/about" aria-label="About Us" style={{ textDecoration: 'none', color: '#000' }}>About Us</Link>
                            </li>
                            <li style={{ marginBottom: '10px', marginRight: '15px' }}>
                                <Link href="/services" aria-label="Services" style={{ textDecoration: 'none', color: '#000' }}>Services</Link>
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <a href="tel:+919101832431" aria-label="Make Appointment" style={{ textDecoration: 'none' }}>
                                    <button className="btn btn-outline-light" style={{ color: 'orange', border: '1px solid orange' }}>Make Appointment</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Section */}
                <footer style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', fontSize: '14px', color: 'white' }}>
                    <hr style={{ borderTop: '1px solid white' }} />
                    © 2024 Designed by <a href='tel:+918472824009' style={{ color: 'white', textDecoration: 'none' }}>Priyam Medhi</a>. All rights reserved.
                </footer>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`

.divsize {
    background-color: #3c7354;
    height: 60vh; /* Ensure height is applied here */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}
@media (max-width: 768px) {
    .cname {
        font-size: 1.5rem;
        text-align: center;
    }
    .divsize {
        height: 85vh; /* Adjust height for smaller screens */
    }
                    ul {
                        justify-content: center;
                        padding: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default Footer;
