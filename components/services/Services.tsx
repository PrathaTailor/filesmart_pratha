import styles from './services.module.scss';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';

interface Service {
    title: string;
    icon: ImageObj;
    description: string;
    benefits: {
        benefit1: string;
        benefit2: string;
        benefit3: string;
    };
}

export const Services = (props: { serviceList: Service[]; serviceTitle: string; serviceDescription: string }) => {
    const { serviceList = [], serviceTitle, serviceDescription } = props;
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h2
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: serviceTitle
                    }}
                ></h2>
                <p
                    className={styles.subTitle}
                    dangerouslySetInnerHTML={{
                        __html: serviceDescription
                    }}
                ></p>
            </div>
            <div className={styles.serviceWrapper}>
                <div className={styles.wrapper}>
                    {serviceList.map((data: Service, index: number) => {
                        return (
                            <div className={styles.cardWrapper} key={index}>
                                <div className={styles.card}>
                                    <div className={styles.titleWrap}>
                                        <ImgLoader
                                            className={styles.cardIcon}
                                            src={data.icon.src}
                                            alt="Federal State Return"
                                            width={80}
                                            height={80}
                                        />
                                        <h3
                                            className={styles.cardTitle}
                                            dangerouslySetInnerHTML={{
                                                __html: data.title
                                            }}
                                        ></h3>
                                    </div>
                                    <p
                                        className={styles.cardDesc}
                                        dangerouslySetInnerHTML={{
                                            __html: data.description
                                        }}
                                    />
                                    <div className={styles.listWrapper}>
                                        <h4 className={styles.listTitle}>Benefits:</h4>
                                        <ul className={styles.list}>
                                            <li
                                                dangerouslySetInnerHTML={{
                                                    __html: data.benefits?.benefit1
                                                }}
                                            ></li>
                                            <li
                                                dangerouslySetInnerHTML={{
                                                    __html: data.benefits?.benefit2
                                                }}
                                            ></li>
                                            <li
                                                dangerouslySetInnerHTML={{
                                                    __html: data.benefits?.benefit3
                                                }}
                                            ></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
