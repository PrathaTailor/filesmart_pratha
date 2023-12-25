import { builder } from '@builder.io/react';
import styles from './customerService.module.scss';
import iconSupport from '../../../images/icons/icon-customer-service-support.png';
import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';
import { useRouter } from 'next/router';

interface ServiceDeatils {
    icon: ImageObj;
    title: string;
    contentOne: string;
    contentTwo: string;
    btnText: string;
    btnLink: string;
}
interface ServiceList {
    listItem: string;
}

export const CustomerService = (props: { serviceDeatils: ServiceDeatils; serviceList: ServiceList[] }) => {
    const { serviceDeatils, serviceList = [] } = props;
    const router = useRouter();
    return (
        <div className={styles.fluid}>
            <div className={styles.container}>
                <div className={styles.taxSupport}>
                    <ImgLoader src={serviceDeatils?.icon?.src} alt="Customer Support" width={160} height={160} />
                </div>
                <div className={styles.taxDescription}>
                    <h4 className={styles.taxTitle}>{serviceDeatils?.title}</h4>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: serviceDeatils?.contentOne
                        }}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: serviceDeatils?.contentTwo
                        }}
                    />
                    <ul className={styles.list}>
                        {serviceList.map((item: ServiceList, index: number) => {
                            return (
                                <li
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                        __html: item?.listItem
                                    }}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <a href="#plans">
                    <button className={`${styles.btn} cta-btn`} id="customer-service-cta"
                        onClick={() => {
                            builder.track('ctaButtonClick');
                        }}
                    >
                        {serviceDeatils?.btnText}
                    </button>
                </a>
            </div>
        </div>
    );
};
