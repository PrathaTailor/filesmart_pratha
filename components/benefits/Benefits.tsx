import styles from './benefits.module.scss'
import ImgLoader from '../ImgLoader'

interface Benefit {
  image: string
  description: string
}

export const Benefits = (props: { benefits: Benefit[] }) => {
  const { benefits = [] } = props
  return (
    <div className={styles.benefitsSection}>
      {benefits.map((data: Benefit, index: number) => {
        return (
          <div key={index} className={styles.benefit}>
            <div className={styles.benefitIcon}>
              <ImgLoader
                className={styles.logo}
                src={data.image}
                alt="Icon Thumb"
                width={24}
                height={24}
              />
            </div>
            <span className={styles.benefitText}>{data.description}</span>
          </div>
        )
      })}
    </div>
  )
}
