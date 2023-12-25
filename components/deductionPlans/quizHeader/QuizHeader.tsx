import React from 'react';
import styles from './quizHeader.module.scss';
import logo from '../../../images/assets/logo.png';
import logoCross from '../../../images/icons/icon-cross.svg';
import { useRouter } from 'next/router'


import ImgLoader from '@components/ImgLoader';

export const QuizHeader = () => {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <ImgLoader src={logo.src} alt="Icon Close" width={100} height={100} />
                </div>
                <div className={styles.headerContent}>
                    <p className={styles.topContent}>DEDUCTIONS PLAN</p>
                    <p className={styles.bottomContent}>Find Your Deductions and How to Get Them</p>
                </div>
                <div className={styles.closeBtnWrapper} onClick={() => router.back()}>
                    <div className={styles.closeBtnContent}>
                        <ImgLoader src={logoCross.src} alt="Icon Close" width={28} height={28} />
                    </div>
                </div>
            </div>
        </div>
    );
};
