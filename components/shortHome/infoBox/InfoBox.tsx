import ImgLoader from '@components/ImgLoader';
import styles from './infoBox.module.scss';
import iconCheck from '../../../images/icons/icon-infobox-check.png';
import iconPause from '../../../images/icons/icon-infobox-pause.png';
import ImageObj from '@utils/interfaces';

interface InfoList {
    icon: ImageObj;
    content: string;
}

export const InfoBox = (props: { infoList: InfoList[] }) => {
    const { infoList = [] } = props;
    return (
        <div className={styles.container}>
            {infoList &&
                infoList.map((item: InfoList, index: number) => {
                    return (
                        <div key={index} className={styles.half}>
                            <ImgLoader src={item?.icon?.src} alt="Icon" width={202} height={184} />
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item?.content
                                }}
                            />
                        </div>
                    );
                })}
        </div>
    );
};
