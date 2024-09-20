import React from 'react';
import careImage from '../images/care.jpg';
import cum1 from '../images/cum1.jpg';
import cum2 from '../images/cum2.jpg';
import cum3 from '../images/cum3.jpg';
import cum4 from '../images/cum4.jpg';
import cum5 from '../images/cum5.jpg';

function WhyUs() {

    const carouselItem1 = [
        {
            title: 'Expert Leadership',
            description: 'The Skin Science Solution (S3) Center is led by Miss Dhanvi Borah, a renowned skin expert with extensive training in cosmetology, trichology, skin aesthetics, laser techniques, and nutrition. Her expertise ensures that clients receive high-quality treatments backed by years of experience and education.',
            image: careImage,
        },
        {
            title: 'Comprehensive Skin Solutions',
            description: "S3 offers a wide array of skin care services, from rejuvenation treatments to body sculpting. Whether you're dealing with acne, pigmentation, or looking to enhance your body contours, the center provides tailored solutions to address all your skin and aesthetic needs.",
            image: cum1,
        },
        {
            title: 'Cutting-Edge Technology',
            description: "At S3, we stay at the forefront of technological advancements. By incorporating the latest innovations in aesthetic treatments, including advanced laser and body sculpting machines, we ensure our clients receive the most effective and up-to-date procedures.",
            image: cum2,
        },
    ];

    const carouselItem2 = [
        {
            title: ' Personalized Care',
            description: 'No two clients are the same. S3 emphasizes personalized treatment plans, ensuring that every service is customized to suit your unique skin type, concerns, and goals. Your journey with us is tailored specifically to help you achieve the best results.',
            image: cum3,
        },
        {
            title: ' Results-Driven Approach',
            description: "Our treatments are focused on delivering real, visible results. Whether it's smoother skin, clearer complexion, or a more sculpted body, our expert team is committed to ensuring that each client leaves the center satisfied with noticeable improvements.",
            image: cum4,
        },
        {
            title: 'Holistic Wellness Approach',
            description: 'S3 goes beyond just skin care; we offer holistic wellness services, including nutritional guidance and obesity management. By combining aesthetic treatments with dietary advice, we address the root causes of skin concerns, providing long-lasting results.',
            image: cum5,
        },
    ];
    const carouselItem3 = [
        {
            title: ' Safe and Trusted Procedures',
            description: 'Client safety is a top priority at S3. We follow strict safety protocols, using clinically approved products and advanced machines to ensure that all treatments are safe, effective, and trustworthy.',
            image: cum1,
        },
        {
            title: 'Body Sculpting Expertise',
            description: "One of our specialties is non-invasive body sculpting using advanced technologies. Whether you want to enhance your body contours or target specific areas of stubborn fat, our expertise in body contouring ensures you achieve the desired results.",
            image: cum4,
        },
        {
            title: 'Exceptional Client Experience',
            description: 'At S3, we pride ourselves on providing a warm, welcoming, and comfortable environment. Our team is dedicated to offering exceptional service, ensuring that each client feels valued and supported throughout their treatment journey.',
            image: cum1,
        },
    ];

    return (
        <div style={{ backgroundColor: '#4c946c', border: '2px solid orange', boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <div className="container py-5">
                <div className="row">
                    {/* First Column */}
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                        {/* align-items-start for left alignment */}
                        <h2 className="text-start mb-3">Why Choose S3?</h2><br />

                        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
                            <div className="carousel-inner">
                                {carouselItem3.map((item, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <div className="card mb-3" style={{ border: '2px solid orange', borderRadius: '5px', padding: '20px', backgroundColor: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                            <div className="row g-0">
                                                {/* First column: Title and description */}
                                                <div className="col-md-6 d-flex flex-column justify-content-center text-start">
                                                    <h3 className="card-title" style={{ fontWeight: 'bold', color: 'white' }}>{item.title}</h3>
                                                    <p className="card-text" style={{ color: 'white' }}>{item.description}</p>
                                                </div>
                                                {/* Second column: Image */}
                                                <div className="col-6 d-flex justify-content-center">
                                                    <img 
                                                      src={item.image} 
                                                      alt={item.title} 
                                                      className="img-fluid rounded" 
                                                      style={{ height: '200px', width: 'auto' }} 
                                                    />
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
                                                <div className="col-6 d-flex justify-content-center">
                                                    <img 
                                                      src={item.image} 
                                                      alt={item.title} 
                                                      className="img-fluid rounded" 
                                                      style={{ height: '200px', width: 'auto' }} 
                                                    />
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
                                                <div className="col-6 d-flex justify-content-center">
                                                    <img 
                                                      src={item.image} 
                                                      alt={item.title} 
                                                      className="img-fluid rounded" 
                                                      style={{ height: '200px', width: 'auto' }} 
                                                    />
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
