import React from 'react';
import careImage1 from '../images/care.jpg'; // Example image 1
import careImage2 from '../images/care.jpg'; // Example image 2
import careImage3 from '../images/care.jpg'; // Example image 3

function WhyUs() {

    const carouselItem1 = [
        {
            title: 'Expert Care 1',
            description: 'Top-notch professionals at your service for general health.',
            image: careImage1,
        },
        {
            title: 'Expert Care 2',
            description: 'Expert dermatologists to take care of your skin.',
            image: careImage2,
        },
        {
            title: 'Expert Care 3',
            description: 'Personalized care for your health and wellness needs.',
            image: careImage3,
        },
    ];

    const carouselItem2 = [
        {
            title: 'Expert Care 1',
            description: 'Top-notch professionals at your service for general health.',
            image: careImage1,
        },
        {
            title: 'Expert Care 2',
            description: 'Expert dermatologists to take care of your skin.',
            image: careImage2,
        },
        {
            title: 'Expert Care 3',
            description: 'Personalized care for your health and wellness needs.',
            image: careImage3,
        },
    ];

    return (
        <div style={{ backgroundColor: '#4c946c', border: '2px solid orange', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <div className="container py-5">
                <div className="row">
                    {/* First Column */}
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        {/* align-items-start for left alignment */}
                        <h2 className="text-start mb-3">Why Choose Medix Clinic?</h2><br />

                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                            <div className="carousel-inner">
                                {carouselItem2.map((item, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="card mb-3"
                                            style={{
                                                border: '2px solid orange',
                                                borderRadius: '5px',
                                                padding: '20px',
                                                backgroundColor: 'transparent',
                                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                            }}>
                                            <div className="row g-0">
                                                {/* First column: Title and description */}
                                                <div className="col-6 d-flex flex-column justify-content-center text-start">
                                                    <h3 className="card-title" style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</h3>
                                                    <p className="card-text" style={{ color: 'white' }}>{item.description}</p>
                                                </div>
                                                {/* Second column: Image */}
                                                <div className="col-6 d-flex justify-content-center">
                                                    <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>




                    {/* Second Column with Carousel */}
                    <div className="col-md-6" style={{ color: 'white' }}>
                        {/* Bootstrap Carousel with Faster Scroll */}
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                            <div className="carousel-inner" >
                                {carouselItem1.map((item, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="card mb-3" style={{ border: '2px solid orange', borderRadius: '5px', padding: '20px', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div className="row g-0" >
                                                {/* First column: Title and description */}
                                                <div className="col-md-6 d-flex flex-column justify-content-center text-start" >
                                                    <h3 className="card-title" style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</h3>
                                                    <p className="card-text" style={{ color: 'white' }}>{item.description}</p>
                                                </div>
                                                {/* Second column: Image */}
                                                <div className="col-md-6">
                                                    <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bootstrap Carousel with Faster Scroll */}
                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                            <div className="carousel-inner">
                                {carouselItem2.map((item, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="card mb-3" style={{ border: '2px solid orange', borderRadius: '5px', padding: '20px', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div className="row g-0">
                                                {/* First column: Title and description */}
                                                <div className="col-md-6 d-flex flex-column justify-content-center text-start">
                                                    <h3 className="card-title" style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</h3>
                                                    <p className="card-text" style={{ color: 'white' }}>{item.description}</p>
                                                </div>
                                                {/* Second column: Image */}
                                                <div className="col-md-6">
                                                    <img src={item.image} alt={item.title} className="img-fluid rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
