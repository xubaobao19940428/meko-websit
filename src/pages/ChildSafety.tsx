import '@/styles/privacy.scss'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Toast } from '@/components/ui/toast'

const TAB_CONFIG: Array<{ title: string; key: string }> = [
    { title: 'Child Safety Policy', key: 'safefyPolicy' },
    { title: 'Announcement', key: 'announcement' },
    { title: 'Detect Service', key: 'detectService' },
    { title: 'Report CSAM', key: 'reportCsam' }
]

const ChildSafetyPolicyContent = () => (
    <div className="policy-text-content">
        <h1 className="policy-title">Meko Child Safety Policy</h1>
        <p className="policy-meta">Last updated date:11/30/2025 &nbsp;&nbsp;&nbsp; Contact us: maxmekosocial@gmail.com</p>
        
        <h2 className="policy-section-title">Policies</h2>
        <h3 className="policy-subsection-title">Age Limitations</h3>
        <p>Users must be 18 years of age or above to utilize Meko.</p>
        <p>Any attempts to falsely represent age to access the platform are strictly prohibited and will lead to account banned.</p>
        <p>Meko deploys automated and human systems to recognize activities involving underage individuals as well as Child Sexual Exploitation and Abuse ("CSAM"). Any efforts to evade these detection features are prohibited. Prohibited conduct includes, but not limited to:</p>
        <p>Sexualization of Minors and CSAM (Child Sexual Abuse and Exploitation)</p>
        <p>Fabrication, dissemination, or sharing of content involving child sexual abuse or exploitation.</p>
        <p>Prohibition of content involving the sexual objectification of minors, comprising discussions, sexualized make-believe, or dressing in sexually suggestive attire.</p>
        <p>Any form of portrayal of child nudity or sexualization, including artistic renderings such as sketches or animations.</p>

        <h2 className="policy-section-title">Hazardous or Harmful Acts towards Minors</h2>
        <p>Threats, endorsements, or acts of physical harm against minors.</p>
        <p>Psychological abuse, coercion, or manipulation of minors.</p>
        <p>Encouragement or demonstration of dangerous activities involving minors.</p>
        <p>Advocate or portrayal of neglect or trafficking of minors.</p>

        <h2 className="policy-section-title">Underage Appearance on the Platform</h2>
        <p>The appearance of underage individuals in videos, or any other content is strictly forbidden.</p>
        <p>Accounts creation or management on behalf of underage individuals.</p>
        <p>False age representation to gain access to the platform.</p>

        <h2 className="policy-section-title">Reporting Mechanism</h2>
        <p>Incidents of child abuse will be reported to the <a href="https://www.missingkids.org/home" className="policy-link" target="_blank" rel="noreferrer">National Center for Missing and Exploited Children (NCMEC)</a> or other apposite authorities as mandated by law.</p>
        <p>Users can report potential violations through the in-app reporting feature or by contacting us at maxmekosocial@gmail.com.</p>

        <h2 className="policy-section-title">Barred Users</h2>
        <p>Users proven guilty of crimes against children, comprising, but not limited to, sexual assault, physical harm, neglect, or trafficking are strictly prohibited from utilizing Meko.</p>

        <h2 className="policy-section-title">Enforcement and Transparency</h2>
        <h3 className="policy-subsection-title">Implementation Measures</h3>
        <p>All infringements of the Child Safety Policy will lead to an immediate account sanction.</p>
        <p>Depending on the severity of the violation, Meko may liaise with law enforcement agencies for further investigations.</p>

        <h2 className="policy-section-title">User Education</h2>
        <p>We inform users about child safety through:</p>
        <ul>
            <li>Displaying the Child Safety Policy on our platform.</li>
            <li>Offering prompts and reminders during content creation and sharing.</li>
        </ul>

        <h2 className="policy-section-title">Additional Help</h2>
        <p>In case you discover child exploitation or abuse outside Meko, we recommend reaching out to the respective resources based on your location:</p>
        <p>North America, Australia, New Zealand: <a href="https://www.missingkids.org" className="policy-link" target="_blank" rel="noreferrer">National Center for Missing &amp; Exploited Children (NCMEC)</a></p>
        <p>Europe: Law Enforcement Reporting Channels for Child Sexual Coercion and Extortion.</p>
        <p>South America and Other Regions: <a href="https://www.icmec.org/" className="policy-link" target="_blank" rel="noreferrer">International Centre for Missing &amp; Exploited Children</a> international hotline.</p>

        <h2 className="policy-section-title">Commitment to Ensuring Child Safety</h2>
        <p>Meko will continually assesses and improves its procedures, systems, and practices to maintain the superior standards of child safety. We strive to render our platform a safe and welcoming space for all.</p>
    </div>
)

