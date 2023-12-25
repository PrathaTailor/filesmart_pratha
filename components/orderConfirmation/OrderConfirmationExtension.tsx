import styles from './orderConfirmation.module.scss';
import iconCheck from '../../images/icons/icon-green-order-check.png';
import ImgLoader from '@components/ImgLoader';
import Link from 'next/link';

export const OrderConfirmation = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Personal Tax Extension</h2>
            <div className={styles.wrapper}>
                <div className={styles.smContainer}>
                    <h3 className={styles.lgTitle}>
                        <span className={styles.icon}>
                            <ImgLoader src={iconCheck.src} alt="Icon Check" width={42} height={42} />
                        </span>
                        <span>Your IRS Tax Extension Has Been Submitted!</span>
                    </h3>
                    <div className={styles.summary}>
                        <h3 className={styles.listTitle}>Here&apos;s a summary of your order:</h3>
                        <ul className={styles.summaryList}>
                            <li>1x Personal Tax Extension</li>
                            <li>1x Priority Response </li>
                            <li>1x Automatic Tax Extension Yearly Subscription (20% OFF)</li>
                            <li>1x IRS Shield Monthly Subscription (30-Day Free Trial)</li>
                        </ul>
                    </div>
                    <div className={styles.manageService}>
                        <h3 className={styles.manageTitle}>Click here to access and manage your services!</h3>
                        <div className={styles.box}>
                            <p>
                                <b>Priority Response:</b> Your IRS tax extension has been put in a priority status and
                                will be submitted to the IRS within a few minutes, if not already. You will be notified
                                about your status via email and on the Status page accessible <Link href="/">here</Link>
                                .{' '}
                            </p>
                        </div>
                        <p>
                            Important! Be sure to add{' '}
                            <Link href="mailto:support@file-tax.net">support@file-tax.net</Link> to the contacts in your
                            email client to ensure you receive important notifications!
                        </p>
                        <p>
                            Logging into your account to check status is always the most reliable way for you to receive
                            timely updates.
                        </p>
                    </div>
                    <div className={styles.upcoming}>
                        <h3 className={styles.upcomingTitle}>What&apos;s Next?</h3>
                        <p>
                            Your information has been saved, and will be transmitted to the Internal Revenue Service
                            shortly if it hasn’t already.
                        </p>
                        <p>
                            When we confirm that the IRS has received your information, you will receive an email from{' '}
                            <Link href="mailto:support@file-tax.net">support@file-tax.net</Link> with an update.
                        </p>
                        <p>
                            After your application is received by the IRS, processing can take a few minutes or up to
                            two days. When your application has been processed, you will receive another email from{' '}
                            <Link href="mailto:support@file-tax.net">support@file-tax.net</Link> informing you whether
                            your extension was accepted or if there were errors. If you are not receiving notices, be
                            sure to check your Spam/Junk folder!
                        </p>
                        <div className={styles.btnWrapper}>
                            <button className={`${styles.btn} ${styles.transparent}`}>View Application Status</button>
                            <button className={`${styles.btn} ${styles.blue}`}>File Another Extension</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
