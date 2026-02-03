import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav style={{
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            background: 'rgba(2, 12, 27, 0.8)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 'var(--header-height)'
            }}>
                {/* Logo */}
                <div style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit, sans-serif' }}>
                    NexusFlow <span className="text-gradient">AI</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#solutions" style={{ color: 'var(--text-muted)' }}>Solutions</a>
                    <a href="#how-it-works" style={{ color: 'var(--text-muted)' }}>How It Works</a>
                    <a href="#results" style={{ color: 'var(--text-muted)' }}>Results</a>
                    <a href="mailto:mark@nexusflow-ai.com" className="btn-primary">
                        Book Demo
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'white' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: 'var(--header-height)',
                    left: 0,
                    width: '100%',
                    background: 'var(--bg-card)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <a href="#solutions" onClick={() => setIsOpen(false)}>Solutions</a>
                    <a href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a>
                    <a href="#results" onClick={() => setIsOpen(false)}>Results</a>
                    <a href="mailto:mark@nexusflow-ai.com" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Book Demo</a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    )
}

export default Navbar
