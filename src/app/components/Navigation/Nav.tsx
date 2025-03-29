'use client';
import type { NextComponentType, NextPageContext } from 'next';
import List from '../ui/UnorderedList';
import styles from './Nav.module.scss';
import { ILinks } from '@/types';
import { useTranslations } from 'next-intl';
import { SetStateAction } from 'react';
import Dropdown from '@/app/components/ui/DropDownComponent/DropDown';

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
            name: t('rooms'),
            link: '/',
            children: [
                {
                    name: t('white'),
                    link: '/room/white'
                },
                {
                    name: t('art'),
                    link: '/room/art'
                },
                {
                    name: t('aqua_light'),
                    link: '/room/aqua_light'
                },
                {
                    name: t('aqua_dark'),
                    link: '/room/aqua_dark'
                },
                {
                    name: t('make_up'),
                    link: '/room/make_up'
                }
            ]
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
