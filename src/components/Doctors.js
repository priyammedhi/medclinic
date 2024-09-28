import React from 'react';
import careImage1 from '../images/momo.png';
import careImage2 from '../images/bhavit.png';
import careImage3 from '../images/kuhina.png';


function Doctors() {
    return (
        <div style={{ backgroundColor: '#4c946c', marginTop: '1px', padding: '50px 0' }}>
            <div className="container">
                <h1 className="d-flex justify-content-left mb-5">MEET SKIN BUDDIES</h1>
                <div className="row align-items-start">
                    {/* Doctor Image */}
                    <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                        <img src={careImage1} style={{ height: '300px', width: 'auto', borderRadius: '10px' }} alt="Doctor" />
                    </div>

                    {/* Doctor Information */}
                    <div className="col-md-7">
                        <h2 className="d-flex justify-content-left ">Dhanvi</h2>
                        <br />
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>B&WSSC certified</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Aesthetician</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Dermatologist</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Laser-specialist</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Trichologist</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Cosmetologist</span>
                        </div>
                        <br />
                        <p style={{textAlign:'justify'}}>
                        Miss Dhanvi Borah, CEO of the Skin Science Solution (S3) Center, is a highly skilled expert in skin care and body sculpting, certified in cosmetology, trichology, laser techniques, and obesity management. With a comprehensive understanding of aesthetics, she delivers tailored treatments for skin rejuvenation, tightening, and body contouring, ensuring optimal results for her clients.
                        </p>
                    </div>
                </div>
                <div className="row align-items-start mt-5">
                    {/* Doctor Image */}
                    <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                        <img src={careImage2} style={{ height: '300px', width: 'auto', borderRadius: '10px' }} alt="Doctor" />
                    </div>

                    {/* Doctor Information */}
                    <div className="col-md-7">
                        <h2 className="d-flex justify-content-left ">Dr. Bhavit Bansal</h2>
                        <br />
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Consultant Doctor</span>
                        </div>
                        <br />
                        <p style={{textAlign:'justify'}}>
                        Dr. Bhavit Bansal, an Integrative Medicine expert from NIMHANS with over five years of experience, focuses on holistic healthcare by addressing physical, mental, and emotional well-being. He specializes in treating lifestyle disorders, mental health issues, metabolic and neurological disorders, arthritis, and chronic back pain through personalized therapies, yoga, diet counseling, acupuncture, and naturopathy.
                        </p>
                    </div>
                </div>
                <div className="row align-items-start mt-5">
                    {/* Doctor Image */}
                    <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                        <img src={careImage3} style={{ height: '300px', width: 'auto', borderRadius: '10px' }} alt="Doctor" />
                    </div>

                    {/* Doctor Information */}
                    <div className="col-md-7">
                        <h2 className="d-flex justify-content-left ">Dr. Kuhina Changkakoti</h2>
                        <br />
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Dental Consultant Doctor</span>
                        </div>
                        <br />
                        <p style={{textAlign:'justify'}}>
                        Dr. Kuhina Changkakoti, a dedicated Dental Surgeon with 10 years of experience, specializes in general, cosmetic, and restorative dentistry, as well as root canal treatments, orthodontics, and implantology. She provides personalized care, ensuring each patient receives tailored treatments for optimal oral health and a confident smile, creating a comfortable and empowering dental experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctors;
