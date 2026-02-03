import React from 'react'
import { Rocket, Settings, Headphones } from 'lucide-react'

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get Started in <span className="text-gradient">3 Simple Steps</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>No complex onboarding. We handle the technical heavy lifting.</p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    position: 'relative'
                }}>
                    {/* Connector Line (Desktop only) */}
                    <div className="connector" style={{
                        position: 'absolute',
                        top: '50px',
                        left: '10%',
                        right: '10%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                        zIndex: 0,
                        display: 'none' // Hidden by default, shown in media query via JS style or separate css class usually. Kept simple here.
                    }}></div>

                    {[
                        {
                            step: "01",
                            icon: <Headphones size={30} />,
                            title: "Onboarding & Setup",
                            desc: "We fill the AI with relevant information and build a custom script that mirrors your best sales agent."
                        },
                        {
                            step: "02",
                            icon: <Settings size={30} />,
                            title: "Build & Integrate",
                            desc: "We configure the AI voice agent and connect it to your Calendar and Phone System."
                        },
                        {
                            step: "03",
                            icon: <Rocket size={30} />,
                            title: "Launch & Scale",
                            desc: "Go live. Watch as missed calls turn into booked appointments automatically, 24/7."
                        }
                    ].map((item, index) => (
                        <div key={index} style={{
                            flex: '1 1 300px',
                            textAlign: 'center',
                            zIndex: 1,
                            background: 'var(--bg-dark)', // To cover connector line if needed
                            padding: '1rem'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--bg-card)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                border: '2px solid var(--primary)',
                                color: 'var(--text-main)',
                                position: 'relative'
                            }}>
                                {item.icon}
                                <div style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-5px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    fontSize: '0.8rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold'
                                }}>{item.step}</div>
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
