import React from 'react'

function Missonvision() {
    return (
        <div style={{ backgroundColor: '#4c946c', padding:'100px 0'}}>
            <div className="container">
                <div className="row mission-vision-section">

                    {/* Mission Section */}
                    <div className="col-lg-3 mission-card mb-3" style={{backgroundColor: '#3c7354'}}>
                        <div className="card-content m-3">
                            <div className="icon"><i className="fas fa-medal"></i></div>
                            <h3 className="card-title">OUR MISSION</h3>
                            <p className="card-description"style={{color:'white'}}>
                                Compassionate medical professionals are key to ensuring that everyone has access to quality healthcare at an affordable cost. By providing personalized attention, understanding, and support, our medical professionals can help make sure that everyone has access to quality healthcare services at a price they can afford.
                            </p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="col-lg-3 vision-card mb-3" style={{backgroundColor: '#3c7354'}}>
                        <div className="card-content m-3">
                            <div className="icon"><i className="fas fa-rocket"></i></div>
                            <h3 className="card-title">OUR VISION</h3>
                            <p className="card-description" style={{color:'white'}}>
                                Quality healthcare is a right that every individual should be entitled to. To ensure that everyone has access to quality healthcare, it is necessary to develop a benchmark in order to measure and evaluate the quality of care being provided by our medical professionals.
                            </p>
                        </div>
                    </div>

                    {/* Hospital Description */}
                    <div className="col-lg-5 hospital-description mb-3">
                        <h3>One of the Best Private Hospitals in Guwahati</h3>
                        <h2>The Best Multispeciality Private Hospital in Guwahati</h2>
                        <p>
                            Leveraging its track record for medical excellence, our hospital is committed to making a difference in people’s lives through excellent patient care, steadily expanding its reach in markets where demand for quality care is strong and growing. We are a one-stop destination for all your healthcare needs, equipped with the most advanced diagnostic tools and technologies sourced from around the world. Our hospital has an experienced team of lab technicians who are capable of conducting 100% accurate test results. With state-of-the-art technologies and best lab tests, we ensure that you get the best treatment and care.
                        </p>
                        <a href="tel:+4733378901"><button  className="contact-button">Contact Us</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Missonvision
