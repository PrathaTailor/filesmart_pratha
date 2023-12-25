import QuizDateTimeDisplay from './QuizDateTimeDisplay';
// import { useCountdown } from '../../../hooks/useCountdown';
import { useCountdown } from '../../../../hooks/useCountdown';

import styles from './QuizCounter.module.scss';

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <div className={styles.showCounter}>
            <QuizDateTimeDisplay
                value={days <= 9 ? '0' + days : days}
                type={'d'}
                isDanger={days <= 3}
            />
            <p className={styles.dots}>:</p>
            <QuizDateTimeDisplay
                value={hours <= 9 ? '0' + hours : hours}
                type={'h'}
                isDanger={days <= 3}
            />
            <p className={styles.dots}>:</p>
            <QuizDateTimeDisplay
                value={minutes <= 9 ? '0' + minutes : minutes}
                type={'m'}
                isDanger={days <= 3}
            />
            {/* <p className={styles.dots}>:</p>
            <QuizDateTimeDisplay
                value={seconds <= 9 ? '0' + seconds : seconds}
                type={seconds <= 1 ? 'second' : 'seconds'}
                isDanger={days <= 3}
            /> */}
        </div>
    );
};

const QuizCountdownTimer = ({ targetDate }: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

export default QuizCountdownTimer;
