import styles from './blogTitle.module.scss'

export const BlogTitle = (props: { title: string; id: string }) => {
  const { title, id } = props
  return (
    <div className={styles.container} id={id}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
    </div>
  )
}
