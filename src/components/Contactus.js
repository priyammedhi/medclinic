import React from 'react';

const Contactus = () => {
    return (
        <div style={{ backgroundColor: '#4c946c'}}>
            <div className="contact-section">
                {/* Follow Us Section */}
                <div className="follow-us">
                    <h2>Follow Us Online!</h2>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-twitch"></i></a>
                    </div>
                </div>

                {/* Get In Touch Form */}
                <div className="get-in-touch">
                    <h2 style={{color:'black'}}>Make An Appointment!</h2>
                    <form className="contact-form">
                    <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" placeholder="Name" required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input type="email" className="form-control" placeholder="Email" required />
                            </div>
                        </div>
                        <input type="tel" placeholder="Phone" required />
                        <textarea placeholder="Message" rows="4" required></textarea>
                        <button type="submit" className="submit-button">Send It!</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;