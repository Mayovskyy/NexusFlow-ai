import React from 'react';
import { Play } from 'lucide-react';

const VideoDemo = () => {
    return (
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>See it in <span className="text-gradient">Action</span></h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Watch how NexusFlow AI handles real world scenarios.</p>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                    height: 0,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    background: '#000'
                }}>
                    {/* Using iframe for the Google Drive preview if possible, but GDrive preview links can be finicky. 
              Using the preview URL provided. */}
                    <iframe
                        src="https://www.youtube.com/embed/O2mwIJWkuDk"
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default VideoDemo;
