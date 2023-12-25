import { builder } from '@builder.io/react';
import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';
import styles from './headline.module.scss';
import { useRouter } from 'next/router';

interface HeadlineDetails {
    title: string;
    content: string;
    banner: ImageObj;
    btnText: string;
    btnLink: string;
    description: string;
    showImage?: boolean;
}

export const Headline = (props: { headlineDetails: HeadlineDetails }) => {
    const { headlineDetails } = props;
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: headlineDetails?.title
                    }}
                />
                <p
                    dangerouslySetInnerHTML={{
                        __html: headlineDetails?.content
                    }}
                />
                {headlineDetails?.showImage && (
                    <div className={styles.banner}>
                        <ImgLoader src={headlineDetails?.banner.src} alt="Banner" width={686} height={345} />
                    </div>
                )}
                <a href="#plans">
                    <button className={`${styles.btn} cta-btn`} id="short-home-hero-cta"
                        onClick={() => {
                            builder.track('ctaButtonClick');
                        }}
                    >
                        {headlineDetails?.btnText}
                    </button>
                </a>
            </div>
            <p
                dangerouslySetInnerHTML={{
                    __html: headlineDetails?.description
                }}
            />
        </div>
    );
};
