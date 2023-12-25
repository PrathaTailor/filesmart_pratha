import { useState } from 'react';
import styles from './checkout.module.scss';
import { CheckoutTestimonial } from './chunks/checkoutTestimonials/CheckoutTestimonial';
import OrderBump from './chunks/orderBump/OrderBump';
import OrderSummary from './chunks/orderSummary/OrderSummary';

export const Checkout = () => {
    const [checked, setChecked] = useState(true)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <OrderBump setChecked={setChecked} checked={checked}/>
                </div>
                <div className={styles.right}>
                    <OrderSummary checked={checked} />
                    <CheckoutTestimonial />
                </div>
            </div>
        </div>
    );
};
