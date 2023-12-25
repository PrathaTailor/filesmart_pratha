import styles from './blogColumnContent.module.scss'
import ImgLoader from '@components/ImgLoader'

interface BlogColumnContentDetails {
  title: string
  banner: string
  content: string
}

export const BlogColumnContent = (props: {
  blogColumnContentDetails: BlogColumnContentDetails
}) => {
  const { blogColumnContentDetails } = props
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <h3
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: blogColumnContentDetails.title,
          }}
        />
      </div>
      <div className={styles.imgContainer}>
        <ImgLoader
          src={blogColumnContentDetails.banner}
          width={670}
          height={279}
          alt="Blog Image"
        />
      </div>
      <div className={styles.contentcontainer}>
        <p
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: blogColumnContentDetails.content,
          }}
        />
      </div>
    </div>
  )
}
