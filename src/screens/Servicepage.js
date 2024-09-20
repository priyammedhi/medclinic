import { React, useState } from 'react'
import Contactus from '../components/Contactus';
import hydra from '../images/hydrafacial.jpg';
import ultraTherapy from '../images/ultherapy.jpg';
import microneedling from '../images/microneedeling.jpg';
import laserHairRemoval from '../images/laser_hair_removal.jpg';
import iplPhotofacial from '../images/ipl.jpg';
import carbonFacial from '../images/carbon_laser_peel.jpg';
import chemicalPeel from '../images/chemical peel.jpg';
import vitalizePeel from '../images/vitalize peel.jpg';
import vegPeel from '../images/veg_peel.jpg';
import skinTexture from '../images/skintextureimprovement.jpg';
import acneScar from '../images/acne_scar removal.jpg';
import pigmentation from '../images/pigmentation_Removal.jpg';
import birthMark from '../images/birthmark_removal.jpg';
import fineLinesWrinkles from '../images/wrinkles.jpg';
import sunDamage from '../images/sun_damage_cure.jpg';
import skinTone from '../images/skin_Tone_improvement.jpg';
import excimerVitiligo from '../images/virtiligo.jpg';
import antiPuffiness from '../images/anti puffiness.jpg';
import malasma from '../images/malasma_removal.jpg';
import laserHelmet from '../images/helmet.jpg';
import oxygeneo from '../images/oxygeno.jpg';
import skinTightening from '../images/skintightning.jpg';
import skinRejuvenation from '../images/skinrejuvination.jpg';
import openPores from '../images/openpores.jpg';


