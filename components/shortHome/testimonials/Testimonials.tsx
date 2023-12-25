import styles from './testimonials.module.scss';
import iconStar from '../../../images/icons/icon-star-full.png';
import ImgLoader from '@components/ImgLoader';
import ImageObj from '@utils/interfaces';

interface TestimonialList {
    avatar: ImageObj;
    author: string;
    title: string;
    desc: string;
}

export const Testimonials = (props: { title: string; testimonialList: TestimonialList[] }) => {
    const { title, testimonialList = [] } = props;
    return (
        <div className={styles.fluid}>
            <div className={styles.container}>
                <h2
                    className={styles.title}
                    dangerouslySetInnerHTML={{
                        __html: title
                    }}
                />
                <div className={styles.wrapper}>
                    {testimonialList.map((item: TestimonialList, index: number) => {
                        return (
                            <div key={index} className={styles.box}>
                                <p className={styles.user}>
                                    <ImgLoader src={item?.avatar?.src} alt="Daniel" width={80} height={80} />
                                    <span>{item?.author}</span>
                                </p>
                                <p className={styles.boxTitle}>{item?.title}</p>
                                <p className={styles.desc}>{item?.desc}</p>
                                <div className={styles.ratings}>
                                    <ImgLoader src={iconStar.src} alt="Star" width={30} height={30} />
                                    <ImgLoader src={iconStar.src} alt="Star" width={30} height={30} />
                                    <ImgLoader src={iconStar.src} alt="Star" width={30} height={30} />
                                    <ImgLoader src={iconStar.src} alt="Star" width={30} height={30} />
                                    <ImgLoader src={iconStar.src} alt="Star" width={30} height={30} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
