import ImgLoader from '@components/ImgLoader';
import styles from './extension.module.scss';
import heroBanner from '../../images/assets/extension-hero-banner.png';
import iconExtensionBbbLogo from '../../images/icons/icon-extension-bbb-logo.png';
import iconExtension1mLogo from '../../images/icons/icon-extension-1m-logo.png';
import iconExtensionIrsLogo from '../../images/icons/icon-extension-irs-logo.png';
import iconExtensionSecureLogo from '../../images/icons/icon-extension-secure-logo.png';
import iconPhase1 from '../../images/icons/icon-extension-phase-1.png';
import iconPhase2 from '../../images/icons/icon-extension-phase-2.png';
import iconPhase3 from '../../images/icons/icon-extension-phase-3.png';
import iconBenefitsTax from '../../images/icons/icon-extension-benefits-tax-extension.png';
import iconBenefitsMonths from '../../images/icons/icon-extension-benefits-extra-months.png';
import iconRatings from '../../images/icons/icon-blue-ratings-stars.png';

interface ExtensionDetails {
    title: string;
    subTitle: string;
}

export const Extension = (props: { extensionDetails: ExtensionDetails }) => {
    const { extensionDetails } = props;
    return (
        <>
            {/* Hero Section Start */}
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2
                            className={styles.title}
                            dangerouslySetInnerHTML={{
                                __html: extensionDetails?.title
                            }}
                        />
                        <p
                            dangerouslySetInnerHTML={{
                                __html: extensionDetails?.subTitle
                            }}
                        />
                        <button id="extension-cta" className={styles.btn}>
                            Get Started Now
                        </button>
                    </div>
                    <div className={styles.banner}>
                        <ImgLoader src={heroBanner.src} alt="Hero Banner" height={333} width={520} />
                    </div>
                </div>
            </div>
            {/* Hero Section End */}

            {/* Social Proof Start */}
            <div className={styles.socialProof}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <ImgLoader src={iconExtensionBbbLogo.src} alt="BBB Logo" width={140} height={111} />
                        <p>A+ Rated with the BBB</p>
                    </div>
                    <div className={styles.logo}>
                        <ImgLoader src={iconExtension1mLogo.src} alt="1m Logo" width={140} height={111} />
                        <p>Over 1,000,000 accounts created</p>
                    </div>
                    <div className={styles.logo}>
                        <ImgLoader src={iconExtensionIrsLogo.src} alt="IRS Logo" width={140} height={111} />
                        <p>IRS Approved E-File Provider</p>
                    </div>
                    <div className={styles.logo}>
                        <ImgLoader
                            src={iconExtensionSecureLogo.src}
                            alt="Secure and Safe Logo"
                            width={140}
                            height={111}
                        />
                        <p>Your data is 100% safe and secure</p>
                    </div>
                </div>
            </div>
            {/* Social Proof End */}

            {/* Explanation Start */}
            <div className={styles.explanation}>
                <div className={styles.container}>
                    <h3 className={styles.title}>
                        Easily extend your tax return for <span>FREE</span>. We&apos;ll show you how!
                    </h3>
                    <p>
                        Need a tax extension? All U.S. taxpayers are eligible to request more time to file. Our service
                        will help prepare your federal extension form which you can print and mail, for free! Need fast
                        digital confirmation? As an authorized IRS e-file provider, we will submit your request
                        electronically, confirm receipt, and support you along the way for a small filing fee!
                    </p>
                </div>
            </div>
            {/* Explanation End */}

            {/* Phases Section Start */}
            <div className={styles.phases}>
                <div className={styles.container}>
                    <h3 className={styles.title}>
                        E-file your extension direct to the IRS, and get confirmation FAST!
                    </h3>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <ImgLoader src={iconPhase1.src} alt="Phase 1" width={42} height={73} />
                            <p>Fill out our simple preset form</p>
                        </div>
                        <div className={styles.block}>
                            <ImgLoader src={iconPhase2.src} alt="Phase 2" width={42} height={73} />
                            <p>Submit the extension to the IRS</p>
                        </div>
                        <div className={styles.block}>
                            <ImgLoader src={iconPhase3.src} alt="Phase 3" width={42} height={73} />
                            <p>Receive confirmation from the IRS</p>
                        </div>
                    </div>
                    <button className={styles.btn}>Get Started</button>
                </div>
            </div>
            {/* Phases Section End */}

            {/* Benefits Section Start */}
            <div className={styles.benefits}>
                <div className={styles.container}>
                    <div className={styles.block}>
                        <ImgLoader src={iconBenefitsTax.src} alt="Icon Benefits" width={168} height={168} />
                        <div className={styles.desc}>
                            <h3 className={styles.title}>The Benefits of a Tax Extension</h3>
                            <p>
                                Life gets busy, and finances can be complicated. If you find yourself in either of these
                                two situations, rest assured as you may be eligible to receive additional time to
                                compile the necessary paperwork for your return. Taking more time on your return may
                                help you avoid mistakes and minimize your tax liability. It is important to note that
                                this is an extension to file, not an extension to pay any{' '}
                            </p>
                        </div>
                    </div>
                    <div className={styles.block}>
                        <ImgLoader src={iconBenefitsMonths.src} alt="Icon Benefits" width={168} height={168} />
                        <div className={styles.desc}>
                            <h3 className={styles.title}>Did You Know You Can Have An Extra 6 Months?</h3>
                            <p>
                                Federal income tax extensions are good for five months. With the 2021 tax year deadline
                                being April 18th, 2021, that means you have until October 15th, 2022 to complete the
                                task. Think you could use the extra time?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Benefits Section End */}

            {/* Testimonials Section Start */}
            <div className={styles.testimonials}>
                <div className={styles.container}>
                    <p>
                        See what some of the hundreds of thousands of satisifed customers have to say about our
                        services:
                    </p>
                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <ImgLoader src={iconRatings.src} alt="Ratings" width={144} height={29} />
                            <div className={styles.content}>
                                <p className={styles.quote}>“Professionalism, speed & accuracy!”</p>
                                <p className={styles.client}>Kevin B</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <ImgLoader src={iconRatings.src} alt="Ratings" width={144} height={29} />
                            <div className={styles.content}>
                                <p className={styles.quote}>“Simple & Easy!”</p>
                                <p className={styles.client}>Claire R</p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <ImgLoader src={iconRatings.src} alt="Ratings" width={144} height={29} />
                            <div className={styles.content}>
                                <p className={styles.quote}>“We got my problem resolved!”</p>
                                <p className={styles.client}>Perry D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
