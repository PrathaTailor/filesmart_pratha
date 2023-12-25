import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import ImgLoader from '@components/ImgLoader';
import styles from './quizResult.module.scss';
import iconInclusive from '../../../images/icons/icon-all-inclusive.png';
import avatar from '../../../images/assets/all-inclusive-samantha.png';
import sign from '../../../images/icons/sign-samantha.png';
import iconCheck from '../../../images/icons/icon-pricing-circle-check.png';
import iconArrow from '../../../images/icons/icon-arrow-draw.png';
import iconArrowRight from '../../../images/icons/icon-arrow-right.png';
import avatarLg from '../../../images/assets/all-inclusive-samantha-lg.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DeductionAnswerContext } from 'pages/quiz-intro';
import { QuizModal } from '../quizModal/QuizModal';

export const QuizResult = (quizResultData: any) => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [incomeSourcesData, setIncomeSourcesData] = useState([]);
    const [expensesData, setExpensesData] = useState([]);
    const [activeAccordionIncome, setActiveAccordionIncome]: any = useState(0);
    const [activeAccordionExpense, setActiveAccordionExpense]: any = useState(0);
    const [activeAccordionInnerIncome, setActiveAccordionInnerIncome]: any = useState(0);
    const [activeAccordionInnerExpense, setActiveAccordionInnerExpense]: any = useState(0);
    const [activeInnerAcc, setActiveInnerAcc]: any = useState(true);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [stepPageOpen, setStepPageOpen] = React.useState('');

    const dataa: any = useContext(DeductionAnswerContext);

    const refreshItems = () => {
        const userName: any = localStorage.getItem('userName');
        const incomeSources: any = localStorage.getItem('incomeSources');
        const expenses: any = localStorage.getItem('expenses');
        let Incdata = JSON.parse(incomeSources);
        let Expdata = JSON.parse(expenses);
        setIncomeSourcesData(Incdata);
        setExpensesData(Expdata);
        setName(userName);
    };

    useEffect(() => {
        const userName: any = localStorage.getItem('userName');
        const incomeSources: any = localStorage.getItem('incomeSources');
        const expenses: any = localStorage.getItem('expenses');
        let Incdata = JSON.parse(incomeSources);
        let Expdata = JSON.parse(expenses);
        setIncomeSourcesData(Incdata);
        setExpensesData(Expdata);
        setName(userName);
    }, []);

    let incomeAccordionData: any = [];
    incomeSourcesData?.map((data: any) => {
        dataa?.deductionAnswers.filter((item: any) => {
            if (data?.replace(/\'/g, '’') === item?.label?.replace(/\'/g, '’')) {
                incomeAccordionData.push(item);
            }
        });
    });

    let expensesAccordionData: any = [];
    expensesData.map((data: any) => {
        dataa?.deductionAnswers.filter((item: any) => {
            if (data.replace(/\'/g, '’') === item?.label.replace(/\'/g, '’')) {
                expensesAccordionData.push(item);
            }
        });
    });

    const manageIncomeAccordion = (index: any) => {
        if (activeAccordionIncome === index) {
            setActiveAccordionIncome(-1);
        } else {
            setActiveAccordionIncome(index);
        }
    };
    const manageExpenseAccordion = (index: any) => {
        if (activeAccordionExpense === index) {
            setActiveAccordionExpense(-1);
        } else {
            setActiveAccordionExpense(index);
        }
    };
    const manageInnerIncomeAccordion = (index: any) => {
        if (activeAccordionInnerIncome === index) {
            setActiveAccordionInnerIncome(-1);
        } else {
            setActiveAccordionInnerIncome(index);
        }
    };
    const manageInnerExpenseAccordion = (index: any) => {
        if (activeAccordionInnerExpense === index) {
            setActiveAccordionInnerExpense(-1);
        } else {
            setActiveAccordionInnerExpense(index);
        }
    };

    const incomeAction = () => {
        setIsOpen(true);
        setStepPageOpen('IncomeSource');
    };

    const expenseAction = () => {
        setIsOpen(true);
        setStepPageOpen('Expense');
    };

    return (
        <div className={styles.container}>
            {modalIsOpen && (
                <QuizModal
                    setIsOpen={setIsOpen}
                    modalIsOpen={modalIsOpen}
                    stepPageOpen={stepPageOpen}
                    refreshItems={refreshItems}
                />
            )}
            <div className={`${styles.stickyInclusive} ${styles.hide}`}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>All-Inclusive</h3>
                    <p className={styles.subTitle}>Upgrade to FileSmart Today</p>
                    <ul className={styles.list}>
                        <li>Federal Return</li>
                        <li>State Return</li>
                        <li>Tax Extension Filing</li>
                        <li>Expert Help</li>
                    </ul>
                    <p className={styles.additionalNotes}>
                        <ImgLoader
                            className={styles.arrowDraw}
                            src={iconArrow.src}
                            width={20}
                            height={14}
                            alt="Icon Arrow"
                        />
                        get an <span>additional 6 months to file!</span>
                    </p>
                    <button className={styles.btn}>
                        <p className={styles.btnText}>
                            <span className={styles.lg}>Get Started</span>
                            <span className={styles.sm}>No hidden fees</span>
                        </p>
                        <ImgLoader src={iconArrowRight.src} alt="Arrow Right" width={8.75} height={7.75} />
                    </button>
                </div>
                <div className={styles.bgWrapper} style={{ background: `url(${avatarLg.src})` }}>
                    <div className={styles.signWrapper}>
                        <div className={styles.logo}>
                            <ImgLoader src={iconCheck.src} alt="Icon Check" width={18} height={17} />
                            <p>
                                FileSmart<sup>TM</sup> <span>Expert</span>
                            </p>
                        </div>
                        <div className={styles.nameSign}>
                            <ImgLoader src={sign.src} alt="Sign" width={153} height={32} />
                            <span className={styles.name}>Samantha G., J.D.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.planUserInfo}>
                <p className={styles.breadcrumb}>
                    <span className={styles.prev}>FileSmart Tax</span>
                    <span className={`${styles.prev} ${styles.gt}`}>&gt;</span>
                    <span className={styles.current}>Filing a 1099</span>
                </p>
                <h2 className={styles.userTitle}>
                    <span>{name}&apos;s Tax</span> Deduction Plan
                </h2>
                <p className={styles.userDesc}>Generated in 4th of April, 2023. Valid for tax year of 2022.</p>
            </div>

            {/* Income Sources Start */}
            <div className={styles.planInfo}>
                <div className={styles.planTabWrapper}>
                    <h3 className={styles.tabTitle}>Income Sources</h3>
                    <p className={styles.tabDesc}>Selected items:</p>
                    <div className={styles.tabs}>
                        {incomeSourcesData &&
                            incomeSourcesData.map((data, index) => {
                                return (
                                    <span className={`${styles.tab} ${styles.active}`} key={index}>
                                        {data}
                                    </span>
                                );
                            })}
                        <span className={`${styles.tab} ${styles.add}`} onClick={incomeAction}>
                            Add an item +
                        </span>
                    </div>
                    {incomeAccordionData.map((incomeDataOuter: any, index: number) => {
                        if (incomeDataOuter.label !== "I don't have any of these income sources") {
                            return (
                                <ul className={styles.planAcc} key={index}>
                                    <li
                                        className={
                                            activeAccordionIncome !== index
                                                ? `${styles.accItem}`
                                                : `${styles.accItem} ${styles.active}`
                                        }
                                    >
                                        <h4
                                            className={styles.accTitle}
                                            onClick={() => {
                                                manageIncomeAccordion(index);
                                            }}
                                        >
                                            {incomeDataOuter?.label}
                                        </h4>
                                        <div className={styles.accBody}>
                                            <p className={styles.accDesc}>
                                                {incomeDataOuter?.description}then you&apos;re eligible for the
                                                following deductions:
                                            </p>
                                            {incomeDataOuter?.deductions.map((incomeDataInner: any, index: any) => {
                                                return (
                                                    <ul className={styles.innerAcc} key={index}>
                                                        <li
                                                            className={
                                                                activeAccordionInnerIncome !== index
                                                                    ? `${styles.innerAccItem}`
                                                                    : `${styles.innerAccItem} ${styles.active}`
                                                            }
                                                        >
                                                            <h4
                                                                className={styles.innerAccTitle}
                                                                onClick={() => {
                                                                    manageInnerIncomeAccordion(index);
                                                                }}
                                                            >
                                                                {incomeDataInner?.label}
                                                            </h4>
                                                            <div className={styles.innerAccBody}>
                                                                <p>{incomeDataInner?.description}</p>

                                                                <ul className={styles.innerAcc}>
                                                                    <li
                                                                        className={
                                                                            activeInnerAcc
                                                                                ? `${styles.innerAccItem}`
                                                                                : `${styles.innerAccItem} ${styles.active}`
                                                                        }
                                                                    >
                                                                        <h4
                                                                            className={styles.innerAccTitle}
                                                                            onClick={() =>
                                                                                setActiveInnerAcc(!activeInnerAcc)
                                                                            }
                                                                        >
                                                                            How to claim this deduction
                                                                        </h4>
                                                                        <div className={styles.innerAccBody}>
                                                                            <p>{incomeDataInner?.instruction}</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                );
                                            })}
                                        </div>
                                    </li>
                                </ul>
                            );
                        } else {
                            return (
                                <p key={index}>
                                    It`&apos;`s impossible for us to tell which tax deductions you can claim without
                                    knowing at least one income source and/or expenses. Click the button below to
                                    restart the quiz.{' '}
                                </p>
                            );
                        }
                    })}
                </div>
            </div>
            {/* Income Sources End */}

            {/* Support Section Start */}
            <div className={styles.supportWrapper}>
                <div className={styles.left}>
                    <h3 className={styles.title}>
                        Need year-round <span>tax support</span> for just <span>pennies a day</span>?
                    </h3>
                    <div className={styles.inclusiveWrapper}>
                        <p className={styles.inclusiveTitle}>
                            <ImgLoader src={iconInclusive.src} width={12.55} height={12.55} alt="Icon Inclusive" />
                            <span>All-Inclusive</span>
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.item}>Federal Return</li>
                            <li className={styles.item}>State Return</li>
                            <li className={styles.item}>Tax Extension Filing</li>
                            <li className={styles.item}>Expert Help</li>
                        </ul>
                    </div>
                    <button className={styles.btn}>Learn More</button>
                </div>
                <div className={styles.right} style={{ background: `url(${avatar.src})` }}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.userInfo}>
                            <div className={styles.logo}>
                                <ImgLoader src={iconCheck.src} alt="Icon Check" width={14.44} height={14.44} />
                                <p className={styles.logoText}>
                                    FileSmart<sup>TM</sup> <span>Expert</span>
                                </p>
                            </div>
                            <div className={styles.nameSign}>
                                <ImgLoader src={sign.src} alt="Sign" width={121} height={25} />
                                <span className={styles.name}>Samantha G., J.D.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Support Section End */}

            {/* Support Section Responsive Start */}

            <div className={`${styles.stickyInclusive} ${styles.mobShow} ${styles.hide}`}>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>All-Inclusive</h3>
                    <p className={styles.subTitle}>Upgrade to FileSmart Today</p>
                    <ul className={styles.list}>
                        <li>Federal Return</li>
                        <li>State Return</li>
                        <li>Tax Extension Filing</li>
                        <li>Expert Help</li>
                    </ul>
                    <p className={styles.additionalNotes}>
                        <ImgLoader
                            className={styles.arrowDraw}
                            src={iconArrow.src}
                            width={20}
                            height={14}
                            alt="Icon Arrow"
                        />
                        get an <span>additional 6 months to file!</span>
                    </p>
                    <button
                        className={styles.btn}
                        onClick={() =>
                            router.push({
                                pathname: '/'
                            })
                        }
                    >
                        <p className={styles.btnText}>
                            <span className={styles.lg}>Get Started</span>
                            <span className={styles.sm}>No hidden fees</span>
                        </p>
                        <ImgLoader src={iconArrowRight.src} alt="Arrow Right" width={8.75} height={7.75} />
                    </button>
                </div>
                <div className={styles.bgWrapper} style={{ background: `url(${avatarLg.src})` }}>
                    <div className={styles.signWrapper}>
                        <div className={styles.logo}>
                            <ImgLoader src={iconCheck.src} alt="Icon Check" width={18} height={17} />
                            <p>
                                FileSmart<sup>TM</sup> <span>Expert</span>
                            </p>
                        </div>
                        <div className={styles.nameSign}>
                            <ImgLoader src={sign.src} alt="Sign" width={153} height={32} />
                            <span className={styles.name}>Samantha G., J.D.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Support Section Responsive End */}

            {/* Expenses Start */}
            <div className={styles.planInfo}>
                <div className={styles.planTabWrapper}>
                    <h3 className={styles.tabTitle}>Expenses</h3>
                    <p className={styles.tabDesc}>Selected items:</p>
                    <div className={styles.tabs}>
                        {expensesData &&
                            expensesData.map((data, index) => {
                                return (
                                    <span className={`${styles.tab} ${styles.active}`} key={index}>
                                        {data}
                                    </span>
                                );
                            })}
                        <span className={`${styles.tab} ${styles.add}`} onClick={expenseAction}>
                            Add an item +
                        </span>
                    </div>
                    {expensesAccordionData.map((expensesDataOuter: any, index: any) => {
                        if (expensesDataOuter.label !== "I don't have any of these expenses") {
                            return (
                                <ul className={styles.planAcc} key={index}>
                                    <li
                                        className={
                                            activeAccordionExpense !== index
                                                ? `${styles.accItem}`
                                                : `${styles.accItem} ${styles.active}`
                                        }
                                    >
                                        <h4
                                            className={styles.accTitle}
                                            onClick={() => {
                                                manageExpenseAccordion(index);
                                            }}
                                        >
                                            {expensesDataOuter?.label}
                                        </h4>
                                        <div className={styles.accBody}>
                                            <p className={styles.accDesc}>
                                                {expensesDataOuter?.description}then you&apos;re eligible for the
                                                following deductions:
                                            </p>
                                            {expensesDataOuter?.deductions.map((expensesDataInner: any, index: any) => {
                                                return (
                                                    <ul className={styles.innerAcc} key={index}>
                                                        <li
                                                            className={
                                                                activeAccordionInnerExpense !== index
                                                                    ? `${styles.innerAccItem}`
                                                                    : `${styles.innerAccItem} ${styles.active}`
                                                            }
                                                        >
                                                            <h4
                                                                className={styles.innerAccTitle}
                                                                onClick={() => {
                                                                    manageInnerExpenseAccordion(index);
                                                                }}
                                                            >
                                                                {expensesDataInner?.label}
                                                            </h4>
                                                            <div className={styles.innerAccBody}>
                                                                <p>{expensesDataInner?.description}</p>
                                                                <ul className={styles.innerAcc}>
                                                                    <li
                                                                        className={
                                                                            activeInnerAcc
                                                                                ? `${styles.innerAccItem}`
                                                                                : `${styles.innerAccItem} ${styles.active}`
                                                                        }
                                                                    >
                                                                        <h4
                                                                            className={styles.innerAccTitle}
                                                                            onClick={() =>
                                                                                setActiveInnerAcc(!activeInnerAcc)
                                                                            }
                                                                        >
                                                                            How to claim this deduction
                                                                        </h4>
                                                                        <div className={styles.innerAccBody}>
                                                                            <p>{expensesDataInner?.instruction}</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                );
                                            })}
                                        </div>
                                    </li>
                                </ul>
                            );
                        } else {
                            return (
                                <p key={index}>
                                    It`&apos;`s impossible for us to tell which tax deductions you can claim without
                                    knowing at least one income source and/or expenses. Click the button below to
                                    restart the quiz.{' '}
                                </p>
                            );
                        }
                    })}
                </div>
            </div>
            {/* Expenses End */}

            <div className={styles.qna}>
                <ul className={styles.qnaLists}>
                    <li className={styles.qnaItem}>
                        <h4 className={styles.qnaTitle}>What&apos;s Next?</h4>
                        <div className={styles.qnaAns}>
                            <p>
                                Now that you know what deductions you can take, you should decide if you want to file
                                your return by the due date, or file for a 6-month extension of time. The more time you
                                have to prepare, the more money you can potentially save.
                            </p>
                        </div>
                    </li>
                    <li className={styles.qnaItem}>
                        <h4 className={styles.qnaTitle}>Where do I file an Extension?</h4>
                        <div className={styles.qnaAns}>
                            <p>
                                You can file for a 6-month extension through FileSmart. <Link href="/">Click here</Link>{' '}
                                to start.
                            </p>
                        </div>
                    </li>
                    <li className={styles.qnaItem}>
                        <h4 className={styles.qnaTitle}>How do I file my tax Return?</h4>
                        <div className={styles.qnaAns}>
                            <p>
                                If you’re ready to file your tax return now, simply <Link href="/">click here</Link>.
                                Starting at only $9.95, you get access to our tax-filing software that makes it easy for
                                you to file your own return. If you need additional help, you can ask our team of tax
                                experts up to 5 questions/month (all included with your membership).
                            </p>
                        </div>
                    </li>
                    <li className={styles.qnaItem}>
                        <h4 className={styles.qnaTitle}>What if I want to file both?</h4>
                        <div className={styles.qnaAns}>
                            <p>
                                You can file for a tax extension and then file your tax return when you’re ready. Both
                                services are included when you sign up for FileSmart. You also get access to our team of
                                tax experts (ask up to 5 questions/month), PLUS our course library where you can get
                                detailed explanations to frequently-asked tax questions, and learn tax and money-saving
                                tips and tools.
                                <span className={styles.getStarted}>
                                    <Link href="/">Click here to get started.</Link>
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
                <div className={styles.qnaNote}>
                    Please note that <a href="/">FileSmart.tax</a> & associated sites guarantees neither the accuracy
                    nor completeness of any information and is not responsible for any errors or omissions, or for
                    results obtained by others as a result of reliance upon such information. Our site and any responses
                    from our software or representatives are not intended to provide legal, tax or accounting advice,
                    and you are advised to consult your tax advisor for any specific advice.
                </div>
            </div>
        </div>
    );
};
