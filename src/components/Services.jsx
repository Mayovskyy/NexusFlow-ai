import React from 'react'
import { PhoneIncoming, Filter, Database } from 'lucide-react'

const Services = () => {
    return (
        <section id="solutions" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Intelligence. <span style={{ color: 'var(--text-muted)' }}>Built In.</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Powerful voice AI that feels human, not robotic.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {[
                        {
                            icon: <PhoneIncoming size={32} color="var(--primary)" />,
                            title: "AI Voice Receptionist",
                            desc: "Human-like voice agents that handle inbound calls, answer FAQs, and book appointments directly on your calendar. They never sleep, never get sick, and handle infinite concurrent calls."
                        },
                        {
                            icon: <Filter size={32} color="var(--primary)" />,
                            title: "Smart Lead Qualification",
                            desc: "Stop wasting time on tire-kickers. Our AI asks the right questions to filter out bad leads instantly, ensuring you only speak to qualified prospects ready to buy."
                        }
                    ].map((service, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '3rem',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
