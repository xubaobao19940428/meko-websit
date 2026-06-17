import '@/styles/deleteAccount.scss'
import '@/styles/footer.scss'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/images/meko-logo-bundle/mark.svg'
import { Toast } from '@/components/ui/toast'

// All countries/regions sorted A-Z
const ALL_COUNTRIES = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia',
    'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia',
    'Eswatini', 'Ethiopia',
    'Fiji', 'Finland', 'France',
    'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    'Haiti', 'Holy See', 'Honduras', 'Hong Kong', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast',
    'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    'Macau', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
    'North Macedonia', 'Norway',
    'Oman',
    'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal',
    'Qatar',
    'Romania', 'Russia', 'Rwanda',
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
    'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain',
    'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu',
    'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
    'Vanuatu', 'Venezuela', 'Vietnam',
    'Yemen',
    'Zambia', 'Zimbabwe'
].sort()

const COUNTRY_OPTIONS = ALL_COUNTRIES.map(c => ({ value: c, label: c }))

// 自定义下拉选择组件
interface CustomSelectProps {
    value: string
    options: { value: string; label: string }[]
    onChange: (value: string) => void
    className?: string
}

const CustomSelect = ({ value, options, onChange, className = '' }: CustomSelectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const selectRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const selectedOption = options.find(opt => opt.value === value) || options[0]

    return (
        <div className={`custom-select ${className}`} ref={selectRef}>
            <div
                className={`custom-select-trigger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="custom-select-value">{selectedOption.label}</span>
                <img
                    src="/images/arrow-down.png"
                    alt=""
                    className={`custom-select-arrow ${isOpen ? 'rotated' : ''}`}
                />
            </div>
            {isOpen && (
                <div className="custom-select-dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`custom-select-option ${value === option.value ? 'selected' : ''}`}
                            onClick={() => {
                                onChange(option.value)
                                setIsOpen(false)
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const DeleteAccount = () => {
    const [activeStep, setActiveStep] = useState(1)
    const [toastMessage, setToastMessage] = useState('')
    const [formErrors, setFormErrors] = useState<Record<string, string>>({})
    
    // 定义初始表单数据
    const initialFormData = {
        country: 'Afghanistan',
        name: '',
        mobileNumber: '',
        email: '',
        accountType: 'Meko ID',
        accountId: '',
        rightExercising: 'Erasure',
        reasoning: [
            {
                label: 'I believe that it is no longer necessary for Meko to hold the personal data it holds about me.',
                value: false,
            },
            {
                label: 'Meko is processing my personal data on the basis of my consent, and I wish to withdraw my consent.',
                value: false
            },
            {
                label: 'Meko is processing my personal data on the basis of legitimate interest and I object to such processing.',
                value: false
            },
            {
                label: 'I believe the personal data Meko holds about me is being unlawfully processed.',
                value: false
            }
        ]
    }
    
    const [formData, setFormData] = useState(initialFormData)
    const navigate = useNavigate()

    const handleInputChange = (field: string, value: string | boolean | number) => {
        if (typeof value === 'string') {
            if (field === 'name' && value.length > 50) return
            if (field === 'mobileNumber') {
                if (!/^[0-9+\s]*$/.test(value)) return
                if (value.length > 25) return
            }
            if (field === 'email' && value.length > 100) return
            if (field === 'accountId' && value.length > 50) return
        }

        if (formErrors[field]) {
            setFormErrors(prev => {
                const next = { ...prev }
                delete next[field]
                return next
            })
        }
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleReasoningChange = (index: number) => {
        setFormData(prev => ({
            ...prev,
            reasoning: prev.reasoning.map((item, i) => i === index ? { ...item, value: !item.value } : item)
        }))
        if (formErrors.reasoning) {
            setFormErrors(prev => {
                const next = { ...prev }
                delete next.reasoning
                return next
            })
        }
    } 

    const validateStep = (step: number): boolean => {
        const errors: Record<string, string> = {}
        if (step === 1) {
            if (!formData.country.trim()) {
                errors.country = 'Please select a country/region'
            }
            if (!formData.accountId.trim()) {
                errors.accountId = `Please enter your ${formData.accountType}`
            }
        } else if (step === 2) {
            const hasCheckedReason = formData.reasoning.some(r => r.value)
            if (!hasCheckedReason) {
                errors.reasoning = 'Please select at least one reason for deletion'
            }
        } else if (step === 3) {
            if (!formData.name.trim()) {
                errors.name = 'Please enter your name'
            }
            if (!formData.mobileNumber.trim()) {
                errors.mobileNumber = 'Please enter your mobile number'
            }
            if (!formData.email.trim()) {
                errors.email = 'Please enter your email'
            } else if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
                errors.email = 'Please enter a valid email address (e.g. name@domain.com)'
            }
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleNext = () => {
        if (validateStep(activeStep)) {
            setActiveStep(prev => prev + 1)
        } else {
            setToastMessage('Please complete all required fields on this step.')
        }
    }

    const handleBack = () => {
        setActiveStep(prev => Math.max(1, prev - 1))
        setFormErrors({})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateStep(3)) {
            console.log('Form submitted:', formData)
            setToastMessage('Deletion request submitted successfully!')
            setFormData(initialFormData)
            setFormErrors({})
            setActiveStep(1)
        } else {
            setToastMessage('Submission failed. Please check the fields and try again.')
        }
    }

    const handleDownAndroid = () => {
        window.open('https://play.google.com/store/apps/details?id=com.kikapika.meko', '_blank')
    }

    const handleDownIos = () => {
        window.open('https://apps.apple.com/us/app/meko-chat/id6755861992', '_blank')
    }

    return (
        <div className="delete-account-container">
            <header>
                <div className='delete-account-left'>
                    <img src={logo} alt="Meko Logo" />
                    <span className='delete-account-left-title'>Meko</span>
                </div>
                <div className='delete-account-right' onClick={() => navigate(-1)}>
                    <img src="/images/go-back.png" alt="Go Back" />
                </div>
            </header>
            
            <div className='delete-account-content'>
                <div className='delete-account-content-top'>
                    <div className='delete-account-content-top-title'>
                        Meko Data Subject Rights Request Form
                    </div>
                    <div className='delete-account-content-top-description'>
                        For an overview of data subject rights available to you please refer to the <span className='delete-account-content-top-description-span' onClick={() => navigate('/privacy')}>Meko Privacy Policy</span>. If you feel that one of the rights applies to you and you wish to exercise it please complete the form and submit it to us together with the verification documentation.
                    </div>
                </div>

                {/* Step Progress Indicators */}
                <div className="wizard-progress-bar">
                    <div className={`progress-step ${activeStep >= 1 ? 'active' : ''}`}>
                        <div className="step-num">1</div>
                        <div className="step-title">Verify Account</div>
                    </div>
                    <div className={`progress-line ${activeStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${activeStep >= 2 ? 'active' : ''}`}>
                        <div className="step-num">2</div>
                        <div className="step-title">Reason</div>
                    </div>
                    <div className={`progress-line ${activeStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${activeStep >= 3 ? 'active' : ''}`}>
                        <div className="step-num">3</div>
                        <div className="step-title">Confirm Identity</div>
                    </div>
                </div>

                <form className='delete-account-content-form' onSubmit={handleSubmit}>
                    
                    {/* Step 1: Account Information */}
                    {activeStep === 1 && (
                        <div className="step-content-section animate-fade-in">
                            <div className='delete-account-content-form-title'>
                                Identify your Meko account
                            </div>
                            <div className='delete-account-content-form-description'>
                                Choose your region and select either Meko ID or Google Account associated with Meko.
                            </div>

                            <div className='form-section'>
                                <div className='form-field'>
                                    <label className='form-label'>Country/Region</label>
                                    <CustomSelect
                                        value={formData.country}
                                        options={COUNTRY_OPTIONS}
                                        onChange={(value) => handleInputChange('country', value)}
                                    />
                                    {formErrors.country && <div className='form-error-msg'>{formErrors.country}</div>}
                                </div>

                                <div className='form-field'>
                                    <label className='form-label'>Select account identification type</label>
                                    <CustomSelect
                                        value={formData.accountType}
                                        options={[
                                            { value: 'Meko ID', label: 'Meko ID' },
                                            { value: 'Google account', label: 'Google account' }
                                        ]}
                                        onChange={(value) => handleInputChange('accountType', value)}
                                    />
                                </div>

                                <div className='form-field'>
                                    <label className='form-label'>Enter your {formData.accountType}</label>
                                    <input
                                        type="text"
                                        className={`form-input ${formErrors.accountId ? 'form-input-error' : ''}`}
                                        value={formData.accountId}
                                        maxLength={50}
                                        onChange={(e) => handleInputChange('accountId', e.target.value)}
                                        placeholder={`Enter your ${formData.accountType}`}
                                    />
                                    {formErrors.accountId && <div className='form-error-msg'>{formErrors.accountId}</div>}
                                </div>
                            </div>

                            <div className="wizard-buttons">
                                <button type="button" className="btn-next" onClick={handleNext}>
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Deletion Reason */}
                    {activeStep === 2 && (
                        <div className="step-content-section animate-fade-in">
                            <div className='delete-account-content-form-title'>
                                Select rights & reasoning
                            </div>
                            <div className='delete-account-content-form-description'>
                                Please choose which right you are exercising and select at least one reasoning option.
                            </div>

                            <div className='form-section'>
                                <div className='form-field'>
                                    <label className='form-label form-label-checkbox'>Right exercising</label>
                                    <div className='checkbox-group'>
                                        <label className='checkbox-label'>
                                            <input
                                                type="checkbox"
                                                checked={formData.rightExercising === 'Erasure'}
                                                onChange={() => handleInputChange('rightExercising', 'Erasure')}
                                                className='checkbox-input'
                                            />
                                            <span className='checkbox-custom'></span>
                                            <span className='checkbox-text'>Erasure (Request Deletion)</span>
                                        </label>
                                    </div>
                                </div>

                                <div className='form-field form-section-reasoning'>
                                    <label className='form-label'>Reasoning checklist</label>
                                    <div className='checkbox-group'>
                                        {formData.reasoning.map((item, index) => (
                                            <label key={index} className='checkbox-label'>
                                                <input
                                                    type="checkbox"
                                                    checked={item.value || false}
                                                    onChange={() => handleReasoningChange(index)}
                                                    className='checkbox-input'
                                                />
                                                <span className='checkbox-custom'></span>
                                                <span className='checkbox-group-text'>{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {formErrors.reasoning && <div className='form-error-msg'>{formErrors.reasoning}</div>}
                                </div>
                            </div>

                            <div className="wizard-buttons">
                                <button type="button" className="btn-back" onClick={handleBack}>
                                    Back
                                </button>
                                <button type="button" className="btn-next" onClick={handleNext}>
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Identity & Submit */}
                    {activeStep === 3 && (
                        <div className="step-content-section animate-fade-in">
                            <div className='delete-account-content-form-title'>
                                Confirm your identity
                            </div>
                            <div className='delete-account-content-form-description'>
                                Enter your contact information accurately so we can verify ownership and process the deletion request.
                            </div>

                            <div className='form-section'>
                                <div className='form-field'>
                                    <label className='form-label'>Full Name</label>
                                    <input
                                        type="text"
                                        className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                                        value={formData.name}
                                        maxLength={50}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                    {formErrors.name && <div className='form-error-msg'>{formErrors.name}</div>}
                                </div>

                                <div className='form-field'>
                                    <label className='form-label'>Mobile number you are currently using</label>
                                    <input
                                        type="tel"
                                        className={`form-input ${formErrors.mobileNumber ? 'form-input-error' : ''}`}
                                        value={formData.mobileNumber}
                                        maxLength={25}
                                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                                        placeholder="Enter your mobile number"
                                    />
                                    {formErrors.mobileNumber && <div className='form-error-msg'>{formErrors.mobileNumber}</div>}
                                </div>

                                <div className='form-field'>
                                    <label className='form-label'>Email for correspondence</label>
                                    <input
                                        type="email"
                                        className={`form-input ${formErrors.email ? 'form-input-error' : ''}`}
                                        value={formData.email}
                                        maxLength={100}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                    {formErrors.email && <div className='form-error-msg'>{formErrors.email}</div>}
                                </div>
                            </div>

                            <div className="wizard-buttons">
                                <button type="button" className="btn-back" onClick={handleBack}>
                                    Back
                                </button>
                                <button type="submit" className='form-submit-button'>
                                    Submit Request
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="footer-logo-section">
                            <div className="footer-logo-wrapper">
                                <img src={logo} alt="Meko logo" className='footer-logo-icon' />
                                <span className="footer-logo-text">Meko</span>
                            </div>
                            <h3 className="footer-title">
                                Meko keeps global conversations simple, safer, and easy to manage.
                            </h3>
                        </div>

                        <div className="footer-buttons is-download-hidden">
                            <img src="/images/google-play.webp" alt="Google Play Store" className="footer-button" onClick={handleDownAndroid}/>
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
            <Toast
                message={toastMessage}
                show={!!toastMessage}
                onClose={() => setToastMessage('')}
            />
        </div>
    )
}

export default DeleteAccount
