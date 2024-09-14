import React, { useState } from 'react';

function QNA() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        { id: 1, question: 'What is Medix Clinic?', answer: 'Medix Clinic is a health center providing top-notch medical care.' },
        { id: 2, question: 'What services do you offer?', answer: 'We offer general health checkups, vaccinations, and specialized treatments.' },
        { id: 3, question: 'Do you have specialist doctors?', answer: 'Yes, we have specialists in various fields such as dermatology, cardiology, and more.' },
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
