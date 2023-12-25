import { builder } from '@builder.io/react';
import { useRouter } from 'next/router';
import styles from './pricing.module.scss';
import { useState, useContext } from 'react';
import { FeatureListOne, FeatureListTwo, PricingDetailsOne, PricingDetailsTwo } from './pricing.builder';
import { ProductContext } from 'pages/[[...page]]';
import { catalogApi } from '@atomicleads/tax-client';
import { parseCookies, setCookie } from 'nookies';
import axios from 'axios';
import { getEngineRedirectURL } from '@atomicleads/ext-satellite-form';

export const Pricing = (props: {
    title: string;
    pricingDetailsOne: PricingDetailsOne;
    pricingDetailsTwo: PricingDetailsTwo;
    featureListOne: FeatureListOne[];
    featureListTwo: FeatureListTwo[];
}) => {
    const { title, pricingDetailsOne, pricingDetailsTwo, featureListOne = [], featureListTwo = [] } = props;
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const products = useContext(ProductContext);

    if (!products || products.length === 0) {
        return <>Products Not Loaded</>;
    }

    const prOne = products.filter((pr) => pr.sku === pricingDetailsOne.oneTimePlanProduct)[0];
    const prTwo = products.filter((pr) => pr.sku === pricingDetailsTwo.montlyPlanProduct)[0];

    const selectProduct = async (product: catalogApi.Product) => {
        console.log('client selected product: ', product.sku);
        if (!product.sku) {
            console.error('bad product selected', product);
            return;
        }

        setCookie(null, 'product-selected', product.sku, {
            maxAge: 20 * 60,
            path: '/'
        });
        setCookie(null, 'product-focus', 'return', {
            maxAge: 20 * 60,
            path: '/'
        });

        const cookies = parseCookies();

        const redirectToRegistration = () => {
            router.push({
                pathname: '/submit-return',
                query: {
                    product: product.sku
                }
            });
        };

        // User is already authenticated, redirecting to engine redirect as is
        if ('authenticated' in cookies) {
            const transferResponse = await axios.post('/api/transfer');
            if (transferResponse.status === 200 && transferResponse.data.token) {
                const engine: string = process.env.NEXT_PUBLIC_ENGINE_URL as string;
                const url = await getEngineRedirectURL({
                    action: cookies['action'] ?? 'register',
                    provider: cookies['provider'] ?? 'email',
                    token: transferResponse.data.token,
                    cookies: cookies,
                    engine: engine,
                    skipDataLayer: true
                });
                await router.replace(url);
                return;
            }
        } else {
            redirectToRegistration();
        }
    };

    return (
        <div className={styles.fluid} id="plans">
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <h3 className={styles.boxTitle}>{pricingDetailsOne?.title}</h3>
                        <div className={styles.priceCont}>
                            <p className={styles.pricingWrapper}>
                                <span>${formatPrice(prOne?.basePrice)}</span>
                            </p>
                            <p
                                className={styles.pricingWrapper}
                                dangerouslySetInnerHTML={{
                                    __html: pricingDetailsOne.pricingWrapper
                                }}
                            />
                        </div>
                        <p className={styles.noFees}>{pricingDetailsOne?.noFees}</p>
                        <button
                            className={`${styles.btn} cta-btn`}
                            id="plan-5995-cta"
                            onClick={() => {
                                builder.track('ctaButtonClick');
                                selectProduct(prOne)
                            }}
                        >
                            {pricingDetailsOne?.btnText}
                        </button>
                        <ul className={styles.features}>
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListOne[0].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListOne[1].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListOne[2].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListOne[3].item
                                }}
                            />
                        </ul>
                    </div>
                    <div className={styles.box}>
                        <h3 className={styles.boxTitle}>{pricingDetailsTwo.title}</h3>
                        <div className={styles.priceCont}>
                            <p className={styles.pricingWrapper}>
                                <span>${formatPrice(prTwo?.basePrice)}</span>
                            </p>
                            <p
                                className={styles.pricingWrapper}
                                dangerouslySetInnerHTML={{
                                    __html: pricingDetailsTwo.pricingWrapper
                                }}
                            />
                        </div>
                        <p className={styles.noFees}>{pricingDetailsTwo.noFees}</p>
                        <button
                            className={`${styles.btn} cta-btn`}
                            id="plan-995-cta"
                            onClick={() => {
                                builder.track('ctaButtonClick');
                                selectProduct(prTwo)
                            }}
                        >
                            {pricingDetailsTwo.btnText}
                        </button>
                        <ul className={styles.features}>
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListTwo[0].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListTwo[1].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListTwo[2].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListTwo[3].item
                                }}
                            />
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: featureListTwo[4].item
                                }}
                            />
                            <li
                                onClick={() => setOpen(!open)}
                                dangerouslySetInnerHTML={{
                                    __html: open
                                        ? featureListTwo[5].item
                                        : featureListTwo[5].item.replace('Show Less', 'Show More')
                                }}
                            />
                            {open && (
                                <>
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: featureListTwo[6].item
                                        }}
                                    />
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: featureListTwo[7].item
                                        }}
                                    />
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: featureListTwo[8].item
                                        }}
                                    />
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatPrice = (price?: number): string => {
    if (!price || price < 2) {
        // throwing an error to break a build if there is product configuration error
        //throw new Error('Failed to get proper product configuration');
        return '??.??';
    }
    const dollars = Math.floor(price / 100);
    const cents = price % 100;
    return `${dollars}.${cents.toString().padStart(2, '0')}`;
};
