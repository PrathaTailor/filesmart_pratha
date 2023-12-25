import styles from './offer.module.scss';
import CountdownTimer from '../counter/CountdownTimer';
import ImgLoader from '@components/ImgLoader';
import { useContext, useState } from 'react';
import { OfferHeading } from '../offerHeading/OfferHeading';
import { useCountdown } from '../../../hooks/useCountdown';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { catalogApi } from '@atomicleads/tax-client';
import axios from 'axios';

import {
    BadgeDetails,
    CardPriceDetails,
    CardTitle,
    Detail,
    FreeOfferBox,
    InclusiveplanListDetails,
    LimitedplanListDetails,
    NoTabDescription,
    offerHeadingDetails,
    OfferPriceDetails,
    ProductConfig,
    TabDetails,
    Title,
    TitleDetails
} from './offer.builder';
import { ProductContext } from 'pages/[[...page]]';
import { getEngineRedirectURL } from '@atomicleads/ext-satellite-form';
import { addSearchParamToUrl } from '@utils/urlHelpers';

const Offer = (props: {
    tabDetails: TabDetails;
    productConfig: ProductConfig;
    details: Detail;
    titleDetails: TitleDetails;
    cardTitle: CardTitle;
    planPrice: CardPriceDetails;
    badgeDetails: BadgeDetails;
    limitedplanListDetails: LimitedplanListDetails[];
    inclusiveplanListDetails: InclusiveplanListDetails[];
    noTabDescription: NoTabDescription;
    offerPriceDetails: OfferPriceDetails[];
    offerBoxTitle: Title;
    freeOfferBox: FreeOfferBox;
    offerHeadingDetails: offerHeadingDetails;
}) => {
    const {
        tabDetails,
        productConfig,
        details,
        titleDetails,
        cardTitle,
        planPrice,
        badgeDetails,
        limitedplanListDetails = [],
        inclusiveplanListDetails = [],
        noTabDescription,
        offerPriceDetails = [],
        offerBoxTitle,
        freeOfferBox,
        offerHeadingDetails
    } = props;
    // let { products } = props;
    const [tabVal, setTabVal] = useState(true);
    const router = useRouter();
    const THREE_DAYS_IN_MS = details?.counterDays;
    const THREE_DAYS_IN_MS_NO = details?.counterNoDays;
    const [days, hours, minutes] = useCountdown(tabVal === true ? THREE_DAYS_IN_MS : THREE_DAYS_IN_MS_NO);
    const totalPrice =
        tabVal === false
            ? offerPriceDetails.slice(0, 2).reduce((prev, acc) => prev + acc.listPrice, 0)
            : offerPriceDetails.reduce((prev, acc) => prev + acc.listPrice, 0);
    const handleClick = () => {
        setTabVal(!tabVal);
    };
    const products = useContext(ProductContext);

    if (!products || products.length === 0) {
        return <>Product Not Loaded</>;
    }

    const defaultProduct = { basePrice: 1111 };

    const extMontlyProd =
        products.filter((prod) => prod.sku === productConfig.extPayMonthlyProduct)[0] ?? defaultProduct;
    const ext6MotnhProd = products.filter((prod) => prod.sku === productConfig.ext6MothsProduct)[0] ?? defaultProduct;
    const noExtRerturnProd =
        products.filter((prod) => prod.sku === productConfig.noExtReturnOnlyProduct)[0] ?? defaultProduct;
    const noExtMontlyProd =
        products.filter((prod) => prod.sku === productConfig.noExtPayMonthlyProduct)[0] ?? defaultProduct;

    /*let limitedPlanFixed = structuredClone(limitedplanListDetails) as typeof limitedplanListDetails;
    limitedPlanFixed = limitedPlanFixed.filter((x) => {
        return x.title !== 'Tax Extension';
    });
    */

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

        const cookies = parseCookies();
        const productFocus = cookies['product-focus'] ?? 'return';
        const provider = cookies['provider'] ?? 'email';
        const action = cookies['action'] ?? 'register';

        const redirectToRegistration = async () => {
            if (productFocus == 'extension') {
                await router.push({
                    pathname: '/submit-extension',
                    query: {
                        product: product.sku
                    }
                });
                return;
            }

            await router.push({
                pathname: '/submit-return',
                query: {
                    product: product.sku
                }
            });
            return;
        };

        if (!('authenticated' in cookies)) {
            // console.log('user not authenticated, redirecting to registration');
            return await redirectToRegistration();
        }

        const transferResponse = await axios.post('/api/transfer');
        if (transferResponse.status === 200 && transferResponse.data.token) {
            const engine: string = process.env.NEXT_PUBLIC_ENGINE_URL as string;
            let redirectUrl = getEngineRedirectURL({
                token: transferResponse.data.token,
                action,
                provider,
                engine,
                cookies,
                skipDataLayer: true
            });
            const engineUrl = addSearchParamToUrl(
                redirectUrl,
                'redirect-to', // Param name
                `/checkout/return?pr=${product.sku}&redirect-to=${window.location.origin}` // redirect url
            );
            await router.replace(engineUrl);
            return;
        }

        redirectToRegistration();
    };
    return (
        <>
            <OfferHeading
                offerHeadingDetails={offerHeadingDetails}
                datetime={tabVal === true ? THREE_DAYS_IN_MS : THREE_DAYS_IN_MS_NO}
                tabVal={tabVal}
            />
            <div className={styles.fluidContainer}>
                <div className={styles.tabWrapper}>
                    <div
                        className={
                            tabVal === true
                                ? `${styles.tab}  ${styles.active} ${styles.tab_1}`
                                : `${styles.tab} ${styles.tab_1}`
                        }
                        onClick={handleClick}
                    >
                        <span className={styles.tabTitle}>{tabDetails?.titleOne}</span>
                        <span className={styles.desc}>{tabDetails?.subtitleOne}</span>
                    </div>
                    <div
                        className={
                            tabVal === false
                                ? `${styles.tab} ${styles.active}  ${styles.tab_2}`
                                : `${styles.tab} ${styles.tab_2}`
                        }
                        onClick={handleClick}
                    >
                        <span className={styles.tabTitle}>{tabDetails?.titleTwo}</span>
                        <span className={styles.desc}>{tabDetails?.subtitleTwo}</span>
                    </div>
                </div>
            </div>
            <div className={styles.mainWrapper}>
                <div className={styles.counterWrapper}>
                    <p className={days + hours + minutes <= 0 ? styles.expiredText : styles?.counterText}>
                        {days + hours + minutes <= 0 ? (
                            <>
                                <ImgLoader src={details?.expiredIcon?.src} alt="Icon Expired" height={15} width={15} />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: details?.expiredText
                                    }}
                                ></p>
                            </>
                        ) : (
                            <>
                                <ImgLoader src={details?.counterIcon?.src} alt="Icon Check" height={15} width={15} />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: tabVal === true ? details?.counterText : details.counterNoText
                                    }}
                                ></p>
                            </>
                        )}
                    </p>
                    <CountdownTimer targetDate={tabVal === true ? THREE_DAYS_IN_MS : THREE_DAYS_IN_MS_NO} />
                </div>

                <div className={styles.container}>
                    {days + hours + minutes > 0 ? (
                        <>
                            <div className={styles.titleWrapper}>
                                <h3 className={styles.title}>
                                    {tabVal === false ? titleDetails?.titleNoTab : titleDetails?.title}
                                </h3>
                                <p
                                    className={styles.subtitle}
                                    dangerouslySetInnerHTML={{
                                        __html: tabVal === false ? titleDetails?.subTitleNoTab : titleDetails?.subTitle
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    <div className={styles.cardWrapper}>
                        <div className={styles.cardBox}>
                            <div className={styles.cardHeading}>
                                {tabVal === false ? cardTitle?.limitedNoHeading : cardTitle?.limitedHeading}
                            </div>
                            <p
                                className={styles.cardTitle}
                                dangerouslySetInnerHTML={{
                                    __html: tabVal === false ? cardTitle?.limitedNoTitle : cardTitle?.limitedTitle
                                }}
                            />
                            <div className={styles.cardPriceDetails}>
                                <p className={styles.cardPrice}>
                                    <span className={styles.priceUnit}>$</span>
                                    <span className={styles.priceInteger}>
                                        {tabVal === false
                                            ? justIntPart(noExtRerturnProd?.basePrice)
                                            : justIntPart(extMontlyProd?.basePrice)}
                                    </span>
                                    <span className={styles.priceDecimal}>
                                        {tabVal === false
                                            ? justDecimals(noExtRerturnProd?.basePrice)
                                            : justDecimals(extMontlyProd?.basePrice)}
                                    </span>
                                    <span className={styles.planTerm}>
                                        {tabVal === false
                                            ? planPrice?.limitedNoPlanTerm === true && '/mo'
                                            : planPrice?.limitedPlanTerm === true && '/mo'}
                                    </span>
                                </p>
                                <p
                                    className={styles.priceComment}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            tabVal === false ? planPrice?.limitedNoComment : planPrice?.limitedComment
                                    }}
                                />
                            </div>
                            <div className={styles.badgeWrapper}>
                                {tabVal === false ? (
                                    <>
                                        <div className={styles.badgeTitle}>
                                            <ImgLoader
                                                src={badgeDetails?.imageNoWarn?.src}
                                                width={13}
                                                height={13}
                                                alt="Logo Icon"
                                            />
                                            <span className={styles.badgeIconTitle}>
                                                {' '}
                                                {badgeDetails?.badgeNoTabTitle}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.badgeTitle}>
                                            <ImgLoader
                                                src={badgeDetails?.image?.src}
                                                width={12}
                                                height={12}
                                                alt="Logo Icon"
                                            />
                                            <span className={styles.badgeIconTitle}>
                                                {' '}
                                                {badgeDetails?.badgeLimitedTitle}
                                            </span>
                                        </div>
                                        <p
                                            className={styles.bagdeComment}
                                            dangerouslySetInnerHTML={{
                                                __html: badgeDetails?.badgeLimitedSubtitle
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                            <div className={styles.listWrapper}>
                                <ul className={styles.parentList}>
                                    {tabVal === false
                                        ? limitedplanListDetails &&
                                          limitedplanListDetails.slice(1, 4).map((item, index: number) => {
                                              return <li key={index}>{item.title}</li>;
                                          })
                                        : limitedplanListDetails &&
                                          limitedplanListDetails.map((item, index: number) => {
                                              return <li key={index}>{item.title}</li>;
                                          })}
                                </ul>
                            </div>
                            {tabVal === false && (
                                <p
                                    className={styles.noTabDescription}
                                    dangerouslySetInnerHTML={{
                                        __html: noTabDescription?.description
                                    }}
                                />
                            )}
                            <button
                                id="offer-cta"
                                className={styles.buttonGetStarted}
                                onClick={() => selectProduct(tabVal ? extMontlyProd : noExtRerturnProd)}
                            >
                                <span className={styles.buttonText}>{badgeDetails.btnLimited}</span>
                            </button>
                        </div>
                        <div className={styles.cardBox}>
                            <div className={styles.cardHeading}>
                                {tabVal === false ? cardTitle?.inclusiveNoHeading : cardTitle?.inclusiveHeading}
                            </div>
                            <p
                                className={styles.cardTitle}
                                dangerouslySetInnerHTML={{
                                    __html: tabVal === false ? cardTitle?.inclusiveNoTitle : cardTitle?.inclusiveTitle
                                }}
                            />
                            <div className={styles.cardPriceDetails}>
                                <p className={styles.cardPrice}>
                                    <span className={styles.priceUnit}>$</span>
                                    <span className={styles.priceInteger}>
                                        {tabVal === false
                                            ? justIntPart(noExtMontlyProd.basePrice)
                                            : justIntPart(ext6MotnhProd.basePrice)}
                                    </span>
                                    <span className={styles.priceDecimal}>
                                        {tabVal === false
                                            ? justDecimals(noExtMontlyProd.basePrice)
                                            : justDecimals(ext6MotnhProd.basePrice)}
                                    </span>
                                    <span className={styles.planTerm}>
                                        {tabVal === false
                                            ? planPrice?.inclusiveNoPlanTerm === true && '/mo'
                                            : planPrice?.inclusivePlanTerm === true && '/mo'}
                                    </span>
                                </p>
                                <p
                                    className={styles.priceComment}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            tabVal === false
                                                ? planPrice?.inclusiveNoComment
                                                : planPrice?.inclusiveComment
                                    }}
                                />
                            </div>
                            <div className={styles.badgeWrapper}>
                                <div className={styles.badgeTitle}>
                                    <ImgLoader src={badgeDetails?.image?.src} width={12} height={12} alt="Logo Icon" />
                                    <span className={styles.badgeIconTitle}>{badgeDetails?.badgeInclusiveTitle}</span>
                                </div>
                                <p
                                    className={styles.bagdeComment}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            tabVal === false
                                                ? badgeDetails?.badgeNoTabSubtitle
                                                : badgeDetails?.badgeInclusiveSubtitle
                                    }}
                                />
                            </div>
                            <div className={styles.listWrapper}>
                                <ul className={styles.parentList}>
                                    {inclusiveplanListDetails &&
                                        inclusiveplanListDetails.map((item, index: number) => {
                                            return <li key={index}>{item.title}</li>;
                                        })}
                                </ul>
                            </div>
                            <button
                                id="offer-cta"
                                className={styles.buttonGetStarted}
                                onClick={() => selectProduct(tabVal ? ext6MotnhProd : noExtMontlyProd)}
                            >
                                <span className={styles.buttonText}>{badgeDetails.btnInclusive}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.offerBoxContainer}>
                <div className={styles.boxLabel}>
                    <span className={styles.boxLabelText}>{offerBoxTitle?.title}</span>
                </div>
                <p
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: offerBoxTitle?.subTitle
                    }}
                />
                <ul className={tabVal === false ? `${styles.offerBoxTable} ${styles.tabNo}` : styles.offerBoxTable}>
                    {tabVal === false
                        ? offerPriceDetails &&
                          offerPriceDetails?.slice(0, 2).map((data: OfferPriceDetails, index: number) => {
                              return (
                                  <li
                                      key={index}
                                      className={
                                          tabVal === false
                                              ? `${styles.tableNoItem} ${styles.tableItem}`
                                              : styles.tableItem
                                      }
                                  >
                                      <label className={styles.listLabel}>{data?.listLabel}</label>
                                      <span className={styles.listPrice}>${data?.listPrice}</span>
                                      <p className={styles.listDesc}>{data?.listDesc}</p>
                                  </li>
                              );
                          })
                        : offerPriceDetails &&
                          offerPriceDetails?.map((data: OfferPriceDetails, index: number) => {
                              return (
                                  <li key={index} className={styles.tableItem}>
                                      <label className={styles.listLabel}>{data?.listLabel}</label>
                                      <span className={styles.listPrice}>${data?.listPrice}</span>
                                      <p className={styles.listDesc}>{data?.listDesc}</p>
                                  </li>
                              );
                          })}
                    <li className={tabVal === false ? `${styles.tableNoItem} ${styles.tableItem}` : styles.tableItem}>
                        <p
                            className={
                                tabVal === false ? `${styles.itemWrapper}` : `${styles.itemWrapper} ${styles.free}`
                            }
                        >
                            <span className={styles.badge}>
                                <span className={styles.sign}>{freeOfferBox?.sign}</span>
                                <span className={styles.priceWrap}>
                                    <label className={styles.price}>
                                        {totalPrice ? totalPrice : freeOfferBox?.price}
                                    </label>
                                    <label className={styles.priceDesc}>{freeOfferBox?.priceDesc}</label>
                                </span>
                            </span>
                        </p>
                    </li>
                </ul>
                <p
                    className={tabVal === true ? `${styles.returnText}` : `${styles.returnText} ${styles.returnTextNO}`}
                    dangerouslySetInnerHTML={{
                        __html: freeOfferBox?.tagline
                    }}
                ></p>
            </div>
        </>
    );
};

export default Offer;

const justDecimals = (num: number | undefined) => {
    if (num === undefined) {
        throw new Error('Cannot get decimal part of undefined');
    }
    return num % 100;
};

const justIntPart = (num: number | undefined) => {
    if (num === undefined) {
        throw new Error('Cannot get integer part of undefined');
    }
    return Math.floor(num / 100);
};
