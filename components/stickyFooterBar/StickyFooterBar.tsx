import { builder } from '@builder.io/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './stickyFooterBar.module.scss';
interface StickyFooterDetails {
    text: string;
    btnText: string;
    btnLink: string;
}
export const StickyFooterBar = (props: { stickyFooterDetails: StickyFooterDetails }) => {
    const { stickyFooterDetails } = props;
    const router = useRouter();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        document.body.classList.remove('sticky-footer');
    } else {
        document.body.classList.add('sticky-footer');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 330) || currentScrollPos < 320
        );
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
    return (
        <div
            style={{ bottom: visible ? '-100%' : '0px' }}
            className={`${styles.stickyfooter} ${styles.resBtnWrapper} `}
        >
            <div className={styles.stickyfooterbox}>
                <div className={styles.stickyfooterp1}>
                    <h6
                        dangerouslySetInnerHTML={{
                            __html: stickyFooterDetails?.text
                        }}
                    />
                </div>
                <div className={styles.stickyfooterp2}>
                    <button
                        onClick={() => {
                            builder.track('ctaButtonClick');
                            router.push(stickyFooterDetails.btnLink)
                        }}
                        className={`${styles.btn} cta-btn`}
                        id="sticky-bottom-cta"
                    >
                        {stickyFooterDetails?.btnText}
                    </button>
                </div>
            </div>
        </div>
    );
};
