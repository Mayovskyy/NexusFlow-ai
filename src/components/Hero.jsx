import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--gradient-hero)',
            paddingTop: '3rem'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    background: 'rgba(127, 90, 240, 0.1)',
                    borderRadius: '50px',
                    border: '1px solid rgba(127, 90, 240, 0.3)',
                    marginBottom: '2rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: '500',
                    fontSize: '0.9rem'
                }}>
                    ✨ Now Available for US Real Estate & Home Services
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    marginBottom: '1.5rem',
                    maxWidth: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Stop Losing Leads to <br />
                    <span className="text-gradient">Missed Calls</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Our AI Voice Agents book appointments 24/7 so you never miss a deal to a competitor again. Instant setup, human-like conversations.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="mailto:mark@nexusflow-ai.com" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Book Your Free Demo <ArrowRight size={20} />
                    </a>
                    <a href="#samples" className="btn-outline">
                        Listen to Samples
                    </a>
                </div>

                <div style={{
                    marginTop: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={16} color="var(--accent-cyan)" /> 24/7 Availability
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={16} color="var(--accent-cyan)" /> Syncs with Calendar
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={16} color="var(--accent-cyan)" /> US-Based Numbers
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
