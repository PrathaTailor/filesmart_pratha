import styles from './inlineAlert.module.scss'
import ImgLoader from '@components/ImgLoader'
import ImageObj from 'utils/interfaces'
interface AlertDetails {
  iconAlert: ImageObj
  description: string
}
const InlineAlert = (props: { alertDetails: AlertDetails }) => {
  const { alertDetails } = props
  return (
    <div className={styles.container}>
      <p className={styles.alertDesc}>
        <span className={styles.iconAlert}>
        <ImgLoader
          className={styles.alertIcon}
          src={alertDetails.iconAlert.src}
          alt="Icon Alert"
          width={31}
          height={31}
        />
      </span>
        <span dangerouslySetInnerHTML={{
          __html: alertDetails.description
        }} />
      </p>
    </div>
  )
}

export default InlineAlert
