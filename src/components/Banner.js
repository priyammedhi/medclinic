import React from 'react';

function Banner() {
  return (
    <div>
      <div className="epic-services-section" style={{
                backgroundImage: `url(${require('../images/momo.jpg')})`,
                backgroundSize:'cover',
                backgroundPosition: 'center',
                padding: '120px 0',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1000px rgba(76, 148, 108, 0.7)', // Adds a greenish overlay (rgba)
            }}
            >
        <h1
          style={{
            color: 'orange',
            fontFamily: 'Playfair Display',
            fontSize: '4rem',
            fontWeight: 'bolder',
          }}
        >
          Welcome to Skin Science Solution
        </h1>
        <div style={{
            display: 'flex',
            justifyContent: 'center', // Centers the paragraph container
            textAlign: 'justify',
        }}>
          <p style={{
            color: 'white',
            fontSize: '1.5rem', // Default font size for larger screens
            fontFamily: 'Georgia',
            width: '50%',
            '@media (max-width: 768px)': { // Apply this for small screens
              fontSize: '0.5rem'
            }
          }}>
            Skin Science Solution (S3) Center is an excellent choice for those seeking superior skin care and aesthetic services. With your Skin Buddy, Miss Dhanvi Borah leading the team, clients can trust they are in expert hands, receiving tailored attention and care that aligns with their unique goals and needs.
          </p>
        </div>
        <br />
        <a href="/medclinic/about">
          <button
            className="btn btn-outline-light"
            style={{
              fontSize: '25px',
              padding: '15px 35px',
              borderRadius: '50px',
              color:'orange'
            }}
          >
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
