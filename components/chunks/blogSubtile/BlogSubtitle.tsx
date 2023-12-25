import styles from './blogSubtitle.module.scss'

export const BlogSubtitle = (props: { subTitle: string; id: string }) => {
  const { subTitle, id } = props
  return (
    <div className={styles.container} id={id}>
      <h2
        className={styles.subTitle}
        dangerouslySetInnerHTML={{
          __html: subTitle,
        }}
      />
    </div>
  )
}
