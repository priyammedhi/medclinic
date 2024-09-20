import React from 'react';

// Card component for each service
function ServiceCard({ image, title, description }) {
    return (
        <div className="col-md-3 col-sm-6 col-12 mb-4">
            <div className="shadow-sm" style={{border:'1px solid orange', height:'300px', borderRadius:'50px'}}>
                <div className="card-body">
                    <h5 className="card-title text-center m-2 p-4" style={{ fontWeight: 'bold', backgroundColor:'orange', borderRadius:'100px' }}>
                        {title}
                    </h5>
                    <p className="card-text m-4" style={{textAlign:'justify'}}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MoreServicesCard() {
    return (
        <div className="col-md-3 col-sm-6 col-12 mb-4 more-services-card">
            <div className="h-100 d-flex align-items-center justify-content-center bg-transparent shadow-none">
                <div className="text-center">
                    <h3 style={{color:'orange'}}>And many more...</h3>
                    <a href="/services"><button className='btn btn-outline-light mt-3' style={{color:'orange'}}>Explore More</button></a>
                </div>
            </div>
        </div>
    );
}

// Main Services component
function Services() {
    return (
        <div style={{ backgroundColor: '#4c946c'}}>
            <div className="container py-5">
                <h2 className="text-center mb-4">Our Stellar Services</h2>
                <br />
                <div className="row" >
                    <ServiceCard
                        title="Skin Tightening"
                        description="Skin tightening machines use a variety of technologies to stimulate collagen and elastin production, which can help firm up sagging skin."
                    />
                    <ServiceCard
                        title="Skin Rejuvenation"
                        description="Skin rejuvenation machines use a variety of technologies to treat
                        signs of aging, improve skin texture, and promote overall skin
                        health. They can help with:
                        Wrinkles & fine Lines"
                    />
                    <ServiceCard
                        title="Open Pores Cure"
                        description="Lasers boost the skin's heating process by stimulating
                        collagen and elastin production. These two will
                        effectively minimize the size of open pores caused by
                        the ageing process and give your skin a smooth and
                        fresh look."
                    />
                    <MoreServicesCard />
                </div>
            </div>
        </div>
    );
}

export default Services;