function Servicepage() {
    const [selectedService, setSelectedService] = useState(null);

    const serviceDetails = {
        "Hydrafacial": {
            image: hydra,
            description: 'HydraFacials can help with a variety of skin conditions, including: Fine lines and wrinkles, Pigmentation, Acne, Pore size, and Oily skin and congestion. HydraFacials are considered more effective than a typical spa facial and are designed to improve skin health and appearance for up to seven days. They are non-invasive and practically painless, and can be administered by a licensed esthetician, dermatologist, or plastic surgeon.',
            price: "2499"
        },
        "Ultra Therapy": {
            image: ultraTherapy,
            description: "Ultherapy is a non-invasive, non-surgical procedure that uses ultrasound energy to tighten and lift loose skin and wrinkles. It's FDA approved and is offered by many medical and cosmetic professionals. Ultherapy can be a good option for people who don't want to get a face lift or have a more invasive procedure. There's usually no downtime after treatment, and most people only need one or two treatments. Full results can take three to six months to appear.",
            price: "1699"
        },
        "Microneedling": {
            image: microneedling,
            description: `Microneedling is a minimally invasive skin treatment that uses tiny needles to stimulate collagen production and treat a variety of skin conditions.
            
            How it works:
            
            A healthcare provider uses short, thin needles to create tiny punctures in the skin, which stimulates the body to produce collagen and elastin. These proteins help keep skin firm and smooth.
            
            Who can get it:
            
            Microneedling is safe for all skin tones.`,
            price: "1999"
        },
        "Laser Hair Removal": {
            image: laserHairRemoval,
            description: `Laser hair removal is a procedure that uses a laser to reduce unwanted hair on the body. 
            
            How it works:
            
            The laser beam damages hair follicles with intense heat, which temporarily stops hair growth. The laser vaporizes the hair, which can cause a sulfur-like smell and small plumes of smoke.
            
            Results:
            
            Laser hair removal isn't permanent, but it can reduce the number of unwanted hairs in an area. The hair that grows back is usually finer, lighter, and fewer in number.`,
            price: "1999"
        },
        "IPL Photofacial": {
            image: iplPhotofacial,
            description: `An IPL (intense pulsed light) photofacial, also known as Pulsed Light Therapy, is a skin treatment that uses light to improve skin tone and texture. It can treat age spots, sun damage, rosacea, spider veins, hyperpigmentation, and discoloration.
            
            Where it can be used:
            
            IPL photofacials can be used on the face, neck, chest, arms, hands, legs, and back.
            
            Treatment sessions:
            
            IPL photofacial treatments typically last 20 minutes to an hour, and clients usually get 3 to 6 treatments spaced one month apart.
            
            Side effects:
            
            After treatment, your skin may appear slightly red and swollen. Freckles and sunspots may initially get darker and flake off within one to three weeks.`,
            price: "2499"
        },
        "Carbon Facial": {
            image: carbonFacial,
            description: `A carbon laser peel, also known as a photo facial, is a non-invasive laser treatment that can help rejuvenate your skin.
            
            How it works:
            
            A carbon solution is applied to the skin, then a laser heats and vaporizes the carbon, exfoliating the skin and stimulating collagen production.
            
            Benefits:
            
            Carbon laser peels can help with acne, enlarged pores, oily skin, uneven skin tone, blackheads, dull skin, and rosacea.`,
            price: "2749"
        },
        "Chemical Peel": {
            image: chemicalPeel,
            description: `A chemical peel is a treatment used to improve and smooth the texture of the skin. The skin on the face is most commonly treated, but peels can also be performed on the body. Chemical peels are intended to remove the outermost layers of the skin.`,
            price: "1599"
        },
        "Vitalize Peel": {
            image: vitalizePeel,
            description: `Vitalize Peel helps fight the effects of time, sun damage, and environmental aging. This powerful yet non-damaging peel can take years off aging skin. It is perfect for patients with mild to moderate skin conditions, including fine lines and wrinkles, sun damage, pigment irregularities, and acne.`,
            price: "1599"
        },
        "Veg Peel": {
            image: vegPeel,
            description: `Vegetable peels are chemical-free and contain compounds that can enhance skin.
            
            Benefits:
            
            - Dry skin repair: Vegetable peels can help repair dry skin.
            
            - Under-eye puffiness: Vegetable peels can help reduce under-eye puffiness.
            
            - Dark circles: Vegetable peels can help reduce dark circles.
            
            - Remove whiteheads, pimple scars, and blemishes.
            
            - Fairer, glowing skin: Vegetable peels can help give you fairer, glowing skin.
            
            - Healthy, radiant skin: Vegetable peels can lead to healthy, radiant skin.`,
            price: "1899"
        },
        "Skin Texture Improvement": {
            image: skinTexture,
            description: `Laser treatments can improve skin texture by stimulating collagen production and removing the outer layer of skin.
            
            Laser resurfacing
            
            Also known as lasabrasion, laser peel, or laser vaporization, this procedure uses a laser beam to remove the epidermis and heat the dermis. This stimulates collagen production, resulting in smoother, firmer skin.`,
            price: "1699"
        },
        "Acne Scar Removal": {
            image: acneScar,
            description: `Laser treatment for acne scars uses light to destroy the scar tissue on the top layer of the skin and encourages the growth of new healthy skin cells to replace the scar tissue. This treatment won't always get rid of acne scars completely, but it can make them less noticeable and minimize pain.`,
            price: "3549"
        },
        "Pigmentation removal": {
            image: pigmentation,
            description: `High-energy pulsing lasers can safely and effectively remove many unwanted brown and red spots on your skin, including liver spots, age spots, sun spots, broken capillaries, birthmarks, and angiomas.`,
            price: "3549            "
        },
        "Birth mark removal": {
            image: birthMark,
            description: `When the laser light enters the skin tissue, it is converted into heat and eliminates blood vessels. For birthmarks that are brown or blue, the laser is used to target and decrease melanin, the substance responsible for skin pigment`,
            price: "1649            "
        },
        "Finalines & wrinkle cure": {
            image: fineLinesWrinkles,
            description: `There are many ways to reduce the appearance of wrinkles, including prescription creams and serums, Botox injections, chemical peels, facial fillers, laser resurfacing, and face-lifts.`,
            price: "6999            "
        },
        "Sun damage cure": {
            image: sunDamage,
            description: `Laser therapy can be used to treat sun damage, including brown and red spots, on almost any part of the body. Different types of lasers can address different concerns, such as fine lines, brown spots, and enlarged pores. Laser treatments can take less than 30 minutes, but downtime depends on the type of laser used.`,
            price: "2699"
        },
        "Skin tone improvement": {
            image: skinTone,
            description: `Laser treatments can improve skin tone and texture in several ways:

            Laser skin resurfacing
            
            Also known as a laser peel, this procedure removes the outer layer of skin, called the epidermis, and heats the underlying dermis. This stimulates collagen production and the growth of new skin, which can make skin appear tighter and younger. Laser skin resurfacing can help with wrinkles, age spots, sunspots, redness, rosacea, and acne scarring.`,
            price: "1749            "
        },
        "Excimer Vitiligo": {
            image: excimerVitiligo,
            description: `Excimer lasers are a type of UV laser that can be used to treat vitiligo, a condition that causes patches of skin to lose color. The laser is used to focus UVB light on the affected areas of skin, which may stimulate repigmentation and restore color.`,
            price: "3999"
        },
        "Anti puffiness & face lift": {
            image: antiPuffiness,
            description: `Laser treatment for acne scars uses light to destroy the scar tissue on the top layer of the skin and encourages the growth of new healthy skin cells to replace the scar tissue. This treatment won't always get rid of acne scars completely, but it can make them less noticeable and minimize pain.`,
            price: "3499"
        },
        "Malasma removal": {
            image: malasma,
            description: `Intense pulsed light (IPL) laser uses a broad spectrum of light wavelengths to target hyperpigmented areas directly. The light pulses heat and destroys melanin to remove discoloration and restore a more even complexion.`,
            price: "2999"
        },
        "Laser helmet": {
            image: laserHelmet,
            description: `Red light therapy is a form of LLLT, also known as photobiomodulation. It uses light of specific wavelengths to stimulate your hair growth.`,
            price: "2499"
        },
        "Oxygeneo": {
            image: oxygeneo,
            description: `Oxygeneo is a non-invasive facial treatment that uses oxygenation, exfoliation, and infusion to rejuvenate your skin. It's safe for all skin types, ages, and ethnicities.`,
            price: "1999"
        },
        "Skin tightening": {
            image: skinTightening,
            description: `Skin tightening machines use a variety of technologies to stimulate collagen and elastin production, which can help firm up sagging skin.

            Via - RF, Microwaves, Ultrasound etc`,
            price: "2499"
        },
        "Skin rejuvenation": {
            image: skinRejuvenation,
            description: `Skin rejuvenation machines use a variety of technologies to treat signs of aging, improve skin texture, and promote overall skin health. They can help with:

            Wrinkles and fine lines
            
            Skin rejuvenation machines can reduce the appearance of wrinkles and fine llins, pigmentation, collagen production, skin tecture, Acne scares, open pores & skin products absorption.`,
            price: "4799"
        },
        "Open pores cure": {
            image: openPores,
            description: `Lasers boost the skin's healing process by stimulating collagen and elastin production. These two will effectively minimize the size of open pores caused by the ageing process and give your skin a smooth and fresh look. And the results are long-lasting with just two sessions of laser resurfacing.`,
            price: "1699"
        }
    };

    return (
        <div style={{ backgroundColor: '#4c946c', paddingBottom: '20px' }}>

            <div className="epic-services-section" style={{
                backgroundImage: `url(${require('../images/docequip.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '160px 0',
                marginBottom: '50px',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1000px rgba(76, 148, 108, 0.8)'
            }}>
                <h1 style={{ color: 'orange', fontFamily: 'Playfair Display', fontSize: '4rem', fontWeight: 'bolder' }}>PREMIER CARE</h1>
                <p style={{ color: 'white', fontSize: '2rem', fontFamily: 'Georgia' }}>Delivering Exceptional Care and Extraordinary Results in Every Skin Treatment!</p><br />
                <a href="#getinfo"><button className='btn btn-outline-light' style={{ color: 'orange', fontSize: '25px', padding: '15px 35px', borderRadius: '50px' }}>OUR SERVICES</button></a>
            </div>

            {/* Conditionally render the service details */}
            {selectedService && (
                <div className='container text-fluid' style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Georgia', fontSize: '3rem', color: 'orange' }}>{selectedService}
                        <button className="btn btn-outline-light dropdown-toggle" style={{ color: 'orange', fontSize: '20px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <div className="row">
                                <div className="col-6">
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Hydrafacial')}>Hydrafacial</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Ultra Therapy')}>Ultra Therapy</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Microneedling')}>Microneedling</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Laser Hair Removal')}>Laser Hair Removal</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('IPL Photofacial')}>IPL Photofacial</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Carbon Facial')}>Carbon Facial</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Chemical Peel')}>Chemical Peel</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Vitalize Peel')}>Vitalize Peel</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Veg Peel')}>Veg Peel</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Skin Texture Improvement')}>Skin Texture Improvement</a></li>
                                </div>
                                <div className="col-6">
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Acne Scar Removal')}>Acne Scar Removal</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Pigmentation removal')}>Pigmentation Removal</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Birth mark removal')}>Birth Mark Removal</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Finalines & wrinkle cure')}>Finalines & Wrinkle Cure</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Sun damage cure')}>Sun Damage Cure</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Skin tone improvement')}>Skin Tone Improvement</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Excimer Vitiligo')}>Excimer Vitiligo</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Anti puffiness & face lift')}>Anti Puffiness & Face Lift</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Malasma removal')}>Malasma Removal</a></li>
                                    <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Laser helmet')}>Laser Helmet</a></li>
                                </div>
                            </div>
                        </ul>
                    </h2><br />
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className='col-lg-6 mb-3'>
                            <img src={serviceDetails[selectedService]?.image} alt={selectedService} style={{ maxWidth: '70%', borderRadius: '15px' }} />
                        </div>
                        <div className='col-lg-6 '>
                            <p style={{ fontSize: '1.2rem', color: 'white', marginTop: '10px', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                {serviceDetails[selectedService]?.description}
                            </p>
                            <p style={{ fontSize: '1.2rem', color: 'white', marginTop: '10px', textAlign: 'left', fontFamily: 'Playfair Display' }}>
                                <strong>Pricing : ₹</strong> <strong>{serviceDetails[selectedService]?.price}</strong>
                            </p>
                        </div>
                    </div>

                    {/* Brochure section */}
                    {serviceDetails[selectedService]?.link && (
                        <div>
                            <p className="mb-4">Explore our latest brochure to know more about our services and offerings.</p>
                            <div className="d-flex justify-content-around">
                                <a href={serviceDetails[selectedService].link} download className="btn btn-success">
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    )}
                    <hr className='my-5' />
                </div>
            )}

            <div className="container">
                <div className="row mb-5">
                    {/* Mission and Vision Section Side by Side */}
                    <div className="col-lg-6 pt-5 mb-4" data-aos="fade-down">
                        <div style={{ backgroundColor: '#3c7354', borderRadius: '15px', padding: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' }}>
                            <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 'bolder', fontFamily: 'Georgia' }}>OUR MISSION</h1>
                            {/* <img src={require('../images/WhatsApp Image 2024-08-12 at 11.07.32_8c25ad69.jpg')} alt="Our Logo" className="img-fluid my-4" style={{ maxWidth: '100%', borderRadius: "15px" }} /> */}
                            <p style={{ fontSize: '1.2rem', color: 'white', textAlign: 'justify', fontFamily: 'Playfair Display' }}>
                                TThe mission of the Skin Science Solution (S3) Center is to deliver personalized, high-quality skin care and aesthetic treatments that cater to the unique needs of every individual. By combining advanced technology with deep expertise in cosmetology, trichology, and laser techniques, the center strives to enhance each client's natural beauty while promoting holistic skin health.<br />
                                Ultimately, the Skin Science Solution (S3) Center aims to be a trusted partner in each client’s skincare and aesthetic journey, building relationships that are rooted in trust, transparency, and a commitment to excellence. Ultimately, the Skin Science Solution (S3) Center aims to be a trusted partner in each client’s skincare and aesthetic journey, building relationships that are rooted in trust, transparency, and a commitment to excellence. By continuously evolving and staying ahead of the latest industry trends, S3 ensures that it can offer the most advanced, effective, and safe treatments, always delivering exceptional results that exceed client expectations.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up">
                        <div style={{ backgroundColor: '#3c7354', borderRadius: '15px', padding: '20px', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' }}>
                            <h1 style={{ fontSize: '2.5rem', fontFamily: 'Georgia', color: 'white', fontWeight: 'bolder' }}>VISION FOR THE FUTURE</h1>
                            <p style={{ fontSize: '1.2rem', textAlign: 'justify', color: 'white', fontFamily: 'Playfair Display' }}>
                                The vision of the Skin Science Solution (S3) Center is to become a global leader in the skin care and aesthetics industry, setting new standards for innovative and results-driven treatments. By staying at the cutting edge of technological advancements and continuously refining its expertise, S3 aspires to empower individuals to achieve their best skin health and aesthetic goals. The center envisions a future where customized treatments and holistic care enable clients to experience rejuvenated, radiant skin that reflects their inner vitality.
                            </p>
                        </div>

                        <div className='pt-4' id='getinfo'>
                            <div className="mb-0 d-flex justify-content-center" style={{ backgroundColor: '#3c7354', borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                                <div className='m-2 p-5'>
                                    <h1 style={{ fontFamily: 'Georgia', fontSize: '3rem', color: 'orange' }}>SERVICES WE PROVIDE:</h1>
                                    <br /><button className="btn btn-outline-light dropdown-toggle" style={{ color: 'orange', fontSize: '20px' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Get Info
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <div className="row">
                                            {/* Full width on small screens, two columns on medium and larger */}
                                            <div className="col-12 col-md-6">
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Hydrafacial')}>Hydrafacial</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Ultra Therapy')}>Ultra Therapy</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Microneedling')}>Microneedling</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Laser Hair Removal')}>Laser Hair Removal</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('IPL Photofacial')}>IPL Photofacial</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Carbon Facial')}>Carbon Facial</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Chemical Peel')}>Chemical Peel</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Vitalize Peel')}>Vitalize Peel</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Veg Peel')}>Veg Peel</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Skin Texture Improvement')}>Skin Texture Improvement</a></li>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Acne Scar Removal')}>Acne Scar Removal</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Pigmentation removal')}>Pigmentation Removal</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Birth mark removal')}>Birth Mark Removal</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Finalines & wrinkle cure')}>Finalines & Wrinkle Cure</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Sun damage cure')}>Sun Damage Cure</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Skin tone improvement')}>Skin Tone Improvement</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Excimer Vitiligo')}>Excimer Vitiligo</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Anti puffiness & face lift')}>Anti Puffiness & Face Lift</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Malasma removal')}>Malasma Removal</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setSelectedService('Laser helmet')}>Laser Helmet</a></li>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <Contactus />


        </div>
    );
}

export default Servicepage