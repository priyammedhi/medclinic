import React, { useState } from 'react';

function QNA() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        { id: 1, question: 'What is S3', answer: "S3 stands for Skin Science Solution, which represents the center's focus on providing advanced and scientific approaches to skin care solutions. The acronym reflects the center's commitment to offering high-quality, results-driven treatments that integrate the latest advancements in skin science and aesthetics." },
        { id: 2, question: 'What services do you offer?', answer: 'The Skin Science Solution (S3) Center offers services including skin rejuvenation, face and body sculpting, laser treatments, cosmetology, trichology, obesity management, and nutritional guidance.' },
        { id: 3, question: 'Do you have specialist doctors?', answer: 'Yes, we have specialists in various fields such as dermatology, cardiology, and more.' },
        { id: 4, question: 'What services does the S3 Center provide?', answer: 'The S3 Center offers a wide range of services, including skin rejuvenation, face and body sculpting, and advanced machine technology treatments for body contouring.' },
        { id: 5, question: 'Why should clients choose the Skin Science Solution (S3) Center?', answer: 'Clients can trust that they are in expert hands with Miss Dhanvi Borah, who leads a team dedicated to delivering superior, personalized skin care and aesthetic services that align with individual goals and needs.' },
        { id: 6, question: 'Why to choose S3?', answer: 'Choose S3 for personalized, results-driven skin and body treatments led by expert Miss Dhanvi Borah, utilizing the latest advancements in skin care and aesthetics.' },
        { id: 7, question: 'How to make appointments?', answer: "To make an appointment at the Skin Science Solution (S3) Center, you can call, email, or visit the center's website to book your preferred time slot from the given phone number or mail." },

    ];

    const toggleAnswer = (id) => {
        setActiveQuestion(prev => (prev === id ? null : id)); // If clicked again, hide; otherwise, show the new answer
    };

    return (
        <div style={{backgroundColor: '#4c946c'}}>
            <div className="container py-5" style={{border:'2px solid orange', borderRadius:'20px'}}>
                <h2 className="text-center mb-4">Frequently Asked Questions</h2><hr />
                <div className="accordion">
                    {questions.map(q => (
                        <div key={q.id} className="mb-3 shadow-sm" style={{border:'2px solid orange',borderRadius:'50px'}}>
                            <div
                                className="card-header d-flex justify-content-between align-items-center p-3 bg-transparent text-white"
                                style={{ cursor: 'pointer', borderRadius: '0.5rem'}}
                                onClick={() => toggleAnswer(q.id)}
                            >
                                <h5 className="mb-0">{q.question}</h5>
                                <span 
                                    className="h3 mb-0 d-flex align-items-center justify-content-center" 
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '2px solid white',
                                        borderRadius: '50%',
                                        padding: '5px',
                                        textAlign: 'center'
                                    }}
                                >{activeQuestion === q.id ? '-' : '+'}</span>
                            </div>
                            {activeQuestion === q.id && (
                                <div className="card-body d-flex justify-content-left m-3">
                                    <hr />
                                    <p className="mb-0">{q.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QNA;
