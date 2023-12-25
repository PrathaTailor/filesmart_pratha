import styles from './button.module.scss'

export const Button = () => {
  //Colors: bgBlue, bgDarkBlue, bgMalibu
  return (
    <button className={`${styles.button} ${styles.bgMalibu}`}>
      I want more details
    </button>
  )
}
