import { Loader } from '@components/loader/Loader';
import styles from './redirect.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import iconBlueCheck from '../../images/icons/icon-round-bluecheck.svg';

export const Redirect = () => {
    const [index, setIndex] = useState(0);
    const text = [
        'Just a moment, our taxtech experts are creating your Dashboard...',
        'We are almost there, just one more second...',
        'All set! You will be redirected to your FileSmart dashboard.'
    ];
    useEffect(() => {
        setTimeout(() => {
            index < 2 && setIndex(index + 1);
        }, 5000);
    }, [index]);
    return (
        <div className={styles.container}>
            {index < 3 && (
                <>
                    {index < 2 ? (
                        <Loader />
                    ) : (
                        <Image
                            src={iconBlueCheck.src}
                            height={iconBlueCheck.height}
                            width={iconBlueCheck.width}
                            alt="icon-check"
                        />
                    )}
                    <div>
                        <h4> {text[index]}</h4>
                        {/* <h4>Just a moment, our taxtech experts are creating your Dashboard...</h4> */}
                    </div>
                </>
            )}
        </div>
    );
};
