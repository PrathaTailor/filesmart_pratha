import styles from './problems.module.scss'
import ImgLoader from '../ImgLoader'

interface Problem {
  image: string
  name: string
  description: string
}

export const Problems = (props: { problems: Problem[]; header: string }) => {
  const { problems = [], header } = props

  return (
    <div className={styles.problemsContainer}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: header,
        }}
      />
      <div className={styles.cards}>
        {problems.map((data: Problem, index: number) => {
          return (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {data.image && (
                  <div className={styles.cardIcon}>
                    <ImgLoader
                      src={data.image}
                      alt="Icon"
                      width={57}
                      height={57}
                    />
                  </div>
                )}
                <span className={styles.cardText}>{data.name}</span>
              </h3>
              <p
                className={styles.cardDesc}
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
