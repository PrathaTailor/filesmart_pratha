import styles from './articleHero.module.scss'
import ImgLoader from '@components/ImgLoader'
import Link from 'next/link'
import ImageObj from 'utils/interfaces'

interface HeaderDetails {
  advTitle: string
  advTitleMain: string
  advDesc: string
  articleBanner: ImageObj
  authName: string
  avatarIsabel: ImageObj
  date: string
  iconCalendar: ImageObj
  time: string
  iconTime: ImageObj
}
export const ArticleHero = (props: { headerDetails: HeaderDetails }) => {
  const { headerDetails } = props
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.advHero}>
          <p className={styles.pagination}>
            <Link href="/">File Smart Tax</Link> {'>'} Filing a 1099
          </p>
          <h3 className={styles.advTitle}>{headerDetails.advTitle}</h3>
          <h2 className={styles.advTitleMain} dangerouslySetInnerHTML={{
            __html: headerDetails.advTitleMain
          }} />
          <p className={styles.advDesc}>{headerDetails.advDesc}</p>
        </div>
      </div>
      <div className={styles.advWrapper}>
        <div className={styles.wrapper}>
          <p className={styles.authorDetails}>
            <span className={styles.authName}>
              <ImgLoader
                className={styles.authAvatar}
                src={headerDetails.avatarIsabel.src}
                alt="Avatar"
                width={28}
                height={28}
              />
              {headerDetails.authName}
            </span>
            <span className={styles.articleTimeDate}>
              <span className={styles.date}>
                <ImgLoader
                  src={headerDetails.iconCalendar.src}
                  alt="Icon Date"
                  width={headerDetails.iconCalendar.width}
                  height={headerDetails.iconCalendar.height}
                />
                <span className={styles.iconText}>{headerDetails.date}</span>
              </span>
              <span className={styles.time}>
                <ImgLoader
                  src={headerDetails.iconTime.src}
                  alt="Icon Time"
                  width={headerDetails.iconTime.width}
                  height={headerDetails.iconTime.height}
                />{' '}
                <span className={styles.iconText}>{headerDetails.time}</span>
              </span>
            </span>
          </p>
        </div>
        <div className={styles.articleBanner}>
          <ImgLoader
            src={headerDetails.articleBanner.src}
            alt="Banner"
            width={headerDetails.articleBanner.width}
            height={headerDetails.articleBanner.height}
          />
        </div>
      </div>
    </div>
  )
}
