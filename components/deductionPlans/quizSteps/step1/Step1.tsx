import { useState, useEffect, SetStateAction } from 'react';
import styles from './step1.module.scss';
import ImgLoader from '@components/ImgLoader';
import quizBanner from '../../../../images/assets/quiz-step-1-banner.png';
import close from '../../../../images/icons/icon-deduction-close.png';
import ImageObj from '@utils/interfaces';
import { useRouter } from 'next/router';
import QuizCountdownTimer from '../quizCounter/QuizCounter';

interface QuizStepOneList {
    label: string;
}
interface StepOneBannerContent {
    quizBanner: ImageObj;
    iconWatch: ImageObj;
    title: string;
    subTitle: string;
    counterDays: number;
}
interface QuizStepOne {
    title: string;
    subTitle: string;
    btnText: string;
    iconArrow: ImageObj;
}

export const Step1 = (props: {
    quizStepOneList: QuizStepOneList[];
    stepOneBannerContent: StepOneBannerContent;
    quizStepOne: QuizStepOne;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalIsOpen: boolean;
    onModalClose: () => void;
    preSetincomeSources: any;
}) => {
    const {
        quizStepOneList,
        stepOneBannerContent,
        quizStepOne,
        setIsOpen,
        modalIsOpen,
        onModalClose,
        preSetincomeSources = []
    } = props;

    const router = useRouter();
    const [incomeSources, setIncomeSources] = useState<string[]>([]);
    const [incomeSourcesData, setIncomeSourcesData] = useState<any>([]);
    const remainingDays = stepOneBannerContent?.counterDays;

    
    useEffect(() => {
        if (preSetincomeSources?.length) {
            setIncomeSources([...JSON.parse(preSetincomeSources.replace(/\'/g, '\''))]);
        }
    }, [preSetincomeSources]);

    useEffect(() => {
        let removeElement = quizStepOneList?.filter((data) => {
            return data.label?.replace(/\’/g, "'") !== "I don't have any of these income sources";
        });
        const lastElement = "I don't have any of these income sources";
        const addLastElement = [...removeElement, { label: lastElement }];
        setIncomeSourcesData(addLastElement);
        return () => {
            onModalClose?.();
        };
    }, []);
    useEffect(() => {
        let removeElement = quizStepOneList?.filter((data) => {
            return data.label?.replace(/\’/g, "'") !== "I don't have any of these income sources";
        });
        const lastElement = "I don't have any of these income sources";
        const addLastElement = [...removeElement, { label: lastElement }];
        setIncomeSourcesData(addLastElement);
    }, [quizStepOneList]);

    const handleCheck = (event: { target: { checked: boolean; value: string } }) => {
        var updatedList = [...incomeSources];
        if (event.target.checked) {
            if (event.target.value !== "I don't have any of these income sources") {
                if (incomeSources[0] === "I don't have any of these income sources") {
                    updatedList = [...incomeSources, event.target.value];
                    updatedList.splice(0, 1);
                } else {
                    updatedList = [...incomeSources, event.target.value];
                }
            } else {
                updatedList = [event.target.value];
            }
        } else {
            updatedList.splice(incomeSources.indexOf(event.target.value), 1);
        }
        setIncomeSources(updatedList);
    };

    const goStepTwo = () => {
        localStorage.setItem('incomeSources', JSON.stringify(incomeSources));
        const url = window.location.pathname.split('/')[1];
        if (url === 'quiz-step1') {
            router.push({
                pathname: '/quiz-step2'
            });
        } else {
            setIsOpen(false);
        }
    };

    const openModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={`${styles.container}`}>
            <div className={styles.close} onClick={openModal}>
                <ImgLoader src={close.src} alt="Close" width={22} height={22} />
            </div>
            <div className={styles.left}>
                <div className={styles.block}>
                    <h2 className={styles.title}>{quizStepOne?.title}</h2>
                    <p>{quizStepOne?.subTitle}</p>
                    <div className={styles.wrapper}>
                        {incomeSourcesData?.map((data: any, index: number) => (
                            <div className={styles.select} key={index}>
                                <input
                                    value={data?.label}
                                    type="checkbox"
                                    id={data?.label}
                                    name={data?.label}
                                    onChange={handleCheck}
                                    checked={incomeSources.includes(data?.label) ? true : false}
                                />

                                <label htmlFor={data?.label}>{data?.label}</label>
                            </div>
                        ))}
                    </div>
                    <button
                        className={incomeSources.length > 0 ? ` ${styles.btn}` : `${styles.btn} ${styles.btnDisable}`}
                        onClick={goStepTwo}
                    >
                        <span className={styles.btnText}>{quizStepOne?.btnText}</span>{' '}
                        <ImgLoader src={quizStepOne?.iconArrow?.src} alt="Icon Arrow" width={13} height={13} />
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <ImgLoader className={styles.banner} src={quizBanner.src} alt="Quiz Banner" width={690} height={1080} />
                <div className={styles.box}>
                    <div className={styles.sm}>
                        <p
                            className={styles.title}
                            dangerouslySetInnerHTML={{
                                __html: stepOneBannerContent?.title
                            }}
                        ></p>
                    </div>
                    <div className={styles.deadline}>
                        <ImgLoader src={stepOneBannerContent?.iconWatch?.src} alt="Icon Watch" width={15} height={14} />
                        <span>{stepOneBannerContent?.subTitle}</span>
                        {/* <CountdownTimer remainingDays={tabVal === true ? THREE_DAYS_IN_MS : THREE_DAYS_IN_MS_NO} /> */}
                        {/* remainingDays */}
                        <span className={styles.timer}>
                            <QuizCountdownTimer targetDate={remainingDays} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
