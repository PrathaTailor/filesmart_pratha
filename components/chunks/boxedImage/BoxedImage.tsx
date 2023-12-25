import styles from './boxedImage.module.scss'
import ImgLoader from '@components/ImgLoader'
import ImageObj from 'utils/interfaces'
interface BoxedImageDetails {
  boxedImg: ImageObj
  height: number
}
export const BoxedImage = (props: { boxedImageDetails: BoxedImageDetails }) => {
  const { boxedImageDetails } = props
  return (
    <div className={styles.imgWrapper}>
      <ImgLoader
        src={boxedImageDetails?.boxedImg?.src}
        alt="Boxed Image"
        width={678}
        height={boxedImageDetails?.height}
      />
    </div>
  )
}
