import ImgLoader from '@components/ImgLoader';
import styles from './largeBanner.module.scss';
import ImageObj from 'utils/interfaces';
import { useRouter } from 'next/router';

interface LargeBannerDetails {
    link: string;
    banner: ImageObj;
    lgText: string;
    btntext: string;
    iconArrowRight: ImageObj;
}
export const LargeBanner = (props: { largeBannerDetails: LargeBannerDetails }) => {
    const { largeBannerDetails } = props;
    const router = useRouter();

    return (
        <div className={styles.container} onClick={() => router.push(largeBannerDetails.link)}>
            <div className={styles.banner}>
                <ImgLoader
                    src={largeBannerDetails.banner.src}
                    alt="Banner"
                    width={largeBannerDetails.banner.width}
                    height={275}
                />
            </div>
            <div className={styles.box}>
                <p
                    className={styles.lgText}
                    dangerouslySetInnerHTML={{
                        __html: largeBannerDetails.lgText
                    }}
                />
                <button className={styles.btn}>
                    <span>{largeBannerDetails.btntext}</span>
                    <ImgLoader
                        className={styles.icon}
                        src={largeBannerDetails.iconArrowRight.src}
                        width={largeBannerDetails.iconArrowRight.width}
                        height={largeBannerDetails.iconArrowRight.height}
                        alt="Icon Right"
                    />{' '}
                </button>
            </div>
        </div>
    );
};
