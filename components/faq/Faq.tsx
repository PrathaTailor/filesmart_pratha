import { useState } from 'react';
import styles from './faq.module.scss';
import Link from 'next/link';
interface FAQ {
    question: string;
    answer: string;
}

export const Faq = (props: { faqs: FAQ[]; title: string }) => {
    const { faqs = [], title } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.faqLists}>
                    {faqs.map((data: FAQ, index: number) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                id="accordion"
                                key={index}
                                className={`${styles.faqItem}  ${isActive ? `${styles.active}` : ''} `}
                                onClick={() => (isActive ? setActiveIndex(0) : setActiveIndex(index))}
                            >
                                <div className={styles.faqTitle}>
                                    <Link href="#accordion">{data.question}</Link>
                                </div>
                                <div
                                    className={styles.faqBody}
                                    dangerouslySetInnerHTML={{
                                        __html: data.answer
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