const AnnouncementContent = () => (
    <div className="policy-text-content">
        <h1 className="policy-title">Announcement on the handling of underage content</h1>
        <p className="policy-meta">Last updated date:11/30/2025 &nbsp;&nbsp;&nbsp; Contact us: maxmekosocial@gmail.com</p>
        
        <p>Dear Meko Users, we wish to notify that as part of our commitment to protect our underage users, Meko has initiated a targeted rectification. We've recognized that certain content or actions in our community can have negative impacts on the mental health and psychophysical development of minors. We take this issue very seriously and express deep concern.</p>
        <p>At present, we have taken the following measures regarding the underage-related content within the Meko APP：</p>
        <p>Regarding the content of images, we've scrutinized all user photos through a combination of machine detection and human verification. Any content involving minors has been removed diligently, and accounts that have maliciously uploaded information on minors have been banned. Our review standards are as follows:</p>
        <p>1. Images where the main subject is a minor:</p>
        <img src="https://res.mekochat.com/mlo/asset/20260410015444000001.png" alt="" className="policy-image" style={{ width: '50%' }} />
        <p>2. Images not primarily about minors, but where minors are present:</p>
        <img src="https://res.mekochat.com/mlo/asset/20260410015452000001.png" alt="" className="policy-image" style={{ width: '50%' }} />
        <p>3. Images containing keywords such as 'Child', 'CP', etc:</p>
        <img src="https://res.mekochat.com/mlo/asset/20260410015457000001.png" alt="" className="policy-image" style={{ width: '50%' }} />
        <p>4. Suspected AI generated images of minors:</p>
        <img src="https://res.mekochat.com/mlo/asset/20260410015501000001.png" alt="" className="policy-image" style={{ width: '50%' }} />
        
        <p>The above sample images are AI-generated.</p>
        <h2 className="policy-section-title">You can also experience the <a href="#/child-safety" className="policy-link">content detection service</a> online on our website.</h2>
        
        <p>Regarding text content, we've performed machine detection to delete text content containing information on minors, including text messages, user nicknames, and user Tags. Accounts that frequently propagate minor-related content in their interactions with others have also been banned. Our review standards are as follows:</p>
        <p>1. Users' text messages that frequently contain keywords such as 'Child', 'CP', etc.</p>
        <p>2. User nicknames containing keywords such as 'Child', 'CP', etc.</p>
        <p>3. Users' Tags containing keywords such as 'Child', 'CP', etc.</p>
        
        <p>After the aforementioned steps, we have removed 2,924 images related to minors and banned 982 relevant accounts, effectively purifying the Meko APP of underage content. You can click to view the penalty notice.</p>
        <p>In the future, we will adopt stricter methods to conduct thorough investigations on content involving minors, genuinely ensuring the cyber protection of underage individuals.</p>
        
        <p>1. Strict Content Review Standards: We will continue to supervise and rectify issues in the content on a real-time basis. Besides Meko’s AI detection, we have also integrated more content detection services, such as Aliyun, Yidun, and Amazon Rekognition. Through multiple layers of filtration, any content containing images and text information of minors will be screened out and automatically deleted by the machine. In addition, our team of human inspectors undergoes a review of the content left after machine detection. This way, even if some violative content may have bypassed the machine detection, it will not make its way into the app.</p>
        <p>2. Strict Real Person Verification: We provide a Real Person Verification functionality within our product, serving not just to ensure the authenticity of our users but also to verify their age. Users who pass this verification process are awarded a "Shield" icon. During the real person verification process, we ask users to upload a clear facial photo, followed by real-time facial detection. In this process, we upload the photo to the server of a third-party authority for age verification. We take the minimum detection result from different platforms as the age of the user, and any account of a user who is under 18 of will be banned.</p>
        <p>3. Strict handling of reports involving minors: Upon resuming updates of Meko, we plan to enhance the "minor" option in the report types within the APP. Additionally, we will introduce alert mechanisms of reports involving minors in our manual review team. This is to ensure that reports involving underage users are dealt with promptly. Accounts found in violation will face permanent banning without possibility of reinstatement.</p>
        <p>4. Stricter manual patrolling: We now require members of the Meko team to regularly patrol the content of the APP, serving as a kind of final check on the results of machine detection and manual review. Through this approach, we seek to ensure that there will be no more content that violates the rules within Meko.</p>
        <p>5. In addition, we have provided an entrance on our official website for users to report child sexual abuse. Meko users can click on "Report CSAM" in the "About Us" page of our official website to enter the official website of the National Center for Missing and Exploited Children to make a report.</p>
        
        <p>In conclusion, we wish to reiterate our unwavering commitment to enhancing our review mechanisms, and to safeguarding the rights and interests of minors on our platform. We understand and respect the immense responsibility that comes along with this commitment, and we pledge to leave no stone unturned in fulfilling these duties. We thank you for your understanding and cooperation as we continue to work towards fostering a safer and more inclusive space for all individuals.</p>
    </div>
)

