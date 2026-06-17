import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useCallback } from 'react'
import '@/styles/home.scss'
import '@/styles/footer.scss'
import UpTopImage from '@/assets/images/up-top.png'
import logo from '@/assets/images/meko-logo-bundle/mark.svg'

const navItems = [
    { path: '/about', label: 'Home' },
]

const Layout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isShowUpTopImage, setIsShowUpTopImage] = useState(false)
    const navLinksRef = useRef<HTMLDivElement>(null)
    const underlineRef = useRef<HTMLDivElement>(null)
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

    // Scroll tracking for routes
    const scrollPositions = useRef<{ [key: string]: number }>({})
    const visitedPaths = useRef<Set<string>>(new Set())
    const isInitialMount = useRef(true)
    const isRestoring = useRef(false)

    const isActive = (path: string) => {
        return location.pathname === path
    }
    const handleUpTopImage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // 移动下划线到指定链接位置
    const moveUnderlineToLink = useCallback((linkIndex: number) => {
        if (linkIndex !== -1 && linkRefs.current[linkIndex] && underlineRef.current && navLinksRef.current) {
            const targetLink = linkRefs.current[linkIndex]
            const navLinks = navLinksRef.current
            const underline = underlineRef.current

            const navLinksRect = navLinks.getBoundingClientRect()
            const targetLinkRect = targetLink.getBoundingClientRect()

            const translateX = targetLinkRect.left - navLinksRect.left
            const width = targetLinkRect.width

            underline.style.width = `${width}px`
            underline.style.transform = `translateX(${translateX}px)`
        }
    }, [])

    // 更新下划线位置到当前激活的链接
    const updateUnderline = useCallback(() => {
        const paths = navItems.map(item => item.path)
        const activeIndex = paths.findIndex(path => location.pathname === path)
        moveUnderlineToLink(activeIndex)
    }, [location.pathname, moveUnderlineToLink])

    // 处理链接 hover
    const handleLinkHover = useCallback((linkIndex: number) => {
        moveUnderlineToLink(linkIndex)
    }, [moveUnderlineToLink])

    // 处理链接离开 hover
    const handleLinkLeave = useCallback(() => {
        updateUnderline()
    }, [updateUnderline])

    useEffect(() => {
        updateUnderline()

        // 监听窗口大小改变
        window.addEventListener('resize', updateUnderline)
        return () => {
            window.removeEventListener('resize', updateUnderline)
        }
    }, [updateUnderline])
    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (isRestoring.current) {
                        ticking = false
                        return
                    }

                    // 获取滚动位置，兼容不同浏览器
                    const scrollPosition = window.pageYOffset ||
                        document.documentElement.scrollTop ||
                        document.body.scrollTop ||
                        0
                    
                    // 记录当前路由的滚动位置
                    scrollPositions.current[location.pathname] = scrollPosition

                    // 更新返回顶部按钮显示状态
                    if (scrollPosition > document.documentElement.clientHeight) {
                        setIsShowUpTopImage(true)
                    } else {
                        setIsShowUpTopImage(false)
                    }

                    ticking = false
                })
                ticking = true
            }
        }

        // 方式4: 监听 document.body scroll
        document.body.addEventListener('scroll', handleScroll, false)
        window.addEventListener('scroll', handleScroll, false)

        // 立即执行一次，检查初始滚动位置
        handleScroll()


        return () => {
            document.body.removeEventListener('scroll', handleScroll, false)
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [location.pathname])

    // 路由切换时恢复滚动位置
    useEffect(() => {
        // Handle redirect from root
        if (location.pathname === '/' || location.pathname === '') {
            navigate('/about', { replace: true })
            return
        }

        if (isInitialMount.current) {
            isInitialMount.current = false
            visitedPaths.current.add(location.pathname)
            return
        }

        isRestoring.current = true
        const currentPath = location.pathname
        const savedPosition = scrollPositions.current[currentPath] || 0

        const timer = setTimeout(() => {
            if (!visitedPaths.current.has(currentPath)) {
                // 首次访问该页面
                document.body.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
                window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
                visitedPaths.current.add(currentPath)
            } else {
                // 再次访问该页面，恢复上次位置
                document.body.scrollTo({ top: savedPosition, behavior: 'instant' as ScrollBehavior })
                window.scrollTo({ top: savedPosition, behavior: 'instant' as ScrollBehavior })
            }

            // 完全恢复后再解锁滚动记录
            setTimeout(() => {
                isRestoring.current = false
            }, 100)
        }, 50)

        return () => clearTimeout(timer)
    }, [location.pathname])
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }
    const handleDownloadButtonClick = () => {
        window.open('https://play.google.com/store/apps/details?id=com.kikapika.meko', '_blank')
    }
    const handleDownAndroid = () => {
        window.open('https://play.google.com/store/apps/details?id=com.kikapika.meko', '_blank')
    }
    const handleDownIos = () => {
        window.open('https://apps.apple.com/us/app/meko-chat/id6755861992', '_blank')
    }
    const showMobileMenuButton = navItems.length > 1

    return (
        <div className="layout-wrapper">
            {/* 导航栏 */}
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-inner">
                        {/* Logo */}
                        <Link to="/" className="logo-link">
                            <img src={logo} alt="Meko" className="logo-icon" />
                            {/* <div className="logo-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="logo-svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div> */}
                            <span className="logo-text">Meko</span>
                        </Link>

                        {/* Navigation Links */}
                        <div className="nav-links" ref={navLinksRef}>
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.path}
                                    ref={(el) => (linkRefs.current[index] = el)}
                                    to={item.path}
                                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                                    onMouseEnter={() => handleLinkHover(index)}
                                    onMouseLeave={handleLinkLeave}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="nav-underline" ref={underlineRef}></div>
                        </div>

                        <div className="nav-button-wrapper is-download-hidden">
                            <button className="download-nav-button" onClick={handleDownloadButtonClick}>
                                Download
                            </button>
                        </div>

                        {showMobileMenuButton && (
                            <button
                                type="button"
                                className={`mobile-nav-button ${isMobileMenuOpen ? 'open' : ''}`}
                                onClick={toggleMobileMenu}
                                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span />
                                <span />
                                <span />
                            </button>
                        )}

                        {/* 移动端菜单 */}
                        {showMobileMenuButton && isMobileMenuOpen && (
                            <>
                                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
                                <div className="mobile-menu">
                                    <div className="mobile-menu-links">
                                        {navItems.map(item => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className={`mobile-nav-link ${isActive(item.path) ? 'active' : ''}`}
                                                onClick={closeMobileMenu}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <Outlet />
            </main>

            {/* 页脚 */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* Logo and Description */}
                        <div className="footer-logo-section">
                            <div className="footer-logo-wrapper">
                                {/* <div className="footer-logo-icon"> */}
                                <img src={logo} alt="Meko" className="footer-logo-icon" />
                                {/* </div> */}
                                <span className="footer-logo-text">Meko</span>
                            </div>
                            <h3 className="footer-title">
                                Meko keeps global conversations simple, safer, and easy to manage.
                            </h3>
                        </div>

                        <div className="footer-buttons is-download-hidden">
                            <img src="/images/google-play.webp" alt="Get it on Google Play" className="footer-button" onClick={handleDownAndroid} />
                            <button className="footer-button footer-button--ios" onClick={handleDownIos}>
                                App Store
                            </button>
                        </div>
                    </div>

                    {/* Divider and Copyright */}
                    <div className="footer-divider">
                        <div className="footer-copyright">
                            <p>Meko Social Limited</p>
                            <p>Room 602, 6/F, Kai Yue Commercial Building, No. 2C Argyle Street, Mong Kok, Kowloon, Hong Kong</p>
                            <p>Contact: <a href="mailto:maxmekosocial@gmail.com">maxmekosocial@gmail.com</a></p>
                            <p>Copyright &copy; 2025 Meko Social Limited</p>
                        </div>
                    </div>
                </div>
            </footer>
            {
                isShowUpTopImage && (
                    <img
                        src={UpTopImage}
                        alt="Back to top"
                        className='up-top-image'
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            handleUpTopImage()
                        }}
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    />
                )
            }
        </div>
    )
}

export default Layout
