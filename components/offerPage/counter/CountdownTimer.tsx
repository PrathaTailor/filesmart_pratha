import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../../../hooks/useCountdown';
import styles from './counter.module.scss';

const ExpiredNotice = () => {
    return (
        <div className={styles.expiredNotice}>
            <span>File a Late Return</span>
            <p>
                If you haven’t paid your taxes, you’ll be charged a 0.5% fee (failure to pay) and if you don’t file an
                extension now, you’ll be charged up to 25% fee (failure to file).
            </p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <div className={styles.showCounter}>
            <DateTimeDisplay
                value={days <= 9 ? '0' + days : days}
                type={days <= 1 ? 'day' : 'days'}
                isDanger={days <= 3}
            />
            <p className={styles.dots}>:</p>
            <DateTimeDisplay
                value={hours <= 9 ? '0' + hours : hours}
                type={hours <= 1 ? 'hour' : 'hours'}
                isDanger={days <= 3}
            />
            <p className={styles.dots}>:</p>
            <DateTimeDisplay
                value={minutes <= 9 ? '0' + minutes : minutes}
                type={minutes <= 1 ? 'minute' : 'minutes'}
                isDanger={days <= 3}
            />
            {/* <p className={styles.dots}>:</p>
            <DateTimeDisplay
                value={seconds <= 9 ? '0' + seconds : seconds}
                type={seconds <= 1 ? 'second' : 'seconds'}
                isDanger={days <= 3}
            /> */}
        </div>
    );
};

const CountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes <= 0) {
        return <ExpiredNotice />;
    } else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
};

export default CountdownTimer;
