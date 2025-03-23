import { ILinks } from '@/types'
import type { NextComponentType, NextPageContext } from 'next';
import Link from 'next/link';



interface Props {
    items: ILinks[];
    outStylesItem?: string;
    outStylesList?: string;
}

const UnorderedList: NextComponentType<NextPageContext, {}, Props> = ({ items, outStylesItem, outStylesList }: Props) => {
    return (
        <ul className={outStylesList}>
            {items.map((link, index) => (
                <li className={outStylesItem} key={link.name + index}>
                    <Link href={link.link}> {link.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default UnorderedList;
