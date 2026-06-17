import '@/styles/privacy.scss'
import { useState } from 'react'

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('section-1')

    const sections = [
        { id: 'section-1', name: '1. What Info We Collect' },
        { id: 'section-2', name: '2. How We Use Info' },
        { id: 'section-3', name: '3. How We Share Info' },
        { id: 'section-4', name: '4. Data Transfers' },
        { id: 'section-5', name: '5. Third-Party Links' },
        { id: 'section-6', name: '6. Data Security' },
        { id: 'section-7', name: '7. Your Choices' },
        { id: 'section-8', name: '8. Your Rights' },
        { id: 'section-9', name: "9. Children's Safety" },
        { id: 'section-10', name: '10. Data Retention' },
        { id: 'section-11', name: '11. Policy Updates' },
        { id: 'section-12', name: '12. Account Deletion' }
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
                    Privacy Policy
                </div>
                <div className="privacy-policy-header-description">
                    We prioritize your privacy and security. This policy outlines how we collect, use, and safeguard your personal information, ensuring a trusted and secure experience on our platform.
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

                {/* Policy Text Body */}
                <div className='privacy-policy-content policy-text-content scroll-container'>
                    <p><strong>Meko Privacy Policy</strong></p>
                    <p className="last-updated">Last updated: 03/13/2025 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Contact us: maxmekosocial@gmail.com</p>
                    
                    <p>This Privacy Policy describes how Meko ("Meko," "we," or "us") collects and processes personal data from visitors and users of www.mekochat.com and any related applications or services (collectively, the "Meko Services").</p>
                    <p>We respect the privacy of users, subscribers, publishers, members, and visitors (collectively, "you" or "users") and want you to understand how we collect, use, and disclose information about you.</p>
                    <p>When you use Meko Services, you may share personal information—for example, when creating an account or taking actions that are public by nature, such as broadcasting content, updating your profile, following channels, or subscribing to broadcasts. Given the social nature of our Services, this information may be collected, used, or disclosed by others who participate in these interactions. Additionally, certain features are designed to display user activity, such as identifying who created a particular Clip or showing subscription status for a channel. We encourage you to be mindful of this when using Meko Services.</p>

                    <h2 id="section-1" className="section-heading">1. What Information Do We Collect</h2>
                    <p>We collect information about you through the means described below when providing Meko Services. Please note that we need certain types of information to provide the Meko Services to you.</p>
                    <p><strong>i. User-provided Information</strong></p>
                    <p>You may provide some or all of the following personal information when you create an account, use Meko Services (such as uploading content), or contact us for technical support:</p>
                    <ul>
                        <li><strong>Registration information:</strong> Your date of birth, phone number (or email, if applicable), password, user identifier, and language preference.</li>
                        <li><strong>Profile information:</strong> Your alias, profile images, gender, hometown, self-introduction, social media information, education, and career details.</li>
                        <li><strong>User-generated content ("UGC"):</strong> Comments, texts, messages, pictures, images, videos, sounds, code, or other data and materials that you upload, distribute, or stream on the App when using Meko Services.</li>
                        <li><strong>Facial data:</strong> When you use features to create special effects or emojis for your streams or uploaded pictures, we may process facial data. This data is processed offline solely to deliver these features, and we will not use it for other purposes unless we have obtained your explicit consent or converted it into de-identified data. We will not use your facial data for marketing or advertising, nor will we share it with any third party.</li>
                        <li><strong>Real-Person Profile Picture Authentication:</strong> If you utilize this feature, we collect your profile picture and facial-recognition video to verify your identity by comparing them. This authentication protects you from impersonators and fake accounts and enhances the authenticity of Meko Services. We do not retain your face recognition video on our servers; it is used solely for verification purposes.</li>
                        <li><strong>Payment information:</strong> Bank account number, PayPal, or other payment information required for transactions.</li>
                        <li><strong>Transaction information:</strong> Transaction serial numbers and historical records after you purchase Paid Services.</li>
                        <li><strong>Your social network contacts:</strong> With your permission, when you activate the "Discover Friends" function and allow us to access your contacts.</li>
                        <li><strong>Your Global Positioning System (GPS) information:</strong> After you grant permission, you may change access to your GPS information via your mobile device settings.</li>
                        <li><strong>Your opt-in choices and correspondence with us:</strong> Information used to verify your account or resolve your feedback or complaints.</li>
                        <li><strong>Information you provide from social media:</strong> When you create a Meko account by connecting with a third-party social media platform (such as Facebook, Instagram, Twitter, or Google), or if you link your Meko account with a third-party social media account.</li>
                    </ul>

                    <p><strong>ii. Automatically Collected Information for Legitimate Interests</strong></p>
                    <p>We may collect some or all of the following personal information when you use Meko Services for legitimate interests:</p>
                    <ul>
                        <li><strong>Network activity information:</strong> Your browsing history, search history, videos or pages visited, date and time of visits, accounts you subscribed to, and information about your interactions with other users.</li>
                        <li><strong>Information from Other Sources:</strong> We may obtain additional information from third parties and sources other than Meko Services. For example, we may obtain information from games or services you use, or social media networks (such as Facebook) for which you have approved our access. When you access Meko Services through social media networks or connect Meko Services to them, you authorize Meko to collect, store, and use such information in accordance with this Privacy Policy.</li>
                        <li><strong>Device identifiers:</strong> Your operating system, browser type, brand, model and serial number of your mobile device, Internet Protocol (IP) address, mobile carrier, screen resolution, language setting, IMEI number, IMSI number, and media access control address.</li>
                        <li><strong>Mobile advertising identifiers:</strong> Identifiers used by mobile operating systems and made available to advertising providers to gather metrics on mobile apps (Apple's IDFA or Google's AAID) to help us and advertisers provide ads that may be more relevant to your interests.</li>
                        <li><strong>Metadata:</strong> Data associated with the UGC you provide, which describes other data and provides information about how, when, and by whom the UGC was collected and formatted, such as hashtags used to label keywords to videos and captions.</li>
                        <li><strong>Cookies:</strong> Small pieces of data that enable us to provide certain features, collected by us or our business partners to measure and understand the web pages you click on and how you use Meko Services, and to enhance your experience.</li>
                    </ul>

                    <h2 id="section-2" className="section-heading">2. How We Use Your Information</h2>
                    <p>We will only use your personal information when applicable laws allow us to. In general, we use your personal information for the following purposes:</p>
                    <ul>
                        <li><strong>Provision of services:</strong> To present Meko Services and its contents to you, including interactive features, and to provide information, products, or services you request. We also collect and use personal information to verify your eligibility and deliver prizes in connection with promotional activities and sweepstakes.</li>
                        <li><strong>Improvement of services:</strong> To improve and personalize our services by presenting new services, information, recommendations, and feedback.</li>
                        <li><strong>Customer management:</strong> To manage registered user accounts, provide customer support, send notices about accounts or subscriptions, and communicate changes to Meko Services or other products or services we offer.</li>
                        <li><strong>Communication:</strong> To communicate and interact with you directly. For example, we may send notifications regarding upcoming changes, promotional activities, or improvements to Meko Services.</li>
                        <li><strong>Content review:</strong> To review pictures, images, and content posted or generated on Meko Services to ensure compliance with applicable content regulations in relevant jurisdictions.</li>
                        <li><strong>Customization of content:</strong> To perform research and analysis about your use of, or interest in, content, products, advertising, or services available on Meko Services in order to develop and display content tailored to your interests on our Website and App.</li>
                        <li><strong>Performance Analysis:</strong> To determine whether users of Meko Services are unique or whether the same user is using Meko Services on multiple occasions, and to monitor aggregate metrics such as total number of visitors, number of videos viewed, and demographic patterns.</li>
                        <li><strong>Functionality and security:</strong> To identify users not meeting the age limit, diagnose or fix technology problems, and detect, prevent, and respond to actual or potential fraud, illegal activities, or intellectual property infringement.</li>
                        <li><strong>Compliance:</strong> To enforce our terms of use and comply with our legal obligations.</li>
                    </ul>

                    <h2 id="section-3" className="section-heading">3. How We Share Your Information</h2>
                    <p>Please note that if your profile is public, your content will be visible to anyone on the Platform and may also be accessed or shared by your friends and followers as well as third parties such as search engines, content aggregators, and news sites. You can change who can see a video or picture each time you upload content.</p>
                    <p>We may also share your information with other members, subsidiaries, or affiliates of our corporate group to improve, optimize the Platform, and prevent illegal use.</p>
                    <p>We may share your personal information outside of Meko Services when we have your consent, either express or implied.</p>
                    <p>We may disclose your personal information to members of our corporate group (entities that control, are controlled by, or are under common control with us) to the extent necessary for services, customer management, customization of content, advertising, analytics, verifications, functionality and security, and compliance.</p>
                    <p>We may disclose your personal information to our authorized service providers that perform certain services on our behalf. These services may include fulfilling orders, processing credit card payments, customization of content, analytics, security, map navigation, data storage and cloud services, supporting our functionality, and other features offered through Meko Services. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such information for any other purposes.</p>

                    <h2 id="section-4" className="section-heading">4. International Data Transfers</h2>
                    <p>Your personal information may be processed by us or our trusted third-party suppliers outside of the country(ies) in which you reside, including in countries where data protection and privacy laws or regulations may be equivalent to, or as protective as, the data protection laws and regulations in your country. In accordance with applicable data protection and privacy laws and regulations, we will implement appropriate measures to ensure that your personal information remains protected and secure when transferred outside of your country.</p>

                    <h2 id="section-5" className="section-heading">5. Links to Other Websites or Applications</h2>
                    <p>When you click on a link to any other website, mobile application, or third-party content through Meko Services, you will go to another website or mobile application and another entity may collect information from or about you. We have no control over, do not review, and cannot be responsible for these third-party websites or mobile applications or their contents.</p>

                    <h2 id="section-6" className="section-heading">6. Data Security</h2>
                    <p>We take appropriate administrative, technical, and physical security measures to safeguard your personal information from unauthorized access and disclosure. For example, only authorized employees are permitted to access personal information, and they may do so only for permitted business functions. In addition, we use encryption in the transmission of certain personal information between your system and ours, and we use firewalls to help prevent unauthorized persons from gaining access to your personal information.</p>

                    <h2 id="section-7" className="section-heading">7. Your Choices</h2>
                    <p>You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent. You can at any time request to opt out from allowing us to send you push notifications by adjusting the permissions in your mobile device. You can switch off GPS location, Microphone, Camera, or other similar functions on your mobile device if you do not wish to share them.</p>

                    <h2 id="section-8" className="section-heading">8. Your Rights</h2>
                    <p>You may submit a request to access, modify, or delete the personal information we collect about you by (a) using the Help or Feedback function on Meko Services or (b) sending your request to us via email at maxmekosocial@gmail.com. We will respond to your request consistent with applicable laws as soon as practicable after proper verification procedures.</p>

                    <h2 id="section-9" className="section-heading">9. Children's Safety</h2>
                    <p>Users must be at least 18 years of age to utilize our services. During your use, we will not intentionally collect your personal information but may collect your age data to confirm your adherence to the use standards of our application. In case we unintentionally gather personal information from users under the age of 18, such data will be promptly removed from our databases, which also means that your account will be banned accordingly. Thus, we advise against the use of our services by individuals below 18 years.</p>
                    <p>Should you encounter potential instances of Child Sexual Abuse Material (CSAM) during your use of the App, please use the app's report feature to inform us. Additionally, confirmed instances of CSAM, upon review, will be reported by our product support team to The National Center for Missing and Exploited Children (NCMEC).</p>

                    <h2 id="section-10" className="section-heading">10. Retention of Your Information</h2>
                    <p>We will retain your personal information and other information for as long as you maintain your Meko account. You may request deletion of your account at any time through the **Me &gt; Settings &gt; Account &gt; Delete Account** menus in the app, or by sending an email to maxmekosocial@gmail.com.</p>

                    <h2 id="section-11" className="section-heading">11. Changes and Updates to This Privacy Policy</h2>
                    <p>We may modify or revise our privacy policy from time to time. Although we may attempt to notify you when major changes are made to this privacy policy, you are expected to periodically review the most up-to-date version found on the Website so you are aware of any changes, as they are binding on you.</p>

                    <h2 id="section-12" className="section-heading">12. How to Delete Your Account</h2>
                    <p>For the safety of your account management, we provide a quick delete account function in the App. You can click Account Settings in the App Settings to view the Delete Account option. If you have uninstalled the app, you can fill in your relevant information and submit an application <a href="#/deleteAccount" className="policy-link">[here]</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
