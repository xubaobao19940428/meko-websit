import '@/styles/privacy.scss'
import { useState } from 'react'

const UserAgressme = () => {
    const [activeSection, setActiveSection] = useState('section-1')

    const sections = [
        { id: 'section-1', name: '1. Special Notices' },
        { id: 'section-2', name: '2. Services Content' },
        { id: 'section-3', name: '3. Account Details' },
        { id: 'section-4', name: '4. Privacy Policy' },
        { id: 'section-5', name: '5. Use of Services' },
        { id: 'section-6', name: '6. Virtual Items' },
        { id: 'section-7', name: '7. UGC Content' },
        { id: 'section-8', name: '8. Third-Party' },
        { id: 'section-9', name: '9. Payment Terms' },
        { id: 'section-10', name: '10. Intellectual Property' },
        { id: 'section-11', name: '11. Terminating Services' },
        { id: 'section-12', name: '12. Disclaimers' },
        { id: 'section-13', name: '13. Legal Jurisdiction' },
        { id: 'section-14', name: '14. Info Requests' },
        { id: 'section-15', name: '15. Modifications' },
        { id: 'section-16', name: '16. Other Terms' }
    ]

    const scrollToSection = (id: string) => {
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
    }

    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <div className="privacy-policy-header-content">
                    User Agreement
                </div>
                <div className="privacy-policy-header-description bind-account-description">
                    By using Meko, you agree to comply with our terms and conditions. This agreement outlines the rules, responsibilities, and rights for both users and Meko to ensure a safe, fair, and enjoyable experience.
                </div>
            </div>

            <div className='privacy-policy-content-split'>
                {/* Desktop Sticky Sidebar */}
                <aside className="policy-sidebar hide-mobile">
                    <ul className="sidebar-list">
                        {sections.map(sec => (
                            <li key={sec.id}>
                                <button
                                    onClick={() => scrollToSection(sec.id)}
                                    className={`sidebar-link ${activeSection === sec.id ? 'active' : ''}`}
                                >
                                    {sec.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Agreement Text Body */}
                <div className='privacy-policy-content policy-text-content scroll-container'>
                    <p><strong>Meko User Agreement</strong></p>
                    <p className="last-updated">Last updated: 03/13/2025 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Contact us: maxmekosocial@gmail.com</p>

                    <h2 id="section-1" className="section-heading">1. Special Notices</h2>
                    <p>This Meko User Agreement (this "Agreement") governs your use of our services (hereinafter, "Services" or "Meko Services"), including the Meko App, a live video social platform developed by us. You are one party, and the other party is Meko Social Limited or one of its affiliates ("we" or "Meko"), a company with its registered address at Room 602, 6/F, Kai Yue Commercial Building, No. 2C Argyle Street, Mong Kok, Kowloon, Hong Kong.</p>
                    <p>When using Meko Services, you will be subject to the Meko Privacy Policy and to additional guidelines or rules that are posted on Meko Services or made available to you. By using our Services, or by clicking "Sign Up" during the registration process, you agree to all terms of this Agreement. We, at our sole discretion, may revise this Agreement from time to time.</p>
                    <p>You may only use our Service if you are 18 years or older, and if you are not subject to a statutory age limit to enter into this Agreement according to applicable laws and regulations in your country.</p>

                    <h2 id="section-2" className="section-heading">2. Services Content</h2>
                    <p><strong>i. User Generated Content:</strong> Meko allows users to distribute live streaming, use services such as chat, bulletin boards, forum postings, voice interactive services, and to participate in other activities in which you may create, post, transmit, perform, or store content, messages, text, sound, images, or other data ("User Content").</p>
                    <p><strong>ii. Content Discovery:</strong> We show you ads, offers, and other sponsored content to help you discover content, products, and services offered by the many businesses and organizations that use Meko.</p>
                    <p><strong>iii. Combatting Harmful Conduct:</strong> We employ dedicated teams around the world and develop advanced technical systems to detect misuse of Meko Services, harmful conduct towards others, and situations where we may be able to help support or protect our community.</p>

                    <h2 id="section-3" className="section-heading">3. Account</h2>
                    <p>In order to open an account, you will be asked to provide us with certain information such as an account name and password. You are solely responsible for maintaining the confidentiality of your account and password. We reserve the right to disable your user account at any time, including if you have failed to comply with any of the provisions of these terms.</p>

                    <h2 id="section-4" className="section-heading">4. Privacy</h2>
                    <p>Your privacy is important to Meko. Please see our Privacy Policy for information relating to how we collect, use, and disclose your personal information, and how you can manage your online privacy when you use Meko Services.</p>

                    <h2 id="section-5" className="section-heading">5. Use of the Services</h2>
                    <p>Your access to and use of Meko Services is subject to these terms and all applicable laws and regulations. You agree that you will comply with these terms of Meko Services and Meko's Community Guidelines and will not:</p>
                    <ul>
                        <li>Create, upload, transmit, distribute, or store any content that is inaccurate, unlawful, infringing, defamatory, obscene, pornographic, invasive of privacy, or harassing.</li>
                        <li>Impersonate any person or entity, falsely claim an affiliation with any person or entity, or access Meko accounts of others without permission.</li>
                        <li>Defame, harass, abuse, threaten, or defraud users of Meko, or collect personal information about users or third parties without their consent.</li>
                        <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of Meko Services or any part thereof.</li>
                        <li>Use Meko Services for any illegal purpose, or in violation of any local, state, national, or international law.</li>
                    </ul>

                    <h2 id="section-6" className="section-heading">6. Virtual Items</h2>
                    <p>You can only buy virtual tokens ("Tokens") and virtual gifts ("Gifts"), send Gifts to others, receive Gifts with monetary value, earn virtual credits ("Credits"), and withdraw Credits if you are aged 18 or older.</p>
                    <p>All sales of Tokens and Gifts are final, and we do not offer refunds for any purchased Tokens and Gifts. Tokens and Gifts cannot be converted into or exchanged for cash, or be refunded or reimbursed by us for any reason.</p>

                    <h2 id="section-7" className="section-heading">7. User-Generated Content</h2>
                    <p>Users may create, post, transmit, perform, or store content, messages, text, sound, images, applications, code, or other data or materials on Meko Services ("User Generated Content/UGC"). If you publish UGC, you grant Meko and its sub-licensees the permanent, irrevocable, non-exclusive, fully sub-licensable rights to use, copy, modify, adapt, publish, and distribute such content.</p>
                    <p>We enforce automated and manual mechanisms for content moderation. You explicitly agree not to engage in the creation or promotion of Prohibited Content, including illegal conduct, threats, harassment, discrimination, or Child Sexual Abuse Material (CSAM).</p>

                    <h2 id="section-8" className="section-heading">8. Third-Party Content</h2>
                    <p>Meko Services may offer third-party material in addition to User Generated material (collectively, the "Third-Party Content"). Meko has no control over, affiliation with, or warranty of any kind regarding any Third-Party Content.</p>

                    <h2 id="section-9" className="section-heading">9. Payment Terms</h2>
                    <p>We accept major credit cards, certain debit cards, and other payment methods we may make available through our site. You are subject to all terms and conditions of the payment method you choose. Objections to a payment already made should be directed to customer support via email at maxmekosocial@gmail.com.</p>

                    <h2 id="section-10" className="section-heading">10. Intellectual Property Rights</h2>
                    <p>All text, data, images, graphics, audio and/or video information, and other materials within Meko Services provided by Meko are property of Meko and are protected by copyright, trademark, and other property rights laws.</p>

                    <h2 id="section-11" className="section-heading">11. Terminating Services</h2>
                    <p>Meko reserves the right, without notice and in our sole discretion, to terminate your license to use Meko Services, and to block or prevent your future access to and use of Meko Services if you violate this Agreement or applicable law.</p>

                    <h2 id="section-12" className="section-heading">12. Disclaimers</h2>
                    <p>You shall be fully responsible for any risks involved in using Meko Services. Meko Services are provided by Meko on an "as is" and "as available" basis without warranties of any kind.</p>

                    <h2 id="section-13" className="section-heading">13. Legal Jurisdiction</h2>
                    <p>This Agreement shall be governed by and construed in accordance with the laws of Hong Kong Special Administrative Region, without regard to conflict of law principles. Any dispute arising out of or in connection with this Agreement shall be referred to and finally resolved by arbitration administered by the Hong Kong International Arbitration Centre (HKIAC).</p>

                    <h2 id="section-14" className="section-heading">14. Request for Information</h2>
                    <p>All requests for information or documents related to potential, anticipated, or current legal proceedings, investigations, or disputes, or for third-party user information, must be properly served on Meko via Meko Social Limited.</p>

                    <h2 id="section-15" className="section-heading">15. Modification of the Agreement</h2>
                    <p>We amend these terms of the Agreement from time to time. Your continued access or use of Meko Services after the date of the new terms constitutes your acceptance of the new terms.</p>

                    <h2 id="section-16" className="section-heading">16. Other Terms</h2>
                    <p>This Agreement constitutes the entire agreement of agreed items and other relevant matters between both parties. If any provision of this Agreement is rendered void or unenforceable, the remaining provisions of this Agreement shall remain valid and binding.</p>
                </div>
            </div>
        </div>
    )
}

export default UserAgressme
