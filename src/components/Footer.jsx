import React from 'react'
import { Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-card)',
            padding: '4rem 0',
            marginTop: '4rem',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                                NexusFlow <span className="text-gradient">AI</span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '300px', marginBottom: '1.5rem' }}>
                                Automating appointments and customer service for high-growth service businesses.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                                <a href="mailto:hello@nexusflow-ai.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Mail size={16} color="var(--primary)" /> hello@nexusflow-ai.com
                                </a>
                                <a href="mailto:mark@nexusflow-ai.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Mail size={16} color="var(--primary)" /> mark@nexusflow-ai.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)' }}>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>© 2026 NexusFlow AI. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Twitter size={20} />
                        <Linkedin size={20} />
                        <Mail size={20} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
