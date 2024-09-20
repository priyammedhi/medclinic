import React from 'react';
import dr1 from '../images/dr1.jpg'
import dr2 from '../images/dr2.jpg'

const teamMembers = [
    {
        name: 'Miss Dhanvi Borah',
        title: 'CEO & Skin Expert',
        bio: 'Dhanvi Borah is a distinguished expert in cosmetology, trichology, laser techniques, and obesity management. She leads S3 with a focus on delivering personalized, result-driven skin solutions.',
        image: dr1, // Replace with actual image path
    },
    {
        name: 'Dhanvi Borah',
        title: 'Aesthetic Specialist',
        bio: 'Specializes in skin aesthetics and body contouring. With years of experience, she ensures customized treatments tailored to each client\'s needs.',
        image: dr2, // Replace with actual image path
    },
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