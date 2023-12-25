import styles from './blogNotes.module.scss'

export const BlogNotes = (props: { blogContent: string }) => {
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
