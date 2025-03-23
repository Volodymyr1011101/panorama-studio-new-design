'use client';
import type { NextComponentType, NextPageContext } from 'next';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import styles from './Hero.module.scss';
interface Props { }

const Hero: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const container = useRef<HTMLDivElement | null>(null);
    const t = useTranslations('Hero');
    return (
        <>
            <div className={styles.heroText} ref={container}>
                {/* <Image {...imageConfig.backgroundMain} className={styles.mainBg} /> */}
                <div className={``}>
                    <h1 className='text-[#5BC0F0] text-[52px] flex justify-center pt-12 pl-4 sm:pl-0'>PANORAMA STUDIO</h1>
                </div>
                <div className='flex align-center justify-end pr-[10%]'>
                    <p className='text-[white] text-[24px] italic text-6 pl-4'>{t('subtitle')}</p>
                </div>
                <div className='flex align-center justify-start pt-12 text-white text-4 max-w-[90%] sm:max-w-[60%] lg:max-w-[30%]  pl-4 pb-[40px] lg:pb-[80px] lg:pt-[100px]'>
                    <p>{t('description')}</p>
                </div>
            </div>
        </>
    );
};

export default Hero;
