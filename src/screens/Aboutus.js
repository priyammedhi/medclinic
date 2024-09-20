import React from 'react'
import Missonvision from '../components/Missonvision'
import WhyUs from '../components/WhyUs'
import Contactus from '../components/Contactus'


function Aboutus() {
    return (
        <div>
            <div className="epic-services-section" style={{
                backgroundImage: `url(${require('../images/docequip.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '160px 0',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1000px rgba(76, 148, 108, 0.8)'
            }}>
                <h1 style={{ color: 'orange', fontFamily: 'Playfair Display', fontSize: '4rem', fontWeight: 'bolder' }}>ABOUT US</h1>
                <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'Georgia', margin: '0 60px' }}>The Skin Science Solution (S3) Center is committed to staying at the forefront of the latest advancements in skin care and aesthetics. Their comprehensive range of services, from skin rejuvenation to face and body sculpting, demonstrates their ability to address a wide spectrum of skin concerns, ensuring clients receive the most effective and personalized treatments available.
                </p><br />
                <a href="#getinfo"><button className='btn btn-outline-light' style={{ color: 'orange', fontSize: '25px', padding: '15px 35px', borderRadius: '50px' }}>OUR SERVICES</button></a>
            </div>
            {/* <div className="row d-flex align-items-center justify-content-center">
                <h2>From the Owner</h2>
                <div className='col-lg-6 mb-3'>
                    <img
                        src={require('../images/dhanvi.jpg').default}
                        alt='Dr. Dhanvi Borah, CEO of Skin Science Solution'
                        style={{ maxWidth: '70%', borderRadius: '15px' }}
                    />
                </div>
                <div className='col-lg-6'>
                    <h1 style={{
                        fontSize: '1.2rem',
                        color: 'white',
                        textAlign: 'justify',
                        fontFamily: 'Playfair Display', marginTop: '10px', textAlign: 'left'
                    }}>
                        Dr. Dhanvi Borah
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'white',
                        textAlign: 'justify',
                        fontFamily: 'Playfair Display'
                    }}>
                        I am delighted to introduce the Skin Science Solution (S3) Center as a premier destination for exceptional skincare treatments. Led by your Skin Buddy, Miss Dhanvi Borah, the CEO and a distinguished skin expert, the center embodies a commitment to excellence. Her remarkable journey as a young entrepreneur highlights her dedication and expertise, supported by extensive training and certifications in cosmetology, trichology, skin aesthetics, laser techniques, obesity management from Mumbai, and additional expertise in nutrition and diet from leading beauty cities. This broad and comprehensive knowledge allows her to provide personalized, results-driven solutions tailored to each client's unique needs.
                    </p>
                </div>
            </div> */}
            <Missonvision />
            <WhyUs />
            <Contactus />
        </div>
    )
}

export default Aboutus
