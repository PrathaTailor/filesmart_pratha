import { useState, useEffect } from 'react';
import styles from '../step1/step1.module.scss';
import ImgLoader from '@components/ImgLoader';
import quizBanner from '../../../../images/assets/quiz-step-2-banner.png';
import ImageObj from '@utils/interfaces';
import { useRouter } from 'next/router';
import QuizCountdownTimer from '../quizCounter/QuizCounter';
import close from '../../../../images/icons/icon-deduction-close.png';

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

export interface Expenses {
    id: string;
    label: string;
    description: string;
    question: string;
    page: string;
    deductions: Deduction[];
}

export interface Deduction {
    id: string;
    description: string;
    instruction: string;
    label: string;
    answerId: string;
    answerIds: string[];
}

export const Step2 = (props: {
    quizStepOneList: QuizStepOneList[];
    stepOneBannerContent: StepOneBannerContent;
    quizStepOne: QuizStepOne;
    modalIsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onModalClose: () => void;
    preSetincomeSources: any;
}) => {
    const {
        quizStepOneList,
        stepOneBannerContent,
        quizStepOne,
        modalIsOpen,
        setIsOpen,
        preSetincomeSources = [],
        onModalClose
    } = props;
    const router = useRouter();
    const [expensesData, setExpensesData] = useState<string[]>([]);
    const [expenses, setExpenses]: any = useState([]);

    useEffect(() => {
        if (preSetincomeSources?.length) {
            setExpensesData([...JSON.parse(preSetincomeSources)]);
        }
    }, [preSetincomeSources]);

    const remainingDays = stepOneBannerContent?.counterDays;

    useEffect(() => {
        let removeElement = quizStepOneList.filter((data) => {
            return data.label.replace(/\’/g, "'") !== "I don't have any of these expenses";
        });
        const lastElement = "I don't have any of these expenses";
        const addLastElement = [...removeElement, { label: lastElement }];
        setExpenses(addLastElement);
        return () => {
            onModalClose?.();
        };
    }, [quizStepOneList]);

    const handleCheck = (event: { target: { checked: boolean; value: string } }) => {
        var updatedList = [...expensesData];
        if (event.target.checked) {
            if (event.target.value !== "I don't have any of these expenses") {
                if (expensesData[0] === "I don't have any of these expenses") {
                    updatedList = [...expensesData, event.target.value];
                    updatedList.splice(0, 1);
                } else {
                    updatedList = [...expensesData, event.target.value];
                }
            } else {
                updatedList = [event.target.value];
            }
        } else {
            updatedList.splice(expensesData.indexOf(event.target.value), 1);
        }
        setExpensesData(updatedList);
    };

    // const goStepTwo = () => {
    //     localStorage.setItem('expenses', JSON.stringify(expensesData));
    //     router.push({
    //         pathname: '/quiz-step3'
    //     });
    // };
    const goStepTwo = () => {
        localStorage.setItem('expenses', JSON.stringify(expensesData));
        const url = window.location.pathname.split('/')[1];
        if (url === 'quiz-step2') {
            router.push({
                pathname: '/quiz-step3'
            });
        } else {
            setIsOpen(false);
        }
    };
    const openModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.close} onClick={openModal}>
                <ImgLoader src={close.src} alt="Close" width={22} height={22} />
            </div>
            <div className={styles.left}>
                <div className={styles.block}>
                    <h2 className={styles.title}>{quizStepOne.title}</h2>
                    <p>{quizStepOne.subTitle}</p>
                    <div className={styles.wrapper}>
                        {expenses?.map((data: Expenses, index: number) => (
                            <div className={styles.select} key={index}>
                                <input
                                    value={data?.label}
                                    type="checkbox"
                                    id={data?.label}
                                    name={data?.label}
                                    onChange={handleCheck}
                                    checked={expensesData.includes(data?.label) ? true : false}
                                />

                                <label htmlFor={data?.label}>{data?.label}</label>
                            </div>
                        ))}
                    </div>
                    <button
                        className={expensesData.length > 0 ? ` ${styles.btn}` : `${styles.btn} ${styles.btnDisable}`}
                        onClick={goStepTwo}
                    >
                        <span className={styles.btnText}>{quizStepOne.btnText}</span>{' '}
                        <ImgLoader src={quizStepOne.iconArrow.src} alt="Icon Arrow" width={13} height={13} />
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
                        <ImgLoader src={stepOneBannerContent.iconWatch.src} alt="Icon Watch" width={15} height={14} />
                        <span>{stepOneBannerContent?.subTitle}</span>
                        <span className={styles.timer}>
                            <QuizCountdownTimer targetDate={remainingDays} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
