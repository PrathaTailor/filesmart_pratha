import React, { useState, useEffect } from 'react';
import styles from './step4.module.scss';
import iconArrow from '../../../../images/icons/icon-arrow-right.png';
import ImgLoader from '@components/ImgLoader';
import { useRouter } from 'next/router';
import ImageObj from '@utils/interfaces';
import QuizCountdownTimer from '../quizCounter/QuizCounter';

interface StepFourBannerContent {
    quizBanner: ImageObj;
    iconWatch: ImageObj;
    title: string;
    subTitle: string;
    counterDays: number;
}

export const Step4 = (props: { stepFourBannerContent: StepFourBannerContent }) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [checkedEmail, setCheckedEmail] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const { stepFourBannerContent } = props;

    useEffect(() => {
        if (error && checkedEmail) {
            setBtnActive(true);
        } else {
            setBtnActive(false);
        }
    }, [email, checkedEmail, error, submit]);

    function isEmail(val: string) {
        let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        return regEmail.test(val);
    }

    const onChangeHandler = (e: { target: { value: string } }) => {
        if (isEmail(e.target.value)) {
            setError(true);
            setEmail(e.target.value);
        } else {
            setError(false);
        }
    };

    const submitHandler = () => {
        setSubmit(true);
        if (email) {
            localStorage.setItem('userEmail', email);
            router.push({
                pathname: '/quiz-result'
            });
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.block}>
                    <h2 className={styles.title}>What is your email?</h2>
                    <div className={styles.form}>
                        <input
                            type="email"
                            name="email"
                            required
                            onChange={onChangeHandler}
                            placeholder="Enter your email"
                        />
                        <div
                            className={styles.agree}
                            onClick={() => {
                                setCheckedEmail(!checkedEmail);
                            }}
                        >
                            <input
                                type="checkbox"
                                name="agree"
                                onClick={() => setBtnActive(!btnActive)}
                                checked={checkedEmail ? true : false}
                            />
                            <p>
                                By checking this box, I certify that I have read and agree to the Terms of Use, Privacy
                                Policy and Refund Policy.
                            </p>
                        </div>
                    </div>
                    <button
                        className={btnActive ? ` ${styles.btn}` : `${styles.btn} ${styles.btnDisable}`}
                        onClick={submitHandler}
                    >
                        <span className={styles.btnText}>Next</span>{' '}
                        <ImgLoader src={iconArrow.src} alt="Icon Arrow" width={13} height={13} />
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <ImgLoader
                    className={styles.banner}
                    src={stepFourBannerContent?.quizBanner?.src}
                    alt="Quiz Banner"
                    width={690}
                    height={1080}
                />
                <div className={styles.box}>
                    <div className={styles.sm}>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: stepFourBannerContent?.title
                            }}
                        ></p>
                    </div>
                    <div className={styles.deadline}>
                        <ImgLoader
                            src={stepFourBannerContent?.iconWatch?.src}
                            alt="Icon Watch"
                            width={15}
                            height={14}
                        />
                        <span>{stepFourBannerContent?.subTitle}</span>
                        <span className={styles.timer}>
                            <QuizCountdownTimer targetDate={stepFourBannerContent?.counterDays} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
