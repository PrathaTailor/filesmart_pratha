import React, { useState } from 'react';
import ImgLoader from '@components/ImgLoader';
import styles from './announcementBar.module.scss';
import iconArrow from '../../images/icons/icon-arrow-right-blue.png';
import iconClose from '../../images/icons/icon-close-white.png';
import { useRouter } from 'next/router';
import { useCountdown } from 'hooks/useCountdown';
import { builder } from '@builder.io/react';

interface AnnouncementBarDetails {
    titleWExt: string;
    titleWOExt: string;
    btnTextWExt: string;
    btnTextWOExt: string;
    btnLink: string;
    targetDate: number;
    withExtension: boolean;
}
export const AnnouncementBar = (props: { announcementBarDetails: AnnouncementBarDetails }) => {
    const { announcementBarDetails } = props;
    const router = useRouter();
    const [open, setClose] = useState(true);
    const [days, minutes] = useCountdown(announcementBarDetails?.targetDate);

    return (
        <div className={open ? styles.announcement : styles.noAnnouncement}>
            <div className={open ? `${styles.bar}` : `${styles.bar} ${styles.close}`}>
                {announcementBarDetails?.withExtension === true
                    ? announcementBarDetails?.titleWExt.replace(
                          '{{x}} days and {{y}} minutes',
                          `${days || '25'} ${days > 1 ? 'days' : 'day'} and ${minutes || '30'} ${
                              minutes > 1 ? 'minutes' : 'minute'
                          } `
                      )
                    : announcementBarDetails?.titleWOExt.replace('{{x}}', `${days}` || '25')}{' '}
                <button
                    className={`${styles.btn} cta-btn`}
                    id="sticky-top-cta"
                    onClick={() => {
                        builder.track('ctaButtonClick');
                        router.push(announcementBarDetails?.btnLink)
                    }}
                >
                    <span>
                        {announcementBarDetails?.withExtension === true
                            ? announcementBarDetails?.btnTextWExt
                            : announcementBarDetails?.btnTextWOExt}
                    </span>{' '}
                    <ImgLoader className={styles.icon} src={iconArrow.src} alt="Icon Arrow" height={10} width={11} />
                </button>
                <div className={styles.btnWrapper} onClick={() => setClose(!open)}>
                    <ImgLoader className={styles.close} src={iconClose.src} alt="icon Close" height={16} width={16} />
                </div>
            </div>
        </div>
    );
};
