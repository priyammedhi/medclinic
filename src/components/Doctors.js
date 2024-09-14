import React from 'react';
import careImage1 from '../images/momo.png';

function Doctors() {
    return (
        <div style={{ backgroundColor: '#4c946c', marginTop: '2px', padding: '50px 0' }}>
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
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>MBBS</span>
                            <span style={{ border: '1px solid white', borderRadius: '20px', padding: '5px', color: 'white' }}>Dermatologist</span>
                        </div>
                        <br />
                        <p style={{textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quibusdam aliquid nemo voluptatem, debitis ratione, fugiat maiores dolorum impedit, praesentium quisquam dicta harum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctors;