const ReportCSAMContent = () => (
    <div className="policy-text-content">
        <h1 className="policy-title">Report CSAM</h1>
        <p className="policy-meta">Last updated date:11/30/2025 &nbsp;&nbsp;&nbsp; Contact us: maxmekosocial@gmail.com</p>
        
        <p>The Meko team always prioritizes user safety, particularly the safety of our minors. If you find any content within our application that features elements of child sexual abuse, aside from reporting to the Meko, you also have the choice of reporting to the following institutions:</p>
        <p>1. The <a href="https://www.icmec.org/" className="policy-link" target="_blank" rel="noreferrer">National Center for Missing and Exploited Children</a>: They can report the content to the appropriate authorities around the world.</p>
        <p>2. Or you can report the content to your <a href="https://www.missingkids.org/blog/2025/no-tricks-just-treats-halloween-safety-tips-for-a-fright-free-night" className="policy-link" target="_blank" rel="noreferrer">relevant regional authority</a>.</p>
    </div>
)

const ChildSafety = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [uploadImageResult, setUploadImageResult] = useState<string>('')
    const [showToast, setShowToast] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null)
    const tabsContainerRef = useRef<HTMLDivElement>(null)
    const tabRefs = useRef<(HTMLButtonElement | null)>([])

    // Scroll tracking
    const scrollPositions = useRef<number[]>([0, 0, 0, 0])
    const visitedTabs = useRef<boolean[]>([true, false, false, false])
    const isInitialMount = useRef(true)

    /**
     * 上传图片
     */
    const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const base64 = await fileToBase64(file)
            setUploadImageResult(base64 as string)
        }
    }

    /**
     * 将图片转换为base64
     */
    const fileToBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    }

    /**
     * 关闭图片
     */
    const handleCloseImage = () => {
        setUploadImageResult('')
    }

    /**
     * 开始检测
     */
    const handleStartDetect = () => {
        if (uploadImageResult) {
            setShowToast(true)
            console.log('Start detecting image:', uploadImageResult)
        }
    }

    useEffect(() => {
        if (swiperRef.current) {
            setTimeout(() => {
                swiperRef.current?.updateAutoHeight()
            }, 100)
        }
    }, [])

    useEffect(() => {
        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollPosition = window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop ||
                        0
                    scrollPositions.current[activeTabIndex] = scrollPosition
                    ticking = false
                })
                ticking = true
            }
        }
        document.body.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            document.body.removeEventListener('scroll', handleScroll)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [activeTabIndex])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }

        const timer = setTimeout(() => {
            if (!visitedTabs.current[activeTabIndex]) {
                document.body.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
                window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
                visitedTabs.current[activeTabIndex] = true
            } else {
                const sp = scrollPositions.current[activeTabIndex] || 0
                document.body.scrollTo({ top: sp, behavior: 'instant' as ScrollBehavior })
                window.scrollTo({ top: sp, behavior: 'instant' as ScrollBehavior })
            }
        }, 50)
        return () => clearTimeout(timer)
    }, [activeTabIndex])

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index)
        if (swiperRef.current) {
            swiperRef.current.slideTo(index)
        }

        const clickedTab = tabRefs.current[index]
        const tabsContainer = tabsContainerRef.current

        if (clickedTab && tabsContainer) {
            const containerRect = tabsContainer.getBoundingClientRect()
            const tabRect = clickedTab.getBoundingClientRect()

            const isTabVisible =
                tabRect.left >= containerRect.left &&
                tabRect.right <= containerRect.right

            if (!isTabVisible) {
                clickedTab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                })
            }
        }
    }

    // Helper to render explicit content
    const renderContentForTab = (key: string) => {
        switch (key) {
            case 'safefyPolicy': return <ChildSafetyPolicyContent />
            case 'announcement': return <AnnouncementContent />
            case 'reportCsam': return <ReportCSAMContent />
            default: return null
        }
    }

    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <div className="privacy-policy-header-content">
                    Children Safety
                </div>
                <div className="privacy-policy-header-description bind-account-description">
                    Meko enforces a stringent policy of no tolerance towards any incidents of abuse, exploitation, or sexualization concerning children. Users failing to respect Meko's policies to safeguard minors (individuals below the age of 18) in line with the provisions outlined below may face banned from Meko and potential legal consequences.
                </div>
            </div>
            <div className='child-safety-content'>
                {/* Tab 导航 */}
                <div className='child-safety-tabs' ref={tabsContainerRef}>
                    {TAB_CONFIG.map((item, index) => (
                        <button
                            key={item.title}
                            ref={(el) => (tabRefs.current[index] = el)}
                            className={`child-safety-tab ${activeTabIndex === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>

                {/* Swiper 内容 */}
                <div className='child-safety-swiper-wrapper'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoHeight={true}
                        allowTouchMove={false}
                        watchOverflow={true}

                        onSwiper={(swiper: SwiperType) => {
                            swiperRef.current = swiper
                        }}
                        onSlideChange={(swiper: SwiperType) => setActiveTabIndex(swiper.activeIndex)}
                        initialSlide={activeTabIndex}
                        className="child-safety-swiper"
                    >
                        {TAB_CONFIG.map((item) => (
                            item.title !== 'Detect Service' ? (
                                <SwiperSlide key={item.title}>
                                    <div className='child-safety-content-item'>
                                        <div className='child-safety-content-item-content'>
                                            {renderContentForTab(item.key)}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ) : (
                                <SwiperSlide key={item.title}>
                                    <div className='child-safety-content-item'>
                                        <div className='child-safety-content-item-title'>
                                            UGC Detection
                                        </div>
                                        <div className='child-safety-content-item-desc'>
                                            Upload a picture to detect the age and rating(Normal/Sexual/Pornographic).
                                        </div>
                                        <div className='upload-image-container'>

                                            <div className='upload-image-item-title'>
                                                Upload Photo
                                            </div>
                                            {
                                                uploadImageResult && (
                                                    <img src="/images/close-img.png" alt="" className='close-img' onClick={handleCloseImage} />
                                                )
                                            }
                                            {
                                                !uploadImageResult ? (
                                                    <div className='upload-image-item-content'>
                                                        <img src='/images/upload-img.png' alt='upload-image' />
                                                        <span className='upload-image-item-content-title'>Click upload photo</span>
                                                        <span className='upload-image-item-content-desc'>JPG/JPEG/PNG only, max size:5MB</span>
                                                        <input type='file' accept='image/*' className='upload-image-item-content-input' onChange={handleUploadImage} />
                                                    </div>
                                                ) : (
                                                    <div className='upload-image-item-preview'>
                                                        <img src={uploadImageResult} alt="upload-image-result" />
                                                    </div>
                                                )
                                            }
                                            <div className='start-detect-btn'>
                                                <button 
                                                    className='start-detect-btn-btn' 
                                                    disabled={!uploadImageResult}
                                                    onClick={handleStartDetect}
                                                >
                                                    Start Detect
                                                </button>
                                            </div>

                                        </div>
                                        <div className='detect-result-desc'>
                                            Before uploading images, please be aware that your photos will not be stored on our servers but will be uploaded to third-party detection servers.<br />
                                            Clicking "Start detect" indicates your agreement with our <a href="#/user-agreement" className='terms-of-servics-link policy-link'>Terms of Servics</a> and <a href="#/privacy" className='privacy-policy-link policy-link'>Privacy Policy</a>.
                                        </div>
                                        <div className='upload-image-container'>

                                            <div className='upload-image-item-title'>
                                                Detect Result
                                            </div>
                                            <div className='detect-result-content'>
                                                <div className='detect-result-content-item'>
                                                    <div className='detect-result-content-item-title'>
                                                        Age
                                                    </div>
                                                    <div className='detect-result-content-item-value'>

                                                    </div>
                                                </div>
                                                <div className='detect-result-content-item'>
                                                    <div className='detect-result-content-item-title'>
                                                        Rating <span>(Normal/Sexual/Pornographic)</span>
                                                    </div>
                                                    <div className='detect-result-content-item-value'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        ))}
                    </Swiper>
                </div>
            </div>
            <Toast 
                message="Submit Successfully" 
                show={showToast} 
                onClose={() => setShowToast(false)} 
            />
        </div>
    )
}

export default ChildSafety
