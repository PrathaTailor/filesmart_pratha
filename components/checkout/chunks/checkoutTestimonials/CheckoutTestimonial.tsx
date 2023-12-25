import styles from './checkoutTestimonials.module.scss';
import ImgLoader from '@components/ImgLoader';
import avatarCheckoutTestimonial from '../../../../images/assets/avatar-checkout-testimonial.png';
import iconStarFull from '../../../../images/icons/icon-star-full.png';
import iconStarHalf from '../../../../images/icons/icon-star-half.png';

export const CheckoutTestimonial = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.testimonailTitle}>What Our Customer Say</h2>
            <div className={styles.reviewsWrapper}>
                <span className={styles.stars}>
                    <ImgLoader src={iconStarFull.src} alt="profile pic" width={21} height={20} />
                    <ImgLoader src={iconStarFull.src} alt="profile pic" width={21} height={20} />
                    <ImgLoader src={iconStarFull.src} alt="profile pic" width={21} height={20} />
                    <ImgLoader src={iconStarFull.src} alt="profile pic" width={21} height={20} />
                    <ImgLoader src={iconStarHalf.src} alt="profile pic" width={21} height={20} />
                </span>
                <span className={styles.reviews}>Rated 4.8/ 5 Stars</span>
            </div>
            <div className={styles.ProfileWrapper}>
                <div className={styles.ProfileImage}>
                    <ImgLoader src={avatarCheckoutTestimonial.src} alt="profile pic" width={68} height={68} />
                </div>
                <div className={styles.profileContent}>
                    <h2 className={styles.ratingTitle}>Great service</h2>
                    <p className={styles.ratingContent}>
                        Very professional. Quick turnaround time. Answered questions thoroughly and quickly. Very
                        interactive.
                    </p>
                    {/* for desktop screen */}
                    <h3 className={styles.reviewerName}>Rosemary M.</h3>
                    <p className={styles.country}>United States</p>
                </div>
                {/* for mobile screen */}
                <div className={styles.reviewerContent}>
                    <h3 className={styles.reviewerNameMobile}>Rosemary M.</h3>
                    <p className={styles.countryMobile}>United States</p>
                </div>
            </div>
        </div>
    );
};
