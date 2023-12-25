import styles from './relatedContent.module.scss'
import ImgLoader from '@components/ImgLoader'
import Link from 'next/link'
import ImageObj from 'utils/interfaces'
interface BlockDetails {
  banner: ImageObj
  blockTitle: string
  content: string
  link: string
}
export const RelatedContent = (props: {
  title: string
  blockDetails: BlockDetails[]
}) => {
  const { title, blockDetails = [] } = props
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.blocks}>
          {blockDetails &&
            blockDetails.map((item: BlockDetails, index: number) => {
              return (
                <div key={index} className={styles.block}>
                  <div className={styles.bannerWrapper}>
                    <ImgLoader
                      className={styles.banner}
                      src={item.banner.src}
                      alt="Banner"
                      width={item.banner?.width}
                      height={item.banner?.height}
                    />
                  </div>
                  <div className={styles.blockDesc}>
                    <h3 className={styles.blockTitle}>{item.blockTitle}</h3>
                    <div className={styles.content}>
                      <p>{item.content} </p>
                      <Link href={item.link}>Read more</Link>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
