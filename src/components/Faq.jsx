import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '1.5rem 0'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'none',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-main)',
                    fontSize: '1.2rem',
                    textAlign: 'left',
                    fontWeight: '500'
                }}
            >
                {question}
                {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--primary)" />}
            </button>
            {isOpen && (
                <div style={{ marginTop: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {answer}
                </div>
            )}
        </div>
    )
}

const Faq = () => {
    return (
        <section className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Frequently Asked Questions</h2>

                <div>
                    <FaqItem
                        question="Does it sound like a robot?"
                        answer="Not at all. We use valid advanced voice synthesis that includes pauses, filler words (like 'um' or 'uh'), and natural intonation. Most callers don't realize they are speaking to an AI."
                    />
                    <FaqItem
                        question="Can it integrate with my Calendar?"
                        answer="Yes! We integrate natively with Google Calendar, Outlook, Calendly, and most major booking platforms to schedule appointments in real-time."
                    />
                    <FaqItem
                        question="What happens if the AI doesn't know the answer?"
                        answer="You can set custom fallback rules. If the AI encounters a complex query, it can take a message, mark it as high priority, or transfer the call to a human staff member immediately."
                    />
                    <FaqItem
                        question="Is there a contract?"
                        answer="No, we operate on a month-to-month basis. You can cancel anytime. We believe our results should keep you staying, not a piece of paper."
                    />
                </div>
            </div>
        </section>
    )
}

export default Faq
