'use client';
import type { NextComponentType, NextPageContext } from 'next';
import styles from './burderButton.module.scss';

interface Props {
    isActive: boolean;
    handleClick: () => void;
}

const BurgerButton: NextComponentType<NextPageContext, {}, Props> = ({ isActive, handleClick }: Props) => {
    return (
        <div className={`${styles.burger} ${isActive ? styles.active : ''}`} onClick={handleClick}>
            <span className={`${styles.top} ${styles.line}`}></span>
            <span className={`${styles.middle} ${styles.line}`}></span>
            <span className={`${styles.bottom} ${styles.line}`}></span>
        </div>
    );
};

export default BurgerButton;
