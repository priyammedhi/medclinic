import React from 'react';
import dr1 from '../images/dr1.jpg'
import dr2 from '../images/dr2.jpg'
import dr3 from '../images/dr3.jpg'


const teamMembers = [
    {
        name: 'Miss Dhanvi Borah',
        title: 'CEO & Skin Expert',
        bio: 'Dhanvi Borah is a distinguished expert in cosmetology, trichology, laser techniques, and obesity management. She leads S3 with a focus on delivering personalized, result-driven skin solutions.',
        image: dr1, // Replace with actual image path
    },
    {
        name: 'Dr. Bhavit Bansal',
        title: 'Consultant Doctor',
        bio: 'Dr. Bhavit Bansal is an Integrative Medicine specialist with over five years of clinical experience from NIMHANS. He focuses on holistic care, treating lifestyle disorders, mental health issues, metabolic and neurological disorders, chronic back pain, and arthritis. Dr. Bansal offers personalized therapies such as yoga, diet counseling, acupuncture, and naturopathy, empowering patients to take control of their health.',
        image: dr2, // Replace with actual image path
    },
    {
        name: 'Dhanvi Borah',
        title: 'Dental Consultant Doctor',
        bio: 'Dr. Kuhina Changkakoti is a Dental Surgeon with 10 years of experience, specializing in general, cosmetic, and restorative dentistry, as well as root canal treatment, orthodontics, and implantology. She is dedicated to delivering personalized care, ensuring each patient receives tailored treatments for optimal oral health. Dr. Changkakoti emphasizes a comfortable and informative experience, empowering patients to take charge of their dental well-being and achieve a radiant smile.',
        image: dr3, // Replace with actual image path
    }
];

const MeetOurTeam = () => {
    return (
        <div style={{ backgroundColor: '#4c946c', paddingTop: '50px' }}>
            <div className="meet-our-team-section" >
                <h2 className="team-heading">Meet Our Team</h2>
                <p className="team-intro" style={{color:'white'}}>Our team is a blend of creativity and expertise, dedicated to delivering exceptional results in the skin care and aesthetic industry.</p>

                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`team-member ${index % 2 === 0 ? 'team-left' : 'team-right'}`} // Alternating layout
                    >
                        <img src={member.image} alt={member.name} className="team-member-image" />
                        <div className="team-member-info">
                            <h3 className="member-name">{member.name}</h3>
                            <h4 className="member-title" style={{color:'orange'}}>{member.title}</h4>
                            <p className="member-bio" style={{textAlign: 'justify', color:'white'}}>{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurTeam;