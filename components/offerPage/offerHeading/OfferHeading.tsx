import styles from './offerHeading.module.scss';
import { useCountdown } from '../../../hooks/useCountdown';
// import _variable.scss;
interface offerHeadingDetails {
    title: string;
    lessthenThreeDayForYesTitle: string;
    pastDeadlineForYesTitle: string;
    lessthenThreeDayForNoTitle: string;
    pastDeadlineForNoTitle: string;
    lessthenThreeDayForYesSubTitle: string;
    pastDeadlineForYesSubTitle: string;
    lessthenThreeDayForNoSubTitle: string;
    pastDeadlineForNoSubTitle: string;
    subTitle: string;
    smallSubTitle: string;
}

export const OfferHeading = (props: {
    offerHeadingDetails: offerHeadingDetails;
    datetime: number;
    tabVal: boolean;
}) => {
    const { offerHeadingDetails, datetime, tabVal } = props;
    const [days, hours, minutes, seconds] = useCountdown(datetime);
    let title = offerHeadingDetails?.title;
    let subTitle = offerHeadingDetails?.subTitle;
    if (tabVal === true) {
        if (days + hours + minutes + seconds < 0) {
            title = offerHeadingDetails?.pastDeadlineForYesTitle;
            subTitle = offerHeadingDetails?.pastDeadlineForYesSubTitle;
        } else if (days < 3) {
            title = offerHeadingDetails?.lessthenThreeDayForYesTitle;
            subTitle = offerHeadingDetails?.lessthenThreeDayForYesSubTitle;
        }
    } else {
        if (days + hours + minutes + seconds <= 0) {
            title = offerHeadingDetails?.pastDeadlineForNoTitle;
            subTitle = offerHeadingDetails?.pastDeadlineForNoSubTitle;
        } else if (days < 3) {
            title = offerHeadingDetails?.lessthenThreeDayForNoTitle;
            subTitle = offerHeadingDetails?.lessthenThreeDayForNoSubTitle;
        }
    }
    return (
        <div className={styles.container}>
            <p
                className={styles.title}
                dangerouslySetInnerHTML={{
                    __html: title
                }}
            ></p>
            <p
                className={styles.desc}
                dangerouslySetInnerHTML={{
                    __html: window.innerWidth > 480 ? subTitle : offerHeadingDetails?.smallSubTitle
                }}
            ></p>
        </div>
    );
};
