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
            link: '/reservation'
        },
        {
            name: t('rules'),
            link: '/rules'
        },
        {
            name: t('contact'),
            link: '/contact-us'
        },
    ];
    return (
        <nav>
            <List items={nav} outStylesList={styles.list}/>
        </nav>
    );
};

export default Nav;
