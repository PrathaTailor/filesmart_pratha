import styles from './counter.module.scss'

const DateTimeDisplay = ({ value, type, isDanger }:any) => {
    return (
        <div className={isDanger ? `${styles.countdown} ${styles.danger}` : `${styles.countdown}`}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;