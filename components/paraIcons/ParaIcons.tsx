import styles from './paraIcons.module.scss'
import ImgLoader from '../ImgLoader'
import ImageObj from '../../utils/interfaces'

interface ParaDetails {
  logo: ImageObj
  title: string
  subtitle: string
}

interface ParaIcon {
  icon: ImageObj
}

export const ParaIcons = (props: { paraIcon: ParaIcon[]; paraDetails: ParaDetails }) => {
  const { paraIcon = [], paraDetails } = props

  return (
    <div className={styles.paraWrapper}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.descWrapper}>
            <ImgLoader
              className={styles.logo}
              src={paraDetails?.logo.src}
              width={29}
              height={33}
              alt="Secure logo icon"
            />
            <div className={styles.content}>
              <h2 className={styles.title}>{paraDetails?.title}</h2>
            </div>
          </div>
          <div className={styles.subtitle}
            dangerouslySetInnerHTML={{
              __html: paraDetails?.subtitle,
            }}
          ></div>
          <div className={styles.benefits}>
            {paraIcon.map((data: ParaIcon, index: number) => {
              return (
                <div key={index} className={styles.benefit}>
                  <ImgLoader
                    className={styles.logo}
                    src={data.icon.src}
                    alt="Logo"
                    width={150}
                    height={95}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}