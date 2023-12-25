import { builder } from '@builder.io/react';
import styles from './offer.module.scss';
import iconCheck from '../../images/icons/icon-check.svg';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';
import { useRouter } from 'next/router';

interface Benefit {
    image: ImageObj;
    title: string;
}

interface Feature {
    image: ImageObj;
    title: string;
}

interface Detail {
    title: string;
    subTitle: string;
    iconAllInclusive: string;
    additionalText: string;
    pricingDescription: string;
    pricing: number;
    buttonText: string;
    buttonSmallText: string;
    buttonSymbol: ImageObj;
    featureListTitle: string;
    expertImage: ImageObj;
    expertLogoText: string;
    expertSign: ImageObj;
    expert: string;
    expertLogo: ImageObj;
}

export const Offer = (props: { benefits: Benefit[]; features: Feature[]; offers: Detail }) => {
    const { benefits = [], features = [], offers } = props;
    let pricing = offers.pricing.toString().split('.');
    const router = useRouter();

    return (
        <section className={styles.offerWrapper}>
            <div className={styles.container}>
                <div className={styles.offerDetails}>
                    <h2 className={styles.offerTitle}>
                        <ImgLoader
                            className={styles.iconAllInclusive}
                            src={offers.iconAllInclusive}
                            height={28}
                            width={28}
                            alt="Icon All Inclusive"
                        />
                        <span className={styles.offerTitleSm}>{offers.title}</span>
                    </h2>
                    <p className={styles.offerSubDesc}>{offers.subTitle}</p>
                    <ul className={styles.offerList}>
                        {benefits.map((data: Benefit, index: number) => {
                            return (
                                <li key={index} className={styles.item}>
                                    <span className={styles.imgWrap}>
                                        <ImgLoader src={data.image.src} height={14} width={11} alt="Icon" />
                                    </span>
                                    {data.title || 'Federal Return'}
                                </li>
                            );
                        })}
                    </ul>
                    <p
                        className={styles.getAdditional}
                        dangerouslySetInnerHTML={{
                            __html: offers.additionalText
                        }}
                    ></p>
                    <div className={styles.pricingSection}>
                        <span className={styles.pricingDesc}>{offers.pricingDescription}</span>
                        <div className={styles.pricing}>
                            <p className={styles.pricingWrapper}>
                                <span className={styles.sign}>$</span>
                                <span className={styles.amount}>{pricing[0]}</span>
                                <span className={styles.floatValue}>.{pricing[1]}</span>
                            </p>
                        </div>
                    </div>
                    <h4 className={styles.featureListTitle}>{offers.featureListTitle}</h4>
                    <ul className={styles.featuresList}>
                        {features.map((data: Feature, index: number) => {
                            return (
                                <li key={index} className={styles.item}>
                                    <span className={styles.imgWrap}>
                                        <ImgLoader
                                            className={styles.plus}
                                            src={data.image.src}
                                            height={32}
                                            width={32}
                                            alt="Icon"
                                        />
                                    </span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.title || 'Are You Ready To FileSmart'
                                        }}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles.btnWrapper}>
                        <button id="offer-cta" className={`${styles.btn} cta-btn`}
                            onClick={() => {
                                builder.track('ctaButtonClick');
                                router.push('/submit-extension')
                            }}>
                            <p className={styles.btnText}>
                                <span className={styles.lgText}>{offers.buttonText || 'Get Started'}</span>
                                <span className={styles.smText}>{offers.buttonSmallText}</span>
                            </p>
                            <ImgLoader
                                className={styles.iconArrow}
                                src={offers.buttonSymbol.src}
                                width={13}
                                height={13}
                                alt="Icon Arrow"
                            />
                        </button>
                    </div>
                </div>

                <div className={styles.offerBanner} style={{ backgroundImage: `url(${offers.expertImage.src})` }}>
                    <div className={styles.expertCard}>
                        <div className={styles.fileSmartWrap}>
                            <ImgLoader
                                className={styles.iconCheck}
                                src={iconCheck.src}
                                height={iconCheck.height}
                                width={iconCheck.width}
                                alt="Icon check"
                            />
                            <span
                                className={styles.expertLogoText}
                                dangerouslySetInnerHTML={{
                                    __html: offers.expertLogoText || 'FileSmart Expert'
                                }}
                            />
                        </div>
                        <div className={styles.expertDetail}>
                            <ImgLoader
                                className={styles.expertSign}
                                src={offers.expertSign.src}
                                height={54}
                                width={256}
                                alt="Expert Sign"
                            />
                            <span className={styles.expertName}>{offers.expert || 'Samantha G., J.D.'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
