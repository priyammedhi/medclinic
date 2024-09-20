import React from 'react';
import careImage1 from '../images/momo.png';

function Doctors() {
    return (
        <div style={{ backgroundColor: '#4c946c', marginTop: '1px', padding: '50px 0' }}>
            <div className="container">
                <h1 className="d-flex justify-content-left mb-5">MEET SKIN BUDDY</h1>
                <div className="row align-items-start">
                    {/* Doctor Image */}
                    <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
                        <img src={careImage1} style={{ height: '300px', width: 'auto', borderRadius: '10px' }} alt="Doctor" />
                    </div>

                    {/* Doctor Information */}
                    <div className="col-md-7">
                        <h2 className="d-flex justify-content-left ">Dhanvi Borah</h2>
                        <br />
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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
            </div>
        </div>
    );
}

export default Doctors;
