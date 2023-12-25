import styles from './about.module.scss'
import ImgLoader from '../ImgLoader'
import ImageObj from '../../utils/interfaces'

interface Detail {
  logo: ImageObj
  title: string
  subTitle: string
}

interface Benefit {
  icon: ImageObj
  title: string
}

export const About = (props: { benefits: Benefit[]; aboutDetails: Detail }) => {
  const { benefits = [], aboutDetails } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.descWrapper}>
          <div className={styles.logoWrapper}>
            <ImgLoader
              className={styles.logo}
              src={aboutDetails.logo.src}
              width={244}
              height={241}
              alt="Logo Icon"
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>{aboutDetails.title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: aboutDetails.subTitle,
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className={styles.benefits}>
        {benefits.map((data: Benefit, index: number) => {
          return (
            <div key={index} className={styles.benefit}>
              <ImgLoader
                className={styles.logo}
                src={data.icon.src}
                alt="Logo"
                width={140}
                height={110}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: data.title,
                }}
              ></p>
              {/* <p>{data.title}</p> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
