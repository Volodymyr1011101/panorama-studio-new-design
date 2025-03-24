'use client';
import type { NextComponentType, NextPageContext } from 'next';
import List from '../ui/UnorderedList';
import styles from './Nav.module.scss';
import { ILinks } from '@/types';
import { useTranslations } from 'next-intl';
import { SetStateAction } from 'react';

interface Props {
    closeMenu: (value: SetStateAction<boolean>) => void;
}

const Nav: NextComponentType<NextPageContext, {}, Props> = ({ closeMenu }: Props) => {
    const t = useTranslations('Header');
    const nav: ILinks[] = [
        {
            name: t('main'),
            link: '/'
        },
        {
            name: t('reservation'),
            link: '/reservation'
        },
        {
            name: t('rules'),
            link: '/rules'
        },
        {
            name: t('contact'),
            link: '/contact-us'
        }
    ];
    return (
        <nav>
            <List items={nav} outStylesList={styles.list} closeMenu={closeMenu} />
        </nav>
    );
};

export default Nav;
