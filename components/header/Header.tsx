import { builder } from '@builder.io/react';
import styles from './header.module.scss';
import logo from '../../images/assets/logo.png';
import iconLogin from '../../images/icons/icon-login.png';
import iconArrow from '../../images/icons/icon-arrow-right.svg';
import hamburgerIcon from '../../images/icons/icon-hamburger.svg';
import crossIcon from '../../images/icons/icon-cross.svg';
import ImgLoader from '../ImgLoader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { parseCookies, destroyCookie, setCookie } from 'nookies';
import { clearProductCookies } from '@utils/urlHelpers';

export const Header = (props: { visibility: boolean; centered: boolean; hamburgerMenu: boolean }) => {
    const { visibility, centered, hamburgerMenu } = props;
    const router = useRouter();
    const [isMobileView, setIsMobileView] = useState(false);
    const width = 991;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleResize = () => {
        if (window.innerWidth < width) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    };

    const cookies = parseCookies();
    let isLoggedIn = false;
    if ('authenticated' in cookies && cookies.authenticated == 'true') {
        isLoggedIn = true;
    }

    useEffect(() => {
        window.innerWidth < width ? setIsMobileView(true) : setIsMobileView(false);
        window.addEventListener('resize', handleResize);
    }, [width]);
    return (
        <>
            <div className={centered ? styles.centeredContainer : styles.container}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <ImgLoader className={styles.logo} src={logo.src} height={84} width={84} alt="Logo" />
                    </Link>
                </div>
                {visibility === true && (
                    <div className={styles.loginContainer}>
                        {isLoggedIn === false ? (
                            <p className={styles.login}>
                                <>
                                    <span className={styles.loginBtn} onClick={() => router.push('/login')}>
                                        Login
                                    </span>
                                    <span>
                                        <button
                                            id="header-cta"
                                            className="cta-btn"
                                            onClick={() => {
                                                builder.track('ctaButtonClick');
                                                router.push('/submit-return');
                                            }}
                                        >
                                            Sign Up
                                            <ImgLoader
                                                className={styles.forwardArrow}
                                                src={iconArrow}
                                                height={10}
                                                width={10}
                                                alt="Forward Arrow"
                                            />
                                        </button>
                                    </span>
                                </>
                            </p>
                        ) : (
                            <p className={styles.login}>
                                <span className={styles.loginBtn} onClick={() => router.push('/dashboard')}>
                                    Dashboard
                                </span>
                                <span
                                    className={styles.loginBtn}
                                    onClick={async () => {
                                        await router.push('/logout?ts=' + new Date().getTime());
                                    }}
                                >
                                    Logout
                                </span>
                            </p>
                        )}
                    </div>
                )}
                {hamburgerMenu === true &&
                    (isMobileView === false ? (
                        <div className={styles.loginContainer}>
                            <p className={styles.login}>
                                <span className={styles.loginBtn} onClick={() => router.push('/')}>
                                    Home
                                </span>
                                <span className={styles.loginBtn} onClick={() => router.push('/login')}>
                                    Blog
                                </span>
                                <span className={styles.loginBtn} onClick={() => router.push('/faq')}>
                                    FAQs
                                </span>
                                <span className={styles.loginBtn} onClick={() => router.push('/contact-us')}>
                                    Contact Us
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div onClick={toggleMenu} className={styles.toggleWrapper}>
                                <div className={styles.menuIconWrapper}>
                                    <ImgLoader
                                        src={isMenuOpen ? crossIcon : hamburgerIcon}
                                        height={30}
                                        width={30}
                                        alt="Hamburger"
                                        className={styles.iconMenu}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {isMenuOpen && (
                <ul className={styles.navbarSmallContainer}>
                    <li className={styles.loginBtn} onClick={() => router.push('/')}>
                        Home
                    </li>
                    <li className={styles.loginBtn} onClick={() => router.push('/login')}>
                        Blog
                    </li>
                    <li className={styles.loginBtn} onClick={() => router.push('/faq')}>
                        FAQs
                    </li>
                    <li className={styles.loginBtn} onClick={() => router.push('/contact-us')}>
                        Contact Us
                    </li>
                </ul>
            )}
        </>
    );
};
