import React from 'react';
import Swal from 'sweetalert2';


function Contactus() {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (!name || !email || !message) {
            Swal.fire({
                icon: 'error',
                title: 'All fields are required',
                text: 'Please fill out all fields.',
            });
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
            });
            return;
        }

        Swal.fire({
            icon: 'info',
            title: 'Sending...',
            showConfirmButton: false,
        });

        formData.append("access_key", "2dd296c5-3dbb-43b5-a404-08628a3019c0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted Successfully',
            });
            event.target.reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
            });
        }
    };

    return (
        <div style={{ backgroundColor: '#4c946c' }}>
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

                <section id="contact" className="p-5 m-3" style={{ borderRadius: '10px' }}>
                    <div className="container">
                        <div className="row align-items-center">
                                <h2 className="text-center" style={{ color: 'black' }}>Make An Appointment!</h2>
                                <br />
                                <form onSubmit={onSubmit} style={{ textAlign: 'left', maxWidth: '400px', margin: 'auto' }} className="contact-form">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-outline-warning submit-button"
                                    >
                                        Send It!
                                    </button>
                                </form>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Contactus;