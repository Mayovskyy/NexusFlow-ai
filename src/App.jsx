import Layout from './components/Layout'
import Hero from './components/Hero'
import VideoDemo from './components/VideoDemo'
import Problem from './components/Problem'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Faq from './components/Faq'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
    return (
        <>
            <ParticlesBackground />
            <Layout>
                <Hero />
                <VideoDemo />
                <Problem />
                <Services />
                <HowItWorks />
                <Faq />
            </Layout>
        </>
    )
}

export default App
