import React from 'react';
import styles from './orderSummary.module.scss';
import ImgLoader from '@components/ImgLoader';
import bagdeCheck from '../../../../images/icons/icon-green-check.svg';

const OrderSummary = (checked :any) => {
    return (
        <div className={styles.container}>
            <div className={styles.orderSummaryWrapper}>
                <p className={styles.cardHeading}>PAY YEARLY & SAVE</p>
                <p className={styles.cardTitle}>I’m ready to file today</p>
                <p className={styles.cardTitleBottom}>(or will be within 5 months)</p>
                <div className={styles.cardPriceDetails}>
                    <p className={styles.cardPrice}>
                      {/* {checked? <span>&9.95/month</span> :
                      ( 
                      <> */}
                      <span className={styles.priceUnit}>$</span>
                        <span className={styles.priceInteger}>99 </span>
                        <span className={styles.priceDecimal}>.95 </span>
                        <span className={styles.planTerm}>/Year</span>
                        {/* </>)} */}
                    </p>
                    <p className={styles.priceComment}>File by October 16th</p>
                </div>
                <div className={styles.badgeWrapper}>
                    <div className={styles.badgeTitle}>
                        <ImgLoader src={bagdeCheck} width={22} height={22} alt="Logo Icon" />
                        <span className={styles.badgeIconTitle}>All-Inclusive </span>
                    </div>
                    <p className={styles.payContent}>
                        Pay-as-You-Go <span>Plan</span>{' '}
                    </p>
                    <p className={styles.cancel}>Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
