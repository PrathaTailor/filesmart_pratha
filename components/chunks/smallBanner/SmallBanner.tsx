import styles from './smallBanner.module.scss'
import ImgLoader from '@components/ImgLoader'
import ImageObj from 'utils/interfaces'
interface TaxDeadlineDetails {
  taxFilingDesc: string
  iconTaxFiling: ImageObj
  btnTextLg: string
  btnTextSm: string
  iconArrow: ImageObj
}
const SmallBanner = (props: { taxDeadlineDetails: TaxDeadlineDetails }) => {
  const { taxDeadlineDetails } = props
  return (
    <div className={styles.taxFilingWrapper}>
      <div className={styles.taxDeadline}>
        <ImgLoader
          className={styles.iconTaxFiling}
          src={taxDeadlineDetails.iconTaxFiling.src}
          width={64}
          height={taxDeadlineDetails.iconTaxFiling.height}
          alt="Icon Tax Filing"
        />
        <p
          className={styles.taxFilingDesc}
          dangerouslySetInnerHTML={{
            __html: taxDeadlineDetails.taxFilingDesc,
          }}
        />
      </div>
      <div className={styles.taxFilingInteraction}>
        <button className={styles.btn}>
          <span className={styles.btnText}>
            <span
              className={styles.lg}
              dangerouslySetInnerHTML={{
                __html: taxDeadlineDetails.btnTextLg,
              }}
            />
            <span
              className={styles.sm}
              dangerouslySetInnerHTML={{
                __html: taxDeadlineDetails.btnTextSm,
              }}
            />
          </span>
          <ImgLoader
            src={taxDeadlineDetails.iconArrow.src}
            alt="Icon Arrow"
            width={taxDeadlineDetails.iconArrow.width}
            height={taxDeadlineDetails.iconArrow.height}
          />
        </button>
      </div>
    </div>
  )
}

export default SmallBanner
