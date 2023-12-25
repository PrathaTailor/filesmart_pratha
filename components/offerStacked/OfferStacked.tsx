import styles from './offerStacked.module.scss';
import CountdownTimer from '../offerPage/counter/CountdownTimer';
import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';
import { useState } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { useRouter } from 'next/router';

interface TabDetails {
    titleOne: string;
    subtitleOne: string;
    titleTwo: string;
    subtitleTwo: string;
}
interface Detail {
    counterText: string;
    counterTextTwo: string;
    expiredText: string;
    counterDays: number;
    counterDaysTwo: number;
    counterIcon: ImageObj;
    expiredIcon: ImageObj;
}
interface TitleDetails {
    title: string;
    subTitle: string;
    titleNoTab: string;
    subTitleNoTab: string;
}
interface CardTitle {
    limitedHeading: string;
    inclusiveHeading: string;
    limitedNoHeading: string;
    inclusiveNoHeading: string;
    limitedTitle: string;
    inclusiveTitle: string;
    limitedNoTitle: string;
    inclusiveNoTitle: string;
}
interface CardPriceDetails {
    limitedPlanPrice: string;
    limitedPlanDecimal: string;
    limitedPlanTerm: boolean;
    limitedComment: string;
    limitedNoPlanPrice: string;
    limitedNoPlanDecimal: string;
    limitedNoPlanTerm: boolean;
    limitedNoComment: string;
    inclusivePlanPrice: string;
    inclusivePlanDecimal: string;
    inclusivePlanTerm: boolean;
    inclusiveComment: string;
    inclusiveNoPlanPrice: string;
    inclusiveNoPlanDecimal: string;
    inclusiveNoPlanTerm: boolean;
    inclusiveNoComment: string;
}
interface BadgeDetails {
    image: ImageObj;
    imageNoWarn: ImageObj;
    badgeLimitedTitle: string;
    badgeLimitedSubtitle: string;
    badgeNoTabTitle: string;
    badgeInclusiveTitle: string;
    badgeInclusiveSubtitle: string;
    badgeNoTabSubtitle: string;
    btnLimited: string;
    linkLimited: string;
    btnInclusive: string;
    linkInclusive: string;
}
interface LimitedplanListDetails {
    title: string;
}
interface InclusiveplanListDetails {
    title: string;
}
interface NoTabDescription {
    description: string;
}
interface Title {
    title: string;
    subTitle: string;
}

interface OfferPriceDetails {
    listLabel: string;
    listPrice: number;
    listDesc: string;
}
interface FreeOfferBox {
    sign: string;
    price: number;
    priceDesc: string;
    tagline: string;
}

interface offerHeadingDetails {
    title: string;
    lessthenThreeDayForYesTitle: string;
    pastDeadlineForYesTitle: string;
    lessthenThreeDayForNoTitle: string;
    pastDeadlineForNoTitle: string;
    lessthenThreeDayForYesSubTitle: string;
    pastDeadlineForYesSubTitle: string;
    lessthenThreeDayForNoSubTitle: string;
    pastDeadlineForNoSubTitle: string;
    subTitle: string;
    smallSubTitle: string;
}

