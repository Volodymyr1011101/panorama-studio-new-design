import { ILinks } from '@/types';
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';
import { SetStateAction } from 'react';
import Dropdown from '@/app/components/ui/DropDownComponent/DropDown';

interface Props {
    items: ILinks[];
    outStylesItem?: string;
    outStylesList?: string;
    closeMenu: (value: SetStateAction<boolean>) => void;
}

const UnorderedList: NextComponentType<NextPageContext, {}, Props> = ({ items, outStylesItem, outStylesList, closeMenu }: Props) => {
    return (
        <ul className={outStylesList}>
            {items.map((link, index) =>
                link.children ? (
                    <Dropdown items={link.children} key={link.name + index} closeMenu={closeMenu} />
                ) : (
                    <li className={outStylesItem} key={link.name + index}>
                        {
                            //@ts-ignore
                            <Link href={link.link} onClick={() => closeMenu(false)} className={`text-[20px] tracking-[1px]`}>
                                {link.name}
                            </Link>
                        }
                    </li>
                )
            )}
        </ul>
    );
};

export default UnorderedList;
