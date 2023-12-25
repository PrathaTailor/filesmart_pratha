import { builder } from '@builder.io/react';
import styles from './financialEmpowerment.module.scss';
import iconBBB from '../../../images/icons/icon-empowerment-bbb.png';
import icon1m from '../../../images/icons/icon-empowerment-1m.png';
import iconIRS from '../../../images/icons/icon-empowerment-irs.png';
import iconSecure from '../../../images/icons/icon-empowerment-secure.png';
import ImgLoader from '@components/ImgLoader';
import { useRouter } from 'next/router';
import ImageObj from '@utils/interfaces';

interface FinancialDetails {
    financialTitle: string;
    desc: string;
    content: string;
    getStartedDesc: string;
    getStartedDescTwo: string;
    btnText: string;
    btnLink: string;
    comment: string;
}
interface FinancialList {
    icon: ImageObj;
    title: string;
}

export const FinancialEmpowerment = (props: { financialDetails: FinancialDetails; financialList: FinancialList[] }) => {
    const { financialDetails, financialList } = props;
    const router = useRouter();
    return (
        <div className={styles.fluid}>
            <div className={styles.container}>
                <h2 className={styles.financialTitle}>{financialDetails?.financialTitle}</h2>
                <p
                    dangerouslySetInnerHTML={{
                        __html: financialDetails?.desc
                    }}
                />
                <p
                    dangerouslySetInnerHTML={{
                        __html: financialDetails?.content
                    }}
                />
                <div className={styles.financialWrapper}>
                    {financialList.map((item: FinancialList, index: number) => {
                        return (
                            <div key={index} className={styles.box}>
                                <ImgLoader src={item?.icon.src} alt="Icon" width={171} height={171} />
                                <p className={styles.boxDesc}>{item?.title}</p>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.getStarted}>
                    <p className={`${styles.getStartedDesc} ${styles.lg}`}>{financialDetails?.getStartedDesc}</p>
                    <p className={`${styles.getStartedDesc} ${styles.sm}`}>{financialDetails?.getStartedDescTwo}</p>
                    <a href="#plans">
                        <button id="financial-cta" className={`${styles.btn} cta-btn`}
                            onClick={() => {
                                builder.track('ctaButtonClick');
                            }}
                        >
                            {financialDetails?.btnText}
                        </button>
                    </a>
                    <div className={styles.fileTax}>{financialDetails?.comment}</div>
                </div>
            </div>
        </div>
    );
};
