import styles from './info.module.scss';
import iconStateReturn from '../../../images/icons/icon-info-federal-state-return.png';
import iconMilitarySecurity from '../../../images/icons/icon-info-military-grade-security.png';
import iconExtensionFiling from '../../../images/icons/icon-info-tax-extension-filing.png';
import iconTransparent from '../../../images/icons/icon-transparent-pricing.png';
import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';

interface InfoList {
    icon: ImageObj;
    title: string;
    content: string;
}

export const Info = (props: { infoDescWrapper: string; infoList: InfoList[] }) => {
    const { infoDescWrapper, infoList = [] } = props;
    return (
        <>
            <div
                className={styles.infoDescWrapper}
                dangerouslySetInnerHTML={{
                    __html: infoDescWrapper
                }}
            />
            <div className={styles.container}>
                {infoList.map((item: InfoList, index: number) => {
                    return (
                        <div key={index} className={styles.box}>
                            <ImgLoader src={item?.icon?.src} alt="Icon" width={160} height={160} />

                            <h3 className={styles.boxTitle}>{item?.title}</h3>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item?.content
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};
