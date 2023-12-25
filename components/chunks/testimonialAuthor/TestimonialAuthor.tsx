import Image from 'next/image'
import styles from './testimonialAuthor.module.scss'
import ImgLoader from '@components/ImgLoader'

interface TestimonialDetails {
  avatar: string
  authorLabel: string
  authorName: string
  authorPosition: string
  authorDesc: string
}

export const TestimonialAuthor = (props: {
  testimonialDetails: TestimonialDetails
}) => {
  const { testimonialDetails } = props
  return (
    <div className={styles.authorContainer}>
      <div className={styles.authorWrapper}>
        <div className={styles.autherInfo}>
          <div className={styles.authAvatar}>
          <Image
            className={styles.authorImg}
            src={testimonialDetails.avatar}
            alt="Avatar"
            height={146}
            width={146}
            />
          </div>
          <div>
            <span className={styles.authorLabel}>
              {testimonialDetails.authorLabel}
            </span>
            <h3 className={styles.authorName}>
              {testimonialDetails.authorName}
            </h3>
            <h4 className={styles.authorPosition}>
              {testimonialDetails.authorPosition}
            </h4>
          </div>
        </div>
        <p
          className={styles.authorDesc}
          dangerouslySetInnerHTML={{
            __html: testimonialDetails.authorDesc,
          }}
        />
      </div>
    </div>
  )
}
