import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import iconCheck from '../../../images/icons/icon-round-check.png';
import styles from './counter.module.scss';
import ImgLoader from '../../ImgLoader';

interface Detail {
    counterText: string;
    counterDays: number;
    counterIcon: string;
}

export const Counter = (props: { details: Detail }) => {
    const { details } = props;
    const THREE_DAYS_IN_MS = details?.counterDays * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (
        <div className={styles.counterWrapper}>
            <p className={styles?.counterText}>
                <Image src={details?.counterIcon} alt="Icon Check" height={15} width={15} />
                <p
                    dangerouslySetInnerHTML={{
                        __html: details?.counterText
                    }}
                ></p>
            </p>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
    );
};
