import styles from './offerBoxFree.module.scss';
interface Title {
    title: string;
    subTitle: string;
}

interface OfferPriceDetails {
    listLabel: string;
    listPrice: string;
    listDesc: string;
}
interface FreeOfferBox {
    sign: string;
    price: string;
    priceDesc: string;
    tagline: string;
}

export const OfferBoxFree = (props: {
    offerPriceDetails: OfferPriceDetails[];
    offerBoxTitle: Title;
    freeOfferBox: FreeOfferBox;
}) => {
    const { offerPriceDetails = [], offerBoxTitle, freeOfferBox } = props;
    return (
        <>
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
                <ul className={styles.offerBoxTable}>
                    {offerPriceDetails &&
                        offerPriceDetails?.map((data: OfferPriceDetails, index: number) => {
                            return (
                                <li className={styles.tableItem} key={index}>
                                    <label className={styles.listLabel}>{data?.listLabel}</label>
                                    <span className={styles.listPrice}>{data?.listPrice}</span>
                                    <p className={styles.listDesc}>{data?.listDesc}</p>
                                </li>
                            );
                        })}
                    <li className={styles.tableItem}>
                        <p className={`${styles.itemWrapper} ${styles.free}`}>
                            <span className={styles.badge}>
                                <span className={styles.sign}>{freeOfferBox?.sign}</span>
                                <span className={styles.priceWrap}>
                                    <label className={styles.price}>{freeOfferBox?.price}</label>
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
        </>
    );
};
