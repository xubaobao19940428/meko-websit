import { useState } from 'react'
import '@/styles/home.scss'
import Highlight1 from '@/assets/images/high-1.png'
import Highlight2 from '@/assets/images/high-2.png'
import Highlight3 from '@/assets/images/high-3.png'
import Highlight4 from '@/assets/images/high-4.png'
import Highlight5 from '@/assets/images/high-5.png'
import Highlight6 from '@/assets/images/high-6.png'

const metrics = [
    { value: '100+', label: 'regions with active conversations' },
    { value: '3M+', label: 'profiles joining global rooms' },
    { value: '< 8s', label: 'typical time to start a match' },
]

const features = [
    {
        title: 'Fast social discovery',
        description: 'Open Meko and move from browsing to a live one-on-one conversation without heavy setup.',
        image: Highlight1,
    },
    {
        title: 'Safer live matching',
        description: 'Moderation workflows, reporting paths, and enforcement logs keep safety visible instead of hidden.',
        image: Highlight2,
    },
    {
        title: 'Cross-language chat',
        description: 'Built-in translation keeps text conversations clear when two people do not share a language.',
        image: Highlight3,
    },
    {
        title: 'Guest-friendly access',
        description: 'Visitors can explore the product first, then bind an account when they are ready.',
        image: Highlight4,
    },
    {
        title: 'Privacy-first controls',
        description: 'Account deletion, support, and policy pages are easy to find from the site and the app.',
        image: Highlight5,
    },
    {
        title: 'Mobile-ready experience',
        description: 'The interface is built around short sessions, clear actions, and quick return visits.',
        image: Highlight6,
    },
]

const flowSteps = [
    { step: '01', title: 'Enter', text: 'Join as a guest or sign in with a supported account.' },
    { step: '02', title: 'Match', text: 'Use discovery controls to find someone available now.' },
    { step: '03', title: 'Talk', text: 'Start a video or text conversation with translation support.' },
    { step: '04', title: 'Control', text: 'Report, block, or manage your account whenever needed.' },
]

const faqs = [
    {
        question: 'What is Meko?',
        answer: 'Meko is a mobile-first social discovery app for people who want fast, live conversations across regions.',
    },
    {
        question: 'Can I use Meko without a long sign-up flow?',
        answer: 'Yes. Meko supports guest-friendly access so new users can explore before binding a permanent account.',
    },
    {
        question: 'How does Meko handle safety?',
        answer: 'Meko combines reporting tools, content review, child safety policies, and public enforcement information to keep trust visible.',
    },
    {
        question: 'Where can I get help?',
        answer: 'Use the Help Center for common questions, or contact maxmekosocial@gmail.com for account and support requests.',
    },
]

const Home = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0)

    const handleDownloadAndroid = () => {
        window.open('https://play.google.com/store/apps/details?id=com.kikapika.meko', '_blank')
    }

    const handleDownloadIos = () => {
        window.open('https://apps.apple.com/us/app/meko-chat/id6755861992', '_blank')
    }

    return (
        <div className="home-wrapper meko-home">
            <section className="meko-hero">
                <div className="meko-hero__content">
                    <div className="meko-hero__copy">
                        <p className="meko-hero__eyebrow">Live social discovery for a global audience</p>
                        <h1>Meko makes the first conversation feel simple.</h1>
                        <p className="meko-hero__description">
                            Meet people through quick live matching, translated chat, and safety tools that stay close at hand.
                        </p>
                        <div className="meko-hero__actions" aria-label="Download Meko">
                            <button className="store-button" onClick={handleDownloadAndroid}>
                                <img src="/images/google-play.webp" alt="Get it on Google Play" />
                            </button>
                            <button className="app-store-button" onClick={handleDownloadIos}>
                                App Store
                            </button>
                        </div>
                    </div>

                    <div className="conversation-console" aria-label="Meko conversation preview">
                        <div className="console-topbar">
                            <span>Meko Live</span>
                            <strong>Matching</strong>
                        </div>
                        <div className="console-orbit">
                            <span className="orbit-ring ring-one" />
                            <span className="orbit-ring ring-two" />
                            <span className="orbit-core">ME</span>
                            <span className="orbit-dot dot-one" />
                            <span className="orbit-dot dot-two" />
                            <span className="orbit-dot dot-three" />
                        </div>
                        <div className="console-chat">
                            <p className="chat-line incoming">Ava: Want to practice English?</p>
                            <p className="chat-line outgoing">Meko translated your reply.</p>
                        </div>
                    </div>
                </div>

                <div className="metric-strip">
                    {metrics.map(item => (
                        <div className="metric-item" key={item.label}>
                            <strong>{item.value}</strong>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="meko-section meko-section--split">
                <div>
                    <p className="section-kicker">Product focus</p>
                    <h2>Built for short, real sessions instead of endless browsing.</h2>
                </div>
                <p>
                    The site now presents Meko as a practical communication product: faster matching, clearer safety,
                    visible support, and account controls that are easy to reach.
                </p>
            </section>

            <section className="feature-grid" aria-label="Meko highlights">
                {features.map(feature => (
                    <article className="feature-card" key={feature.title}>
                        <img src={feature.image} alt="" />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </section>

            <section className="flow-section">
                <div className="flow-heading">
                    <p className="section-kicker">How it works</p>
                    <h2>Four steps from arrival to conversation.</h2>
                </div>
                <div className="flow-grid">
                    {flowSteps.map(item => (
                        <article className="flow-card" key={item.step}>
                            <span>{item.step}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-heading">
                    <p className="section-kicker">Questions</p>
                    <h2>Clear answers before users install.</h2>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={faq.question}>
                            <button className="faq-button" onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}>
                                <span>{faq.question}</span>
                                <strong>{openFaqIndex === index ? '-' : '+'}</strong>
                            </button>
                            {openFaqIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
