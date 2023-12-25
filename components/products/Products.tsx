import { builder } from '@builder.io/react';
import styles from './products.module.scss';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';
import { useRouter } from 'next/router';

interface Product {
    title: string;
    subTitle: string;
    note: string;
    buttonMainText: string;
    buttonSubText: string;
    productBanner: ImageObj;
    smallProductBanner: ImageObj;
    productBadge: ImageObj;
    buttonIcon: ImageObj;
}

interface Service {
    serviceTitle: string;
    serviceDescription: string;
}

export const Products = (props: { services: Service[]; products: Product }) => {
    const { services = [], products } = props;
    const router = useRouter();
    return (
        <div className={styles.productContainer}>
            <div className={styles.descWrapper}>
                <h2
                    className={styles.wrapperTitle}
                    dangerouslySetInnerHTML={{
                        __html:
                            products?.title ||
                            'Are You Ready To <span style="color: rgb(15, 30, 255);">FileSmart<sup>TM</sup> ?</span>'
                    }}
                />
                <p
                    className={styles.wrapperSubTitle}
                    dangerouslySetInnerHTML={{
                        __html:
                            products?.subTitle || 'Switch to the <u>all-inclusive way</u> today and never look back.'
                    }}
                />
                <div className={styles.stepper}>
                    {services.map((data: Service, index: number) => {
                        return (
                            <div key={index} className={styles.stepperStep}>
                                <span className={styles.stepperNum}>{index + 1}</span>
                                <div className={styles.stepperDesc}>
                                    <h3
                                        className={styles.stepperTitle}
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                data?.serviceTitle ||
                                                'Become a <span style="color: rgb(15, 30, 255);">FileSmart</span> Member'
                                        }}
                                    />

                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                data?.serviceDescription ||
                                                'For only <u>33¢ per day</u>, your tax needs are covered all year round. '
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.btnWraper}>
                    <button className={`${styles.btn} cta-btn`} id="product-cta"
                        onClick={() => {
                            builder.track('ctaButtonClick');
                            router.push('/submit-return')
                        }}
                    >
                        <span className={styles.lg}>{products?.buttonMainText || 'Get Started Now'}</span>
                        <span className={styles.sm}>{products?.buttonSubText || 'With no hidden fees'}</span>
                        {products?.buttonIcon.src && (
                            <div className={styles.btnIcon}>
                                <ImgLoader src={products?.buttonIcon.src} alt="Icon Thumb" width={13} height={13} />
                            </div>
                        )}
                    </button>
                </div>
            </div>
            <div className={styles.productBanner}>
                {products?.productBanner.src && (
                    <div className={styles.productRefund}>
                        <ImgLoader
                            // @ts-ignore
                            src={window.innerWidth > 600 ? products?.productBanner.src : products?.smallProductBanner}
                            alt="Icon Thumb"
                            width={window.innerWidth > 600 ? products?.productBanner.width : 245.35}
                            height={window.innerWidth > 600 ? products?.productBanner.height : 302}
                        />
                    </div>
                )}
                {products?.productBadge.src && (
                    <div className={styles.productBadge}>
                        <ImgLoader
                            src={products?.productBadge.src}
                            alt="Icon Thumb"
                            width={products?.productBadge.width}
                            height={products?.productBadge.height}
                        />
                    </div>
                )}
                <p
                    className={styles.note}
                    dangerouslySetInnerHTML={{
                        __html: products?.note || '*For illustrative purposes only'
                    }}
                />
            </div>
        </div>
    );
};
