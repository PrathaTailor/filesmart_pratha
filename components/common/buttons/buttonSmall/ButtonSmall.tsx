import styles from './buttonSmall.module.scss'

export const ButtonSmall = () => {
  //Colors: bgBlue, bgDarkBlue, bgMalibu
  return (
    <button className={`${styles.button} ${styles.bgMalibu}`}>Continue</button>
  )
}
