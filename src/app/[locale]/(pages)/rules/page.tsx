import type { NextComponentType, NextPageContext } from 'next';
import { useTranslations } from 'next-intl';

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const t = useTranslations('Rules');

    const rules = new Array(6).fill(1);
    const renderTextWithLineBreaks = (text: string) => {
        return text.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };
    return (
        <div className={`pt-[90px] md:pt-0 px-4`}>
            <h1 className={`text-center text-[34px] font-[500]`}>{t('title')}</h1>
            <ul className={`text-center`}>
                {rules.map((_, index) => (
                    <li key={t(`nav.${index + 1}`)}>
                        <a href={`#${index + 1}`} className={`hover:underline`}>
                            {t(`nav.${index + 1}`)}
                        </a>
                    </li>
                ))}
            </ul>
            {rules.map((_, index) => (
                <div id={`${index + 1}`} key={t(`rules.${index + 1}.title`)}>
                    <h2 className={`font-bold mb-4 pt-4`}>{t(`rules.${index + 1}.title`)}</h2>
                    <p className={`pl-4`}>{renderTextWithLineBreaks(t(`rules.${index + 1}.description`))}</p>
                </div>
            ))}
        </div>
    );
};

export default Page;
