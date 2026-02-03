import React from 'react'
import { XCircle, Clock, DollarSign } from 'lucide-react'

const Problem = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Cost of <span style={{ color: '#ef4444' }}>Missed Opportunities</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Most service businesses are bleeding revenue without realizing it.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        {
                            icon: <XCircle size={40} color="#ef4444" />,
                            title: "30% of Calls Go Unanswered",
                            desc: "Every missed call is a lead handing money to your competitor because you were on a job site."
                        },
                        {
                            icon: <Clock size={40} color="#ef4444" />,
                            title: "Hours Wasted on Admin",
                            desc: "Manual follow-ups, scheduling, and qualifying leads takes valuable time away from actual work."
                        },
                        {
                            icon: <DollarSign size={40} color="#ef4444" />,
                            title: "Inconsistent Follow-up",
                            desc: "Speed to lead is everything. If you don't answer within 5 minutes, your chances of closing drop by 80%."
                        }
                    ].map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            padding: '2rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>{item.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problem
