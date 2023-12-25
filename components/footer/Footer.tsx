import styles from './footer.module.scss';
import Link from 'next/link';
import ImgLoader from '../ImgLoader';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Detail {
    title: string;
    disclaimersTitle: string;
    disclaimersDescription: string;
    termsText: string;
    privacyText: string;
    refundText: string;
    contactText: string;
    logo: string;
    isrLogo: string;
    bbbLogo: string;
    sslLogo: string;
    arcTrustLogo: string;
    secureTrustLogo: string;
    aesLogo: string;
    mailIcon: string;
    linkedinIcon: string;
    instagramIcon: string;
    facebookIcon: string;
}

export const Footer = (props: { details: Detail }) => {
    const { details } = props;
    const [stickyFooter, setStickyFooter] = useState(false);
    const router = useRouter();
    const handleScroll = () => {
        setStickyFooter(document.body.classList.contains('sticky-footer'));
    };

    useEffect(() => {
        document.body.classList.remove('sticky-footer');
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={`${styles.wrapper} footerMain`}>
                <div className={stickyFooter ? `${styles.container} ${styles.withStickyFooter}` : styles.container}>
                    <div className={styles.details}>
                        <div className={styles.titleWrapper}>
                            <div className={styles.twContainer}>
                                <div onClick={() => router.push('/')}>
                                    <ImgLoader
                                        className={styles.logo}
                                        src={details.logo}
                                        height={78}
                                        width={78}
                                        alt="Filesmart Tax Logo"
                                    />
                                </div>
                                <p className={styles.textLg}>{details?.title}</p>
                            </div>
                            <div className={styles.disclaimers}>
                                <h4 className={styles.disclaimersTitle}>{details?.disclaimersTitle}</h4>
                                <p>{details?.disclaimersDescription}</p>
                            </div>
                        </div>
                        <div className={styles.socialMedia}>
                            <div className={styles.content}>
                                <p>
                                    <Link href="/terms-of-use">{details.termsText}</Link>
                                </p>
                                <p>
                                    <Link href="/privacy-policy">{details.privacyText}</Link>
                                </p>
                                <p>
                                    <Link href="/refund-policy">{details.refundText || 'Refund Policy'}</Link>
                                </p>
                                <p>
                                    <Link href="/contact-us">{details.contactText || 'Contact Us'}</Link>
                                </p>
                            </div>
                            <div className={styles.mediaWrap}>
                                <span
                                    className={styles.iconWrapper}
                                    onClick={() => router.push('mailto:support@filesmart.tax')}
                                >
                                    <ImgLoader
                                        className={styles.media}
                                        src={details.mailIcon}
                                        height={19}
                                        width={24}
                                        alt="Icon Mail"
                                    />
                                </span>
                                <span
                                    className={styles.iconWrapper}
                                    onClick={() => router.push('https://www.linkedin.com/company/filesmarttax')}
                                >
                                    <ImgLoader
                                        className={styles.media}
                                        src={details.linkedinIcon}
                                        height={19}
                                        width={19}
                                        alt="Icon Linkedin"
                                    />
                                </span>
                                <span
                                    className={styles.iconWrapper}
                                    onClick={() => router.push('https://www.instagram.com/filesmart.tax/')}
                                >
                                    <ImgLoader
                                        className={styles.media}
                                        src={details.instagramIcon}
                                        height={19}
                                        width={19}
                                        alt="Icon Instagram"
                                    />
                                </span>
                                <span
                                    className={styles.iconWrapper}
                                    onClick={() => router.push('https://www.facebook.com/FileSmart.tax')}
                                >
                                    <ImgLoader
                                        className={styles.media}
                                        src={details.facebookIcon}
                                        height={19}
                                        width={19}
                                        alt="Icon Facebook"
                                    />
                                </span>
                            </div>
                            <div className={styles.logos}>
                                <div className={styles.logo}>
                                    <ImgLoader
                                        className={styles.logo}
                                        src={details.bbbLogo}
                                        height={53}
                                        width={73}
                                        alt="Logo BBB"
                                    />
                                </div>
                                <div className={styles.logo}>
                                    <ImgLoader
                                        className={styles.logo}
                                        src={details.arcTrustLogo}
                                        height={44}
                                        width={161}
                                        alt="Logo Trust Arc"
                                    />
                                </div>
                                <div className={styles.logo}>
                                    <ImgLoader
                                        className={styles.logo}
                                        src={details.aesLogo}
                                        height={52}
                                        width={190}
                                        alt="Logo AES"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBottom}>&#169; FileSmart.Tax All rights reserved.</div>
                </div>
            </div>
        </>
    );
};
