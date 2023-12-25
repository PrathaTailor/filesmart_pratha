import styles from './inlineList.module.scss'
interface ListDetails {
  item: string
}
const InlineList = (props: {
  inlineListTitle: string
  listDetails: ListDetails[]
}) => {
  const { inlineListTitle, listDetails } = props
  return (
    <div className={styles.fluid}>
      <div className={styles.container}>
        <h3 className={styles.title}>{inlineListTitle}</h3>
        <ul className={styles.list}>
          {listDetails &&
            listDetails.map((data: ListDetails, index) => {
              return <li key={index}>{data.item}</li>
            })}
        </ul>
      </div>
    </div>
  )
}

export default InlineList
