import styles from './blogQuestion.module.scss'
interface BlogQuesAns {
  question: string
  answer: string
}
export const BlogQuestion = (props: { blogQuesAns: BlogQuesAns }) => {
  const { blogQuesAns } = props
  return (
    <>
      <div className={styles.questioncontainer}>
        <h2
          className={styles.question}
          dangerouslySetInnerHTML={{
            __html: blogQuesAns.question,
          }}
        />
      </div>
      <div className={styles.answercontainer}>
        <p
          className={styles.answer}
          dangerouslySetInnerHTML={{
            __html: blogQuesAns.answer,
          }}
        />
      </div>
    </>
  )
}
