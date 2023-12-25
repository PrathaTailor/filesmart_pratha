import styles from './richtext.module.scss'
interface RichTextDetails {
  title: string
  subTitle: string
}
interface QuestionAnswerDetails {
  question: string
  answer: string
}
const Richtext = (props: {
  richTextDetails: RichTextDetails
  questionAnswerDetails: QuestionAnswerDetails
}) => {
  const { richTextDetails, questionAnswerDetails } = props
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{richTextDetails.title}</h3>
      <h4 className={styles.subTitle}>{richTextDetails.subTitle}</h4>
      <h5 className={styles.question}>{questionAnswerDetails.question}</h5>
      <div
        dangerouslySetInnerHTML={{
          __html: questionAnswerDetails.answer,
        }}
      />
    </div>
  )
}

export default Richtext
