'use client';
import type { NextComponentType, NextPageContext } from 'next';
import List from '../ui/UnorderedList';
import styles from './Nav.module.scss'
import { ILinks } from '@/types';
import { useTranslations } from 'next-intl';

interface Props {}

const Nav: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const t = useTranslations('Header');
    const nav: ILinks[] = [
        {
            name: t('main'),
            link: '/'
        },
        {
            name: t('reservation'),
            link: '/equipment'
        },
        {
            name: t('rules'),
            link: '/reservation'
        },
        {
            name: t('contact'),
            link: '/rules'
        },
    ];
    return (
        <nav>
            <List items={nav} outStylesList={styles.list}/>
        </nav>
    );
};

export default Nav;
