import styles from './orderConfirmation.module.scss';
import iconCheck from '../../images/icons/icon-green-order-check.png';
import ImgLoader from '@components/ImgLoader';
import Link from 'next/link';

export const OrderConfirmation = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.wrapper} ${styles.success}`}>
                <div className={styles.smContainer}>
                    <h3 className={styles.lgTitle}>
                        <span className={styles.icon}>
                            <ImgLoader src={iconCheck.src} alt="Icon Check" width={42} height={42} />
                        </span>
                        <span>Your Order Has Been Proccessed Succesfully</span>
                    </h3>
                    <div className={styles.summary}>
                        <h3 className={styles.listTitle}>Here&apos;s a summary of your order:</h3>
                        <ul className={styles.summaryList}>
                            <li>FileSmart 6-Month Plan</li>
                            <li>Federal Tax filing included</li>
                            <li>State Tax filing included</li>
                        </ul>
                        <p>
                            Important! Be sure to add{' '}
                            <Link href="mailto:support@filesmart.tax">support@filesmart.tax</Link> to your contacts, so
                            you never miss any reminders or updates from us.
                        </p>
                    </div>
                    <div className={styles.upcoming}>
                        <h3 className={styles.upcomingTitle}>What&apos;s Next?</h3>
                        <p>
                            If you&apos;re ready to file your return, follow the link in your Member dashboard to do so.
                        </p>
                        <p>Access to all other member benefits can be found on your dashboard as well.</p>
                        <p>
                            And if you have questions, we&apos;re always here to help. Simply{' '}
                            <Link href="mailto:support@filesmart.tax">submit a ticket</Link>, and we&apos;ll get right back to you!
                        </p>
                        <div className={styles.btnWrapper}>
                            <button className={`${styles.btn} ${styles.blue}`}>Access Your Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
