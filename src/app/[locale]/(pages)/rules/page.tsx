import type { NextComponentType, NextPageContext } from 'next';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    return <div className="bg-black h-[100vh] flex items-center justify-center text-white">rules</div>;
};

export default Page;
