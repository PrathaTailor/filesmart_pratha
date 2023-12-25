import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';
import styles from './offerPlans.module.scss';

interface TitleDetails {
    title: string;
    subTitle: string;
}

interface CardTitle {
    limitedTitle: string;
    inclusiveTitle: string;
}

interface CardPriceDetails {
    limitedPlanPrice: string;
    limitedPlanDecimal: string;
    limitedPlanTerm: string;
    limitedComment: string;
    inclusivePlanPrice: string;
    inclusivePlanDecimal: string;
    inclusiveComment: string;
}
interface BadgeDetails {
    image: ImageObj;
    badgeLimitedTitle: string;
    badgeLimitedSubtitle: string;
    badgeInclusiveTitle: string;
    badgeInclusiveSubtitle: string;
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

export const OfferPlans = (props: {
    titleDetails: TitleDetails;
    cardTitle: CardTitle;
    planPrice: CardPriceDetails;
    badgeDetails: BadgeDetails;
    limitedplanListDetails: LimitedplanListDetails[];
    inclusiveplanListDetails: InclusiveplanListDetails[];
    noTabDescription: NoTabDescription;
}) => {
    const {
        titleDetails,
        cardTitle,
        planPrice,
        badgeDetails,
        limitedplanListDetails = [],
        inclusiveplanListDetails = [],
        noTabDescription
    } = props;
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>{titleDetails?.title}</h3>
                <p
                    className={styles.subtitle}
                    dangerouslySetInnerHTML={{
                        __html: titleDetails?.subTitle
                    }}
                />
            </div>
            <div className={styles.cardWrapper}>
                <div className={styles.cardBox}>
                    <h3 className={styles.cardTitle}>{cardTitle?.limitedTitle}</h3>
                    <div className={styles.cardPriceDetails}>
                        <p className={styles.cardPrice}>
                            <span className={styles.priceUnit}>$</span>
                            <span className={styles.priceInteger}>{planPrice?.limitedPlanPrice}</span>
                            <span className={styles.priceDecimal}>{planPrice?.limitedPlanDecimal}</span>
                            <span className={styles.planTerm}>{planPrice?.limitedPlanTerm}</span>
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
                            <ImgLoader src={badgeDetails.image.src} width={15.52} height={15.52} alt="Logo Icon" />
                            <span className={styles.badgeIconTitle}> {badgeDetails?.badgeLimitedTitle}</span>
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
                    <p
                        className={styles.noTabDescription}
                        dangerouslySetInnerHTML={{
                            __html: noTabDescription?.description
                        }}
                    />
                    <button id="offer-pans-cta" className={styles.buttonGetStarted}>
                        <span className={styles.buttonText}>Get Started</span>
                    </button>
                </div>
                <div className={styles.cardBox}>
                    <h3 className={styles.cardTitle}>{cardTitle?.inclusiveTitle}</h3>
                    <div className={styles.cardPriceDetails}>
                        <p className={styles.cardPrice}>
                            <span className={styles.priceUnit}>$</span>
                            <span className={styles.priceInteger}>{planPrice?.inclusivePlanPrice}</span>
                            <span className={styles.priceDecimal}>{planPrice?.inclusivePlanDecimal}</span>
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
                            <ImgLoader src={badgeDetails.image.src} width={15.52} height={15.52} alt="Logo Icon" />
                            <span className={styles.badgeIconTitle}>{badgeDetails?.badgeInclusiveTitle}</span>
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
                    <button id="offer-pans-cta" className={styles.buttonGetStarted}>
                        <span className={styles.buttonText}>Get Started</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
