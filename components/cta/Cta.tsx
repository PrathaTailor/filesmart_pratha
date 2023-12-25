import { builder } from '@builder.io/react';
import styles from './cta.module.scss';
import { useEffect, useState } from 'react';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';
import { useRouter } from 'next/router';

interface CtaDetail {
    title: string;
    subTitle: string;
    buttonSymbol: ImageObj;
    buttonText: string;
    buttonSmallText: string;
}

export const Cta = (props: { ctaDetails: CtaDetail }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const { ctaDetails } = props;
    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 700) || currentScrollPos < 650
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <div className={styles.ctaWrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>{ctaDetails.title}</h2>
                <p className={styles.content}>{ctaDetails.subTitle}</p>
                <div className={styles.btnWrapper}>
                    <button className={`${styles.btn} cta-btn`} id="content-cta"
                        onClick={() => {
                            builder.track('ctaButtonClick');
                            router.push('/submit-return')
                        }}>
                        <p className={styles.btnText}>
                            <span className={styles.lg}>{ctaDetails.buttonText}</span>
                            <span className={styles.sm}>{ctaDetails.buttonSmallText}</span>
                        </p>
                        <ImgLoader
                            className={styles.arrow}
                            src={ctaDetails.buttonSymbol.src}
                            width={13}
                            height={13}
                            alt="Arrow"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
