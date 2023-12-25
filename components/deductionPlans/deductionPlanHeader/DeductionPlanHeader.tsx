import styles from './deductionPlanHeader.module.scss';
import ImgLoader from '@components/ImgLoader';
import logo from '../../../images/assets/logo.png';
import Link from 'next/link';

export const DeductionPlanHeader = () => {
    return (
        <div>
            <Link href="/">
                <ImgLoader className={styles.logo} src={logo.src} height={84} width={84} alt="Logo" />
            </Link>
            <div>
                <p>DEDUCTION PLAN</p>
            </div>
        </div>
    );
};
