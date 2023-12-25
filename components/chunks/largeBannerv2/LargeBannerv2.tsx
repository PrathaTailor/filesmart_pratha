import styles from './largeBannerv2.module.scss'
import ImgLoader from '@components/ImgLoader'
import ImageObj from 'utils/interfaces'
import { useRouter } from 'next/router'

interface LargeBannerDetails {
  link: string
  banner: ImageObj
  lgText: string
  btntextLg: string
  btntextSm: string
  iconArrowRight: ImageObj
}
export const LargeBannerv2 = (props: {
  largeBannerDetails: LargeBannerDetails
}) => {
  const { largeBannerDetails } = props
  const router = useRouter()
  return (
    <div
      className={styles.container}
      onClick={() => router.push(largeBannerDetails.link)}
    >
      <div className={styles.banner}>
        <ImgLoader
          src={largeBannerDetails.banner.src}
          alt="Banner"
          width={largeBannerDetails.banner.width}
          height={largeBannerDetails.banner.height}
        />
      </div>
      <div className={styles.box}>
        <p
          className={styles.lgText}
          dangerouslySetInnerHTML={{
            __html: largeBannerDetails.lgText,
          }}
        />
        <button className={styles.btn}>
          <span className={styles.btnText}>
            <span className={styles.lg}>{largeBannerDetails.btntextLg}</span>
            <span className={styles.sm}>{largeBannerDetails.btntextSm}</span>
          </span>
          <ImgLoader
            className={styles.icon}
            src={largeBannerDetails.iconArrowRight.src}
            width={largeBannerDetails.iconArrowRight.width}
            height={largeBannerDetails.iconArrowRight.height}
            alt="Icon Right"
          />
        </button>
      </div>
    </div>
  )
}
