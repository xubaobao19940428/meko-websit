import '@/styles/privacy.scss'
import '@/styles/support.scss'
import { useState } from 'react'

interface FAQItem {
    category: string
    question: string
    answer: string
}

const FAQ_DATA: FAQItem[] = [
    {
        category: 'account',
        question: 'How do I create an account on Meko?',
        answer: 'Meko offers instant anonymous guest access directly through your browser or phone, letting you explore with complete privacy. If you want to bind your profile, simply link your account securely using Google or other standard login options inside the app settings.'
    },
    {
        category: 'account',
        question: 'How do I delete my Meko account?',
        answer: 'You can delete your account by navigating to Me > Settings > Account > Delete Account in the app. Alternatively, if you have uninstalled the app, you can submit an online request using our data erasure form [here](#/deleteAccount).'
    },
    {
        category: 'safety',
        question: 'How do I report a user or inappropriate content?',
        answer: 'Your safety is our top priority. To report a user or content during a video chat or from a profile, tap on the "Report" button, select the violation reason, and submit it. Our 24/7 content moderation team reviews all reports within minutes.'
    },
    {
        category: 'safety',
        question: 'How is my privacy protected on Meko?',
        answer: 'All video calls and chats on Meko are protected using secure end-to-end transport encryption. We do not store your private video chat records on our servers. For detailed explanations, please review our comprehensive [Privacy Policy](#/privacy).'
    },
    {
        category: 'tech',
        question: 'I am experiencing connection lags during video calls. What should I do?',
        answer: 'Please ensure you are connected to a stable high-speed network (Wi-Fi or 4G/5G). Close other background apps that might consume bandwidth. If lag persists, try updating Meko to the latest version or contact us at maxmekosocial@gmail.com.'
    },
    {
        category: 'tech',
        question: 'The app crashes when I attempt to open the video matching screen. How to fix?',
        answer: 'Please verify that Meko has permission to access your Camera and Microphone in your device Settings. Clear the app cache or browser data, then restart the app. If it persists, email us with your device details.'
    }
]

const CATEGORIES = [
    { id: 'all', name: 'All Topics', icon: '📝' },
    { id: 'account', name: 'Account & Profiles', icon: '👤' },
    { id: 'safety', name: 'Safety & Trust', icon: '🛡️' },
    { id: 'tech', name: 'Technical Support', icon: '⚙️' }
]

const Support = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('all')
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index)
    }

    const filteredFaqs = FAQ_DATA.filter(faq => {
        const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <div className="privacy-policy-header-content">
                    Meko Help Center
                </div>
                <div className="privacy-policy-header-description bind-account-description">
                    Search or browse topics below to find answers to frequently asked questions about video chats, safety enforcements, and profile settings.
                </div>
            </div>

            <div className="support-content">
                {/* Search Bar */}
                <div className="help-search-container">
                    <div className="search-box-wrapper">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            className="help-search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
                        )}
                    </div>
                </div>

                {/* Category Selection Cards */}
                <div className="help-category-grid">
                    {CATEGORIES.map(cat => (
                        <div
                            key={cat.id}
                            className={`help-category-card ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveCategory(cat.id)
                                setOpenFaqIndex(0) // Default open the first faq of new category
                            }}
                        >
                            <span className="cat-icon">{cat.icon}</span>
                            <span className="cat-name">{cat.name}</span>
                        </div>
                    ))}
                </div>

                {/* FAQ List */}
                <div className="support-section">
                    <h2 className="support-section-title">
                        {activeCategory === 'all' ? 'All Questions' : CATEGORIES.find(c => c.id === activeCategory)?.name}
                    </h2>

                    {filteredFaqs.length > 0 ? (
                        <div className="support-faq-list">
                            {filteredFaqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index
                                return (
                                    <div key={index} className={`support-faq-item ${isOpen ? 'open' : ''}`}>
                                        <button className="faq-trigger" onClick={() => toggleFaq(index)}>
                                            <span className="faq-question-text">{faq.question}</span>
                                            <span className="faq-arrow">{isOpen ? '▲' : '▼'}</span>
                                        </button>
                                        <div className="faq-answer-wrapper">
                                            <div className="faq-answer-content" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="no-results-msg">
                            No articles found matching "{searchQuery}". Try using other keywords.
                        </div>
                    )}
                </div>

                {/* Contact Us Section */}
                <div className="support-section contact-card-section">
                    <h2 className="support-section-title">Still Need Assistance?</h2>
                    <p className="support-section-desc">
                        Our customer success team is available 24/7 to help resolve billing, matches, or technical difficulties.
                    </p>
                    <div className="support-contact-card">
                        <div className="support-contact-item">
                            <span className="support-contact-label">Email Support</span>
                            <a href="mailto:maxmekosocial@gmail.com" className="support-contact-value">maxmekosocial@gmail.com</a>
                        </div>
                        <div className="support-company-info">
                            <p className="company-name">Meko Social Limited</p>
                            <p className="company-address">Room 602, 6/F, Kai Yue Commercial Building, No. 2C Argyle Street, Mong Kok, Kowloon, Hong Kong</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