const OfferStack = (props: {
    tabDetails: TabDetails;
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
    const router = useRouter();
    const [tabVal, setTabVal] = useState(true);
    const THREE_DAYS_IN_MS = details?.counterDays;
    const THREE_DAYS_IN_MS_TWO = details?.counterDaysTwo;
    const NOW_IN_MS = new Date();

    const [days, hours, minutes] = useCountdown(THREE_DAYS_IN_MS);
    const [daysTwo, hoursTwo, minutesTwo] = useCountdown(THREE_DAYS_IN_MS_TWO);
    const totalPrice =
        tabVal === false
            ? offerPriceDetails.slice(0, 2).reduce((prev, acc) => prev + acc.listPrice, 0)
            : offerPriceDetails.reduce((prev, acc) => prev + acc.listPrice, 0);

    return (
        <>
            <div className={styles.container}>
                <p
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: offerHeadingDetails?.title
                    }}
                ></p>
                <p
                    className={styles.desc}
                    dangerouslySetInnerHTML={{
                        __html:
                            window.innerWidth > 480 ? offerHeadingDetails?.subTitle : offerHeadingDetails?.smallSubTitle
                    }}
                ></p>
            </div>
            <div className={styles.stackedWrapper}>
                <div className={styles.mainWrapper}>
                    <div className={styles.fluidContainer}>
                        <div className={styles.tabWrapper}>
                            <div className={`${styles.tab} ${styles.tab_1}`}>
                                <span className={styles.tabTitle}>{tabDetails?.titleOne}</span>
                                <span className={styles.desc}>{tabDetails?.subtitleOne}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counterWrapper}>
                        <p className={days + hours + minutes <= 0 ? styles.expiredText : styles?.counterText}>
                            {days + hours + minutes <= 0 ? (
                                <>
                                    <ImgLoader
                                        src={details?.expiredIcon?.src}
                                        alt="Icon Expired"
                                        height={15}
                                        width={15}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: details?.expiredText
                                        }}
                                    ></p>
                                </>
                            ) : (
                                <>
                                    <ImgLoader
                                        src={details?.counterIcon?.src}
                                        alt="Icon Check"
                                        height={15}
                                        width={15}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: details?.counterText
                                        }}
                                    ></p>
                                </>
                            )}
                        </p>
                        <CountdownTimer targetDate={THREE_DAYS_IN_MS} />
                    </div>

                    <div className={styles.container}>
                        {days + hours + minutes > 0 ? (
                            <>
                                <div className={styles.titleWrapper}>
                                    <h3 className={styles.title}>{titleDetails?.title}</h3>
                                    <p
                                        className={styles.subtitle}
                                        dangerouslySetInnerHTML={{
                                            __html: titleDetails?.subTitle
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        <div className={styles.cardWrapper}>
                            <div className={styles.cardBox}>
                                <div className={styles.cardHeading}>{cardTitle?.limitedHeading}</div>
                                <p
                                    className={styles.cardTitle}
                                    dangerouslySetInnerHTML={{
                                        __html: cardTitle?.limitedTitle
                                    }}
                                />
                                <div className={styles.cardPriceDetails}>
                                    <p className={styles.cardPrice}>
                                        <span className={styles.priceUnit}>$</span>
                                        <span className={styles.priceInteger}>{planPrice?.limitedPlanPrice}</span>
                                        <span className={styles.priceDecimal}>{planPrice?.limitedPlanDecimal}</span>
                                        <span className={styles.planTerm}>
                                            {planPrice?.limitedPlanTerm === true && '/mo'}
                                        </span>
                                    </p>
                                    <p
                                        className={styles.priceComment}
                                        dangerouslySetInnerHTML={{
                                            __html: planPrice?.limitedComment
                                        }}
                                    />
                                </div>
                                <div className={styles.badgeWrapper}>
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
                                </div>
                                <div className={styles.listWrapper}>
                                    <ul className={styles.parentList}>
                                        {limitedplanListDetails &&
                                            limitedplanListDetails.map((item, index: number) => {
                                                return <li key={index}>{item.title}</li>;
                                            })}
                                    </ul>
                                </div>
                                <button
                                    className={styles.buttonGetStarted}
                                    id="offer-stacked-cta"
                                    onClick={() => router.push(badgeDetails.linkInclusive)}
                                >
                                    <span className={styles.buttonText}>{badgeDetails.btnLimited}</span>
                                </button>
                            </div>
                            <div className={styles.cardBox}>
                                <div className={styles.cardHeading}>{cardTitle?.inclusiveHeading}</div>
                                <p
                                    className={styles.cardTitle}
                                    dangerouslySetInnerHTML={{
                                        __html: cardTitle?.inclusiveTitle
                                    }}
                                />
                                <div className={styles.cardPriceDetails}>
                                    <p className={styles.cardPrice}>
                                        <span className={styles.priceUnit}>$</span>
                                        <span className={styles.priceInteger}>{planPrice?.inclusivePlanPrice}</span>
                                        <span className={styles.priceDecimal}>{planPrice?.inclusivePlanDecimal}</span>
                                        <span className={styles.planTerm}>
                                            {planPrice?.inclusivePlanTerm === true && '/mo'}
                                        </span>
                                    </p>
                                    <p
                                        className={styles.priceComment}
                                        dangerouslySetInnerHTML={{
                                            __html: planPrice?.inclusiveComment
                                        }}
                                    />
                                </div>
                                <div className={styles.badgeWrapper}>
                                    <div className={styles.badgeTitle}>
                                        <ImgLoader
                                            src={badgeDetails?.image?.src}
                                            width={12}
                                            height={12}
                                            alt="Logo Icon"
                                        />
                                        <span className={styles.badgeIconTitle}>
                                            {badgeDetails?.badgeInclusiveTitle}
                                        </span>
                                    </div>
                                    <p
                                        className={styles.bagdeComment}
                                        dangerouslySetInnerHTML={{
                                            __html: badgeDetails?.badgeInclusiveSubtitle
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
                                    className={styles.buttonGetStarted}
                                    id="offer-stacked2-cta"
                                    onClick={() => router.push(badgeDetails.linkInclusive)}
                                >
                                    <span className={styles.buttonText}>{badgeDetails.btnInclusive}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mainWrapper}>
                    <div className={styles.fluidContainer}>
                        <div className={styles.tabWrapper}>
                            <div className={`${styles.tab} ${styles.tab_1}`}>
                                <span className={styles.tabTitle}>{tabDetails?.titleTwo}</span>
                                <span className={styles.desc}>{tabDetails?.subtitleTwo}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.counterWrapper}>
                        <p className={daysTwo + hoursTwo + minutesTwo <= 0 ? styles.expiredText : styles?.counterText}>
                            {daysTwo + hoursTwo + minutesTwo <= 0 ? (
                                <>
                                    <ImgLoader
                                        src={details?.expiredIcon?.src}
                                        alt="Icon Expired"
                                        height={15}
                                        width={15}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: details?.expiredText
                                        }}
                                    ></p>
                                </>
                            ) : (
                                <>
                                    <ImgLoader
                                        src={details?.counterIcon?.src}
                                        alt="Icon Check"
                                        height={15}
                                        width={15}
                                    />
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: details?.counterTextTwo
                                        }}
                                    ></p>
                                </>
                            )}
                        </p>
                        <CountdownTimer targetDate={THREE_DAYS_IN_MS_TWO} />
                    </div>

                    <div className={styles.container}>
                        {daysTwo + hoursTwo + minutesTwo > 0 ? (
                            <>
                                <div className={styles.titleWrapper}>
                                    <h3 className={styles.title}>{titleDetails?.titleNoTab}</h3>
                                    <p
                                        className={styles.subtitle}
                                        dangerouslySetInnerHTML={{
                                            __html: titleDetails?.subTitleNoTab
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <></>
                        )}
                        <div className={styles.cardWrapper}>
                            <div className={styles.cardBox}>
                                <div className={styles.cardHeading}>{cardTitle?.limitedNoHeading}</div>
                                <p
                                    className={styles.cardTitle}
                                    dangerouslySetInnerHTML={{
                                        __html: cardTitle?.limitedNoTitle
                                    }}
                                />
                                <div className={styles.cardPriceDetails}>
                                    <p className={styles.cardPrice}>
                                        <span className={styles.priceUnit}>$</span>
                                        <span className={styles.priceInteger}>{planPrice?.limitedNoPlanPrice}</span>
                                        <span className={styles.priceDecimal}>{planPrice?.limitedNoPlanDecimal}</span>
                                        <span className={styles.planTerm}>
                                            {planPrice?.limitedNoPlanTerm === true && '/mo'}
                                        </span>
                                    </p>
                                    <p
                                        className={styles.priceComment}
                                        dangerouslySetInnerHTML={{
                                            __html: planPrice?.limitedNoComment
                                        }}
                                    />
                                </div>
                                <div className={styles.badgeWrapper}>
                                    <div className={styles.badgeTitle}>
                                        <ImgLoader
                                            src={badgeDetails?.imageNoWarn?.src}
                                            width={13}
                                            height={13}
                                            alt="Logo Icon"
                                        />
                                        <span className={styles.badgeIconTitle}> {badgeDetails?.badgeNoTabTitle}</span>
                                    </div>
                                    {/* <p className={styles.bagdeComment} dangerouslySetInnerHTML={{
                      __html: badgeDetails?.badgeLimitedSubtitle
                    }} /> */}
                                </div>
                                <div className={styles.listWrapper}>
                                    <ul className={styles.parentList}>
                                        {limitedplanListDetails &&
                                            limitedplanListDetails.slice(1, 4).map((item, index: number) => {
                                                return <li key={index}>{item.title}</li>;
                                            })}
                                    </ul>
                                </div>
                                <p
                                    className={styles.noTabDescription}
                                    dangerouslySetInnerHTML={{
                                        __html: noTabDescription?.description
                                    }}
                                />
                                <button
                                    id="offer-stacked3-cta"
                                    className={styles.buttonGetStarted}
                                    onClick={() => router.push(badgeDetails.linkLimited)}
                                >
                                    <span className={styles.buttonText}>{badgeDetails.btnLimited}</span>
                                </button>
                            </div>
                            <div className={styles.cardBox}>
                                <div className={styles.cardHeading}>{cardTitle?.inclusiveNoHeading}</div>
                                <p
                                    className={styles.cardTitle}
                                    dangerouslySetInnerHTML={{
                                        __html: cardTitle?.inclusiveNoTitle
                                    }}
                                />
                                <div className={styles.cardPriceDetails}>
                                    <p className={styles.cardPrice}>
                                        <span className={styles.priceUnit}>$</span>
                                        <span className={styles.priceInteger}>{planPrice?.inclusiveNoPlanPrice}</span>
                                        <span className={styles.priceDecimal}>{planPrice?.inclusiveNoPlanDecimal}</span>
                                        <span className={styles.planTerm}>
                                            {planPrice?.inclusiveNoPlanTerm === true && '/mo'}
                                        </span>
                                    </p>
                                    <p
                                        className={styles.priceComment}
                                        dangerouslySetInnerHTML={{
                                            __html: planPrice?.inclusiveNoComment
                                        }}
                                    />
                                </div>
                                <div className={styles.badgeWrapper}>
                                    <div className={styles.badgeTitle}>
                                        <ImgLoader
                                            src={badgeDetails?.image?.src}
                                            width={12}
                                            height={12}
                                            alt="Logo Icon"
                                        />
                                        <span className={styles.badgeIconTitle}>
                                            {badgeDetails?.badgeInclusiveTitle}
                                        </span>
                                    </div>
                                    <p
                                        className={styles.bagdeComment}
                                        dangerouslySetInnerHTML={{
                                            __html: badgeDetails?.badgeNoTabSubtitle
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
                                    id="offer-stacked4-cta"
                                    className={styles.buttonGetStarted}
                                    onClick={() => router.push(badgeDetails.linkInclusive)}
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
                    {/* <h3 className={styles.title}>This is How Much Taxpayers Spend with the <span>”Free Guys”</span></h3> */}
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
                        <li
                            className={
                                tabVal === false ? `${styles.tableNoItem} ${styles.tableItem}` : styles.tableItem
                            }
                        >
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
                        className={styles.returnText}
                        dangerouslySetInnerHTML={{
                            __html: freeOfferBox?.tagline
                        }}
                    ></p>
                </div>
            </div>
        </>
    );
};

export default OfferStack;
