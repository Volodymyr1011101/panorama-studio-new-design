import type { NextComponentType, NextPageContext } from 'next';

interface Props {
    title: string;
    image: React.ReactNode;
    text: string;
}

const Backgrounds: NextComponentType<NextPageContext, {}, Props> = ({ title, image, text }: Props) => {
    return (
        <div className="flex flex-col md:flex-row max-w-[1100px] gap-4 items-center">
            <div className="flex flex-col gap-4 w-[100%] md:w-[50%] text-black">
                <h3 className="text-3xl">{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} className="flex flex-col gap-3"></div>
            </div>
            <div className="w-[100%] md:w-[50%]">{image}</div>
        </div>
    );
};

export default Backgrounds;
