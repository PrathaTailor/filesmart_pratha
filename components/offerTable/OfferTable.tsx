import { builder } from '@builder.io/react';
import styles from './offerTable.module.scss';
import logo from '../../images/assets/file-smart-tax-logo.svg';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';
import { useRouter } from 'next/router';

interface OfferDetail {
    title: string;
    smallTitle: string;
    subTitle: string;
    note: string;
    buttonSymbol: ImageObj;
    buttonText: string;
    buttonSmallText: string;
    freePackageTitle: string;
    premiumPackageTitle: string;
    premiumPackageSubTitle: string;
}

interface Label {
    title: string;
}

interface Package {
    priceText: string;
    price: string;
    term: boolean;
    text: string;
    icon: ImageObj;
}

export const OfferTable = (props: {
    offerDetails: OfferDetail;
    labels: Label[];
    premiumPackage: Package[];
    freePackage: Package[];
}) => {
    const { offerDetails, labels = [], premiumPackage = [], freePackage = [] } = props;
    const router = useRouter();

    return (
        <section className={styles.offerTable}>
            <div className={styles.container}>
                <div className={styles.tableDesc}>
                    <h2
                        className={styles.title}
                        dangerouslySetInnerHTML={{
                            __html:
                                window.innerWidth > 600
                                    ? offerDetails.title || 'Become a FileSmart Member'
                                    : offerDetails.smallTitle
                        }}
                    />
                    <p>
                        {offerDetails.subTitle ||
                            "We're America's first robust, yet cost-effective tax solution. Here's why:"}
                    </p>
                </div>
                <div className={styles.offerTableWrap}>
                    <ul className={styles.offerTitleTable}>
                        {labels.map((data: Label, index: number) => {
                            // eslint-disable-next-line react/jsx-key
                            return (
                                <li key={index} className={styles.item}>
                                    {data.title}
                                </li>
                            );
                        })}
                    </ul>
                    <ul className={styles.offerFreeTable}>
                        <li className={styles.item}>
                            <ImgLoader
                                className={styles.logo}
                                src={logo.src}
                                alt="logo"
                                width={logo.width}
                                height={logo.height}
                            />
                            <span className={styles.text}>{offerDetails.freePackageTitle}</span>
                        </li>
                        {freePackage.map((data: Package, index: number) => {
                            return (
                                <li key={index} className={styles.item}>
                                    <p className={styles.resLabel}>{labels[index].title}</p>
                                    {data.icon.src ? (
                                        <ImgLoader
                                            className={styles.itemIcon}
                                            src={data.icon.src}
                                            width={data.icon.width}
                                            height={data.icon.height}
                                            alt="Icon Dollar"
                                        />
                                    ) : data.priceText ? (
                                        <div className={styles.discountWrap}>
                                            <span className={styles.discText}>{data.priceText}</span>
                                            <p className={styles.discount}>
                                                {data.price}
                                                {data.term === true && '/mo'}
                                            </p>
                                        </div>
                                    ) : (
                                        <span className={styles.title}>
                                            {data.price} {data.term === true && '/mo'}
                                        </span>
                                    )}
                                    <span className={styles.text}>{data.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className={styles.offerPremiumTable}>
                        <li className={styles.item}>
                            <span className={styles.title}>{offerDetails.premiumPackageTitle}</span>
                            <span className={styles.text}>{offerDetails.premiumPackageSubTitle}</span>
                        </li>
                        {premiumPackage.map((data: Package, index: number) => {
                            return (
                                <li key={index} className={styles.item}>
                                    <p className={styles.resLabel}>{labels[index].title}</p>
                                    {data.icon.src ? (
                                        <ImgLoader
                                            className={styles.itemIcon}
                                            src={data.icon.src}
                                            width={data.icon.width}
                                            height={data.icon.height}
                                            alt="Icon Dollar"
                                        />
                                    ) : data.priceText ? (
                                        <div className={styles.discountWrap}>
                                            <span className={styles.discText}>{data.priceText}</span>
                                            <p className={styles.discount}>
                                                {data.price}
                                                {data.term === true && '/mo'}
                                            </p>
                                        </div>
                                    ) : (
                                        <span className={styles.title}>
                                            {data.price}
                                            {data.term === true && '/mo'}
                                        </span>
                                    )}
                                    <span className={styles.text}>{data.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {window.innerWidth < 600 && (
                    <p className={styles.note}>
                        {offerDetails.note ||
                            '* Comparison pricing and features of other online tax products were obtained directly from the TurboTax website on March 29th, 2022. Filing with all forms, including self-employed. Cost of filing state with complex federal return'}
                    </p>
                )}
                {window.innerWidth > 600 && (
                    <div className={styles.btnWrapper}>
                        <button className={`${styles.btn} cta-btn`} id="offer-table-cta"
                            onClick={() => {
                                builder.track('ctaButtonClick');
                                router.push('/submit-return')
                            }}>
                            <p>
                                <span className={styles.lg}>{offerDetails.buttonText}</span>
                                <span
                                    className={styles.sm}
                                    dangerouslySetInnerHTML={{
                                        __html: offerDetails.buttonSmallText
                                    }}
                                />
                            </p>
                            <ImgLoader
                                className={styles.iconArrow}
                                width={13}
                                height={13}
                                src={offerDetails.buttonSymbol.src}
                                alt="Icon Arrow"
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
