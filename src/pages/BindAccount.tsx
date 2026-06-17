import '@/styles/privacy.scss'
import { useState, useEffect } from 'react'
import request from '@/api/request'

interface BannedUser {
    id: string
    nickname: string
    reason: string
    bannedTime: string
}

const BindAccount = () => {
    const [bindAccountContent, setBindAccountContent] = useState<BannedUser[]>([])
    const [lastUpdateDate, setLastUpdateDate] = useState<string>('')

    const getBanList = async () => {
        try {
            const data = await request('/MekoBanList.json', 'GET') as { records: BannedUser[]; lastUpdate: string }
            setBindAccountContent(data.records || [])
            setLastUpdateDate(data.lastUpdate || '')
        } catch (err) {
            console.error('Failed to fetch ban list:', err)
        }
    }

    useEffect(() => {
        getBanList()
    }, [])

    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <div className="privacy-policy-header-content">
                    Trust & Safety Log
                </div>
                <div className="privacy-policy-header-description bind-account-description">
                    Meko is committed to building a safe, positive, and secure global community. We enforce a zero-tolerance policy against violations, especially those impacting minors. Below is our transparency enforcement ledger.
                </div>
            </div>

            {/* Safety Stats Metrics */}
            <div className="safety-metrics-grid">
                <div className="metric-card">
                    <div className="metric-icon">🛡️</div>
                    <div className="metric-info">
                        <div className="metric-value">Zero Tolerance</div>
                        <div className="metric-label">Minor Protection Policy</div>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon">👁️</div>
                    <div className="metric-info">
                        <div className="metric-value">24/7 Active</div>
                        <div className="metric-label">AI & Manual Moderation</div>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon">🚫</div>
                    <div className="metric-info">
                        <div className="metric-value">980+ Banned</div>
                        <div className="metric-label">Enforced Safety Violations</div>
                    </div>
                </div>
            </div>

            <div className='bind-account-content'>
                <div className='bind-account-title'>
                    Account Enforcement Log
                </div>
                <div className='bind-account-description-row'>
                    <div className='bind-account-description-left'>
                        Last Updated: {lastUpdateDate || 'Recently'}
                    </div>
                    <div className='bind-account-description-right'>
                        Security Contact: <a href="mailto:maxmekosocial@gmail.com">maxmekosocial@gmail.com</a>
                    </div>
                </div>
                <div className='bind-account-content-desc'>
                    The following log entries record recent accounts permanently banned from the Meko platform due to safety or community violations:
                </div>

                {bindAccountContent && bindAccountContent.length > 0 ? (
                    <div className='banned-accounts-table-wrapper'>
                        <table className='banned-accounts-table'>
                            <thead>
                                <tr>
                                    <th>UserID</th>
                                    <th>Nickname</th>
                                    <th>Reason</th>
                                    <th>Enforcement Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bindAccountContent.map((user, index) => {
                                    const maskedNickname = user.nickname 
                                        ? user.nickname.charAt(0) + '*****' + user.nickname.charAt(user.nickname.length - 1)
                                        : 'M*****r'
                                    return (
                                        <tr key={index}>
                                            <td className="user-id">#{user.id}</td>
                                            <td className="nickname">{maskedNickname}</td>
                                            <td className="reason"><span className="reason-tag">{user.reason}</span></td>
                                            <td className="banned-time">{user.bannedTime}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-ban-records">
                        No recent ban logs recorded.
                    </div>
                )}
            </div>
        </div>
    )
}

export default BindAccount
