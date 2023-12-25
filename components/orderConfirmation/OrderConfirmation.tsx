import styles from './orderConfirmation.module.scss';
import iconCheck from '../../images/icons/icon-green-order-check.png';
import ImgLoader from '@components/ImgLoader';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface OrderConfirmationprops {
    hasExtension: boolean;
    hasShield: boolean;
    hasCourses: boolean;
    hasSupport: boolean;
    planName: string;
}

export const OrderConfirmation = (props: OrderConfirmationprops) => {
    const { hasExtension, planName, hasShield, hasCourses, hasSupport } = props;
    console.log('OrderConfirmation props', props);
    const router = useRouter();

    const goToEngine = async () => {
        await router.push('/dashboard');
    };

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
                            <li>{planName}</li>
                            {hasExtension && <li>Tax extension filing included</li>}
                            <li>Federal Tax filing included</li>
                            <li>State Tax filing included</li>
                            {hasShield && <li>Full Access to IRS Shield</li>}
                            {hasCourses && <li>Access to course library to learn tax-saving tips and tools</li>}
                            {hasSupport && <li>Ask our team of tax experts up to 5 questions/month</li>}
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
                        {hasExtension && (
                            <p>
                                If you need additional time to prepare your taxes, there will also be an option to file
                                a 6-month tax extension.
                            </p>
                        )}
                        <p>Access to all other member benefits can be found on your dashboard as well.</p>
                        <p>
                            And if you have questions, we&apos;re always here to help. Simply{' '}
                            <Link href="mailto:support@filesmart.tax">submit a ticket</Link>, and we&apos;ll get right
                            back to you!
                        </p>
                        <div className={styles.btnWrapper}>
                            <button
                                id="order-conf-cta"
                                onClick={(x) => goToEngine()}
                                className={`${styles.btn} ${styles.blue}`}
                            >
                                Access Your Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
