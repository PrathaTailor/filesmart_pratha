import { builder } from '@builder.io/react';
import styles from './hero.module.scss';
import iconStar from '../../images/icons/icon-star-full.svg';
import iconStarHalf from '../../images/icons/icon-star-half.png';
import ImgLoader from '../ImgLoader';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Heros {
    title: string;
    subTitle: string;
    buttonText: string;
    testimonialUserProfile: any;
    testimonialUserName: string;
    testimonialQuote: string;
}

export const Hero = (props: { heros: Heros }) => {
    const { heros } = props;
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h2
                className={styles.title}
                dangerouslySetInnerHTML={{
                    __html: heros.title
                }}
            />
            <p
                className={styles.subTitle}
                dangerouslySetInnerHTML={{
                    __html: heros.subTitle
                }}
            />
            <div className={styles.btnContainer}>
                <button id="hero-cta" className={`${styles.btn} cta-btn`}
                    onClick={() => {
                        builder.track('ctaButtonClick');
                        router.push('/submit-return')
                    }}
                >
                    {heros.buttonText}
                </button>
            </div>
            <div className={styles.testimonial}>
                <div className={styles.person}>
                    <div className={styles.avatar}>
                        <ImgLoader
                            src={heros.testimonialUserProfile}
                            height={heros.testimonialUserProfile.height}
                            width={heros.testimonialUserProfile.width}
                            alt="Icon Profile"
                        />
                    </div>
                    <div className={styles.personDetail}>
                        <p
                            className={styles.personQuote}
                            dangerouslySetInnerHTML={{
                                __html: heros.testimonialQuote
                            }}
                        />
                        <p
                            className={styles.personPos}
                            dangerouslySetInnerHTML={{
                                __html: heros.testimonialUserName
                            }}
                        />
                    </div>
                </div>
                <div className={styles.rating}>
                    <div className={styles.ratingStars}>
                        <ImgLoader className={styles.star} src={iconStar.src} height={24} width={24} alt="Star" />
                        <ImgLoader className={styles.star} src={iconStar.src} height={24} width={24} alt="Star" />
                        <ImgLoader className={styles.star} src={iconStar.src} height={24} width={24} alt="Star" />
                        <ImgLoader className={styles.star} src={iconStar.src} height={24} width={24} alt="Star" />
                        <ImgLoader className={styles.star} src={iconStarHalf.src} height={24} width={24} alt="Star" />
                    </div>
                    <p className={styles.ratingText}>Rated 4.8 / 5 stars</p>
                    <p className={styles.note}>by advisors & clients across the US</p>
                </div>
            </div>
        </div>
    );
};
