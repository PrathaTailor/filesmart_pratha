import React, { useState, useEffect } from 'react';
import styles from './step3.module.scss';
import iconArrow from '../../../../images/icons/icon-arrow-right.png';
import ImgLoader from '@components/ImgLoader';
import iconWatch from '../../../../images/icons/icon-yellow-watch.png';
import { useRouter } from 'next/router';
import ImageObj from '@utils/interfaces';
import QuizCountdownTimer from '../quizCounter/QuizCounter';

interface StepThreeBannerContent {
    quizBanner: ImageObj;
    iconWatch: ImageObj;
    title: string;
    subTitle: string;
    counterDays: number;
}

export const Step3 = (props: { stepThreeBannerContent: StepThreeBannerContent }) => {
    const [name, setName] = useState('');
    const { stepThreeBannerContent } = props;

    const router = useRouter();

    const onChangeHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
        setName(e.target.value);
    };

    const submitHandler = () => {
        if (name) {
            localStorage.setItem('userName', name);
            router.push({
                pathname: '/quiz-step4'
            });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.block}>
                    <h2 className={styles.title}>What is full your name?</h2>
                    <div className={styles.form}>
                        <input type="text" onChange={onChangeHandler} name="name" placeholder="Enter your full name" />
                    </div>
                    <button
                        className={name.trim().length > 0 ? `${styles.btn}` : `${styles.btn} ${styles.btnDisable}`}
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
                    src={stepThreeBannerContent?.quizBanner?.src}
                    alt="Quiz Banner"
                    width={690}
                    height={1080}
                />
                <div className={styles.box}>
                    <div className={styles.sm}>
                        <p
                            className={styles.title}
                            dangerouslySetInnerHTML={{
                                __html: stepThreeBannerContent?.title
                            }}
                        ></p>
                    </div>

                    <div className={styles.deadline}>
                        <ImgLoader src={iconWatch.src} alt="Icon Watch" width={15} height={14} />
                        <span>{stepThreeBannerContent?.subTitle}</span>

                        <span className={styles.timer}>
                            {' '}
                            <QuizCountdownTimer targetDate={stepThreeBannerContent?.counterDays} />{' '}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
