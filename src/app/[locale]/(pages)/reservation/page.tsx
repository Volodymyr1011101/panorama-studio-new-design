'use client'

import type { NextComponentType, NextPageContext } from 'next';
import Bookero from "@/app/components/Bookero/Bookero";
import { useLocale } from 'next-intl';
import './styles.scss';
interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const locale = useLocale();
    return <div className="flex items-center justify-center text-white pt-">
        <Bookero locale={locale}/>
    </div>;
};

export default Page;
