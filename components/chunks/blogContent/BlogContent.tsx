import styles from './blogContent.module.scss'

export const BlogContent = (props: { blogContent: string }) => {
  const { blogContent } = props
  return (
    <div className={styles.container}>
      <p
        className={styles.blogContent}
        dangerouslySetInnerHTML={{
          __html: blogContent,
        }}
      />
    </div>
  )
}
