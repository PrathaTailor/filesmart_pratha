import styles from './quizIntro.module.scss';
import ImgLoader from '@components/ImgLoader';
import Image from 'next/image';
import ImageObj from '@utils/interfaces';
import { useRouter } from 'next/router';

interface QuizIntro {
    title: string;
    subTitle: string;
    btnText: string;
    iconArrow: ImageObj;
    backgroundImage: ImageObj;
    backgroundImageTitle: string;
    backgroundImageSubtitle: string;
}

export const QuizIntro = (props: { quizIntro: QuizIntro }) => {
    const { quizIntro } = props;
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.block}>
                    <h2 className={styles.title}>{quizIntro.title}</h2>
                    <p>{quizIntro.subTitle}</p>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/quiz-step1'
                                },
                                '/quiz-step1'
                            );
                        }}
                    >
                        <span className={styles.btnText}>{quizIntro.btnText}</span>{' '}
                        <ImgLoader src={quizIntro.iconArrow.src} alt="Icon Arrow" width={13} height={13} />
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <Image
                    className={styles.banner}
                    src={quizIntro.backgroundImage.src}
                    alt="Quiz Banner"
                    width={690}
                    height={1080}
                />
                <div className={styles.box}>
                    <p>{quizIntro.backgroundImageTitle}</p>
                    <span className={styles.yellowTxt}>{quizIntro.backgroundImageSubtitle}</span>
                </div>
            </div>
        </div>
    );
};
