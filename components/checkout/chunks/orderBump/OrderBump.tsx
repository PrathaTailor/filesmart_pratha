import React, { Dispatch, SetStateAction } from 'react';
import styles from './orderBump.module.scss';
import logoBbb from '../../../../images/assets/logo-bbb-sm.png';
import logoTrustArc from '../../../../images/assets/logo-trust-arc.svg';
import logoAes from '../../../../images/assets/logo-aes.png';
import ImgLoader from '@components/ImgLoader';

const OrderBump = (setChecked: any, checked: boolean) => {
    // setChecked(false)
    const handleClick = () => setChecked(!checked);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.upgradeSection}>
                    <div className={styles.checkboxWrapper}>
                        <form>
                            <label className={styles.checkbox}>
                                <input
                                    // onChange={(e) => setChecked(true)}
                                    // checked={checked}
                                    type="checkbox"
                                />
                                <span className={styles.checkmark}></span>
                            </label>
                        </form>
                    </div>
                    <p className={styles.upgradeContent}>YES! I want to upgrade to the yearly plan and save 20% now.</p>
                </div>
                <p className={styles.upgradeExplanation}>
                    <span className={styles.startRed}>EXTENSION INCLUDED:</span> By upgrading to the FileSmart yearly
                    plan you’ll be able to file your extension and receive professional support from our tax
                    professionals all year round. Subscribe to the yearly plan for $99/year and{' '}
                    <span className={styles.saveContent}>save 20% </span> compared to the monthly fee!
                </p>
            </div>
            <div className={styles.logos}>
                <div className={styles.logo}>
                    <ImgLoader className={styles.logo} src={logoBbb.src} height={43} width={60} alt="Logo BBB" />
                </div>
                <div className={styles.logo}>
                    <ImgLoader
                        className={styles.logo}
                        src={logoTrustArc}
                        height={36}
                        width={133}
                        alt="Logo Trust Arc"
                    />
                </div>
                <div className={styles.logo}>
                    <ImgLoader className={styles.logo} src={logoAes.src} height={42} width={157} alt="Logo AES" />
                </div>
            </div>
        </div>
    );
};

export default OrderBump;
