import Link from 'next/link'
import styles from './refundPolicy.module.scss'

export const RefundPolicy = () => {
  return (
    <div className={styles.root}>
      <div className={styles.refundContainer}>
        <div className={styles.refundWrapper}>
          <h1 className={styles.title}>Refund Policy</h1>
          <div className={styles.refundContentWrapper}>
            <p>
              Thanks for trusting{' '}
              <b>
                <Link href="/">FileSmart.tax</Link>
              </b>{' '}
              or all your tax needs!
            </p>
            <p>
              If you are not entirely satisfied with your purchase, we`&apos;`re here to help.
            </p>
            <h3>Refunds</h3>
            <p>
              After your submission is received, we will process your filings with the IRS on your behalf and charge your card if you elect for us to do so. There are no refunds allowed for successfully submitted filings, or filings that fail due to incorrectly submitted data.  Additionally, the benefits of membership are not refundable.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions pertaining to this or otherwise, please contact us:{' '}
              <span>
                <a href="mailto:support@filesmart.tax">support@filesmart.tax</a>
              </span>
            </p>
            <p>Last Updated on February 15, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}
