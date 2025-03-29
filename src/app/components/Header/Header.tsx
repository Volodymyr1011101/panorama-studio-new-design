'use client';
import { imageConfig } from '@/lib/imageConfig';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
//@ts-ignore
import Navigation from '../Navigation';
import BurgerButton from '../ui/burgerButton/BurgerButton';
import LanguageSwitcher from '../ui/LangSwitcher.tsx/LanguageSwitcher';
import styles from './Header.module.scss';

interface Props {}

const Header: NextComponentType<NextPageContext, {}, Props> = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const handleClick = () => {
        setIsShowMenu(!isShowMenu);
    };
    return (
        <header className={`${styles.header} ${isShowMenu ? styles.showMenu : ''} `}>
            {!isShowMenu ? (
                <div className={`absolute top-[420px] right-0 p-4 items-center justify-between w-full ${styles.headerTop}`}>
                    <Link href={'/'} className={styles.logo}>
                        <Image {...imageConfig.logo} />
                    </Link>
                    <BurgerButton isActive={isShowMenu} handleClick={handleClick} />
                </div>
            ) : null}
            <button className={styles.closeButton} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px">
                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
                </svg>
            </button>
            <Link href={'/'} className={styles.logo}>
                <Image {...imageConfig.logo} />
            </Link>
            <Navigation closeMenu={setIsShowMenu} />
            <LanguageSwitcher />
        </header>
    );
};

export default Header;
