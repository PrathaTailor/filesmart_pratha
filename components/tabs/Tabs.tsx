// import styles from './tabs.module.scss'

// interface TabDetails {
//   titleOne: string
//   subtitleOne: string
//   titleTwo: string
//   subtitleTwo: string
// }

// export const Tabs = (props: { tabDetails: TabDetails }) => {
//   const { tabDetails } = props

//   return (
//     <div className={styles.fluidContainer}>
//       <div className={styles.tabWrapper}>
//         <div className={`${styles.tab} ${styles.tab_1}`}>
//           <span className={styles.tabTitle}>
//             {tabDetails?.titleOne}
//           </span>
//           <span className={styles.desc}>
//             {tabDetails?.subtitleOne}
//           </span>
//         </div>
//         <div className={`${styles.tab} ${styles.active}  ${styles.tab_2}`}>
//           <span className={styles.tabTitle}>
//             {tabDetails?.titleTwo}
//           </span>
//           <span className={styles.desc}>
//             {tabDetails?.subtitleTwo}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

import styles from './tabs.module.scss'

interface TabDetails {
  titleOne: string
  subtitleOne: string
  titleTwo: string
  subtitleTwo: string
}

export const Tabs = (props: { tabDetails: TabDetails }) => {
  const { tabDetails } = props

  return (
    <div className={styles.fluidContainer}>
      <div className={styles.tabWrapper}>
        <div className={`${styles.tab} ${styles.tab_1}`}>
          <span className={styles.tabTitle}>
            {tabDetails?.titleOne}
          </span>
          <span className={styles.desc}>
            {tabDetails?.subtitleOne}
          </span>
        </div>
      </div>
    </div>
  )
}
