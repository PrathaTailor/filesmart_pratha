import styles from './QuizCounter.module.scss';

const QuizDateTimeDisplay = ({ value, type, isDanger }: any) => {
    return (
        <div className={isDanger ? `${styles.countdown} ${styles.danger}` : `${styles.countdown}`}>
            <span>{value}{type}</span>
            {/* <span>{type}</span> */}
        </div>
    );
};

export default QuizDateTimeDisplay;
