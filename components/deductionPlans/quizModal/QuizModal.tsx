import React, { useContext, useEffect, useState } from 'react';
import { Step1 } from '../quizSteps/step1/Step1';
import iconWatch from '../../../images/icons/icon-yellow-watch.png';
import quizBanner from '../../../images/assets/quiz-step-1-banner.png';
import iconArrow from '../../../images/icons/icon-arrow-right.png';
import close from '../../../images/icons/icon-deduction-close.png';
import styles from '../quizSteps/step1/step1.module.scss';
import ImgLoader from '@components/ImgLoader';
import { DeductionAnswerContext } from 'pages/quiz-intro';
import { Step2 } from '../quizSteps/step2/Step2';

export const QuizModal = ({ setIsOpen, modalIsOpen, stepPageOpen, refreshItems }: any) => {
    const dataa: any = useContext(DeductionAnswerContext);

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    useEffect(() => {
        const incomeSources = dataa?.deductionAnswers?.filter((item: any) => item.page === 'Income Sources');
        const expenses = dataa?.deductionAnswers.filter((item: any) => item.page === 'Expenses');
        setIncomes(incomeSources)
        setExpenses(expenses)
    }, [dataa?.deductionAnswers])

    const quizStepOneList = dataa?.stepOneData?.data?.blocks[1]?.component?.options?.quizStepOneList;
    const quizStepOne = dataa?.stepOneData?.data?.blocks[1]?.component?.options?.quizStepOne;
    const stepOneBannerContent = dataa?.stepOneData?.data?.blocks[1]?.component?.options?.stepOneBannerContent;

    const quizStepTwoList = dataa?.stepTwoData?.data?.blocks[1]?.component?.options?.quizStepOneList;
    const quizStepTwo = dataa?.stepTwoData?.data?.blocks[1]?.component?.options?.quizStepOne;
    const stepTwoBannerContent = dataa?.stepTwoData?.data?.blocks[1]?.component?.options?.stepOneBannerContent;


    return (
        <div className={styles.quizResultModal}>
            <div className={styles.modalBody}>
                {stepPageOpen === 'IncomeSource' && (
                    <Step1
                        quizStepOneList={incomes}
                        stepOneBannerContent={stepOneBannerContent}
                        quizStepOne={quizStepOne}
                        setIsOpen={setIsOpen}
                        modalIsOpen={modalIsOpen}
                        onModalClose={refreshItems}
                        preSetincomeSources={localStorage.getItem('incomeSources')}
                    />
                )}
                {stepPageOpen === 'Expense' && (
                    <Step2
                        quizStepOneList={expenses}
                        stepOneBannerContent={stepTwoBannerContent}
                        quizStepOne={quizStepTwo}
                        setIsOpen={setIsOpen}
                        modalIsOpen={modalIsOpen}
                        onModalClose={refreshItems}
                        preSetincomeSources={localStorage.getItem('expenses')}
                    />
                )}
            </div>
        </div>
    );
};
