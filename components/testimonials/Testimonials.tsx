import styles from './testimonials.module.scss';
import ImgLoader from '../ImgLoader';
import ImageObj from '../../utils/interfaces';

interface Detail {
    categoryIcon: ImageObj;
    categoryName: string;
    title: string;
    description: string;
}

interface Testimonial {
    text: string;
}

export const Testimonials = (props: {
    testimonialDetails: Detail;
    sectionOneTestimonials: Testimonial[];
    sectionTwoTestimonials: Testimonial[];
}) => {
    const { testimonialDetails, sectionOneTestimonials = [], sectionTwoTestimonials = [] } = props;

    return (
        <div className={styles.container}>
            <div className={styles.categoryWrapper}>
                <div className={styles.iconWrapper}>
                    <ImgLoader
                        className={styles.iconCategory}
                        src={testimonialDetails?.categoryIcon.src}
                        alt="Icon Category"
                        width={16}
                        height={12}
                    />
                </div>
                <span className={styles.title}>{testimonialDetails.categoryName}</span>
            </div>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>{testimonialDetails.title}</h2>
            </div>
            <p
                className={styles.subDescription}
                dangerouslySetInnerHTML={{
                    __html: testimonialDetails.description
                }}
            />
            <div className={styles.testimonials}>
                <ul className={styles.testimonial}>
                    {sectionOneTestimonials.map((data: Testimonial, index: number) => {
                        return <li key={index}>{data?.text}</li>;
                    })}
                </ul>
                <ul className={styles.testimonial}>
                    {sectionTwoTestimonials.map((data: Testimonial, index: number) => {
                        return <li key={index}>{data?.text}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
