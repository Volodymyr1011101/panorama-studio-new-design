'use client';
import type { NextComponentType, NextPageContext } from 'next';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
interface Props {
    body: HTMLBodyElement | null;
    bodyBg: HTMLDivElement | null;
}
import Image from 'next/image';
import Link from 'next/link';

const Hero: NextComponentType<NextPageContext, {}> = () => {
    const container = useRef<HTMLDivElement | null>(null);
    const t = useTranslations('Hero');
    const [isShow, setIsShow] = useState(false);
    const [elements, setElements] = useState<Props>({
        body: null,
        bodyBg: null
    });
    const showAdvertising = (isOpen: boolean, bodyElement: HTMLBodyElement | null, bodyLayout: HTMLDivElement | null) => {
        if (isOpen) {
            bodyElement!.style.overflow = 'hidden';
            bodyLayout!.style.display = 'block';
            setIsShow(isOpen);
        } else {
            bodyElement!.style.overflow = 'scroll';
            bodyLayout!.style.display = 'none';
            setIsShow(isOpen);
        }
    };
    useEffect(() => {
        const body: HTMLBodyElement | null = document.querySelector('body');
        const bodyBg: HTMLDivElement | null = document.querySelector('.body-bg');
        setElements({ body, bodyBg });
        const showPromotion = sessionStorage.getItem('promotion');

        const timeOut = setTimeout(() => {
            if (JSON.parse(showPromotion!)) {
                showAdvertising(true, body, bodyBg);
                sessionStorage.setItem('promotion', 'false');
            }
        }, 3000);
        return () => {
            clearTimeout(timeOut);
            showAdvertising(false, body, bodyBg);
        };
    }, []);
    return (
        <>
            {isShow ? (
                <div
                    className={`fixed backdrop-blur-sm w-[95%] md:w-[80%] lg:w-[60%] md:max-w-[900px] min-h-[500px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#00000070] z-[99999] rounded-[8px] related p-4`}
                >
                    <button className={`w-[50px] h-[50px] absolute right-2 top-2`} onClick={() => showAdvertising(false, elements.body, elements.bodyBg)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%" height="50px" fill={'#fff'}>
                            <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z" />
                        </svg>
                    </button>
                    <h1 className={`text-[#5bc0f0] text-[46px] text-center mb-8`}>{t('Promotion.title')}</h1>
                    <div className={`flex justify-center gap-2 sm:gap-8 mb-4`}>
                        <Image
                            src={'/images/images/White27.jpg'}
                            width={200}
                            height={266}
                            alt={'white'}
                            className={`rounded-[8px] w-[130px] sm:w-[160px] md:w-[200px] h-auto`}
                        />

                        <span className={`text-[#fff] text-[50px] font-bold my-auto w-[30px]`}>+</span>

                        <Image
                            src={'/images/images/art20.JPG'}
                            width={200}
                            height={266}
                            alt={'white'}
                            className={`rounded-[8px] w-[130px] sm:w-[160px] md:w-[200px] h-auto`}
                        />
                    </div>
                    <div className={`px-4`}>
                        <p className={`text-[20px] text-[#fff] lg:text-[34px] tracking-[1px] mb-4`}>{t('Promotion.description')}</p>
                    </div>
                    <Link
                        href={`/reservation`}
                        className={`px-4 py-2 text-white bg-[#5bc0f0] w-fit rounded-2xl flex mx-auto hover:scale-[1.05] transition text-[25px] tracking-[1px]`}
                    >
                        {t(`reservation`)}
                    </Link>
                </div>
            ) : null}
            <div className={`${styles.heroText} h-[220px] md:h-[initial]`} ref={container}>
                {/* <Image {...imageConfig.backgroundMain} className={styles.mainBg} /> */}
                <div className={`${styles.wrapper}`}>
                    <h1 className="text-[#5BC0F0]  flex justify-center pt-12 pl-4 sm:pl-0">PANORAMA STUDIO</h1>
                </div>
                <div className="hidden md:flex align-center justify-end pr-[10%]">
                    <p className="text-[white] text-[24px] italic text-6 pl-4 leading-[0.2px]">{t('subtitle')}</p>
                </div>
                <div className="hidden md:block flex align-center justify-start pt-12 text-white text-4 max-w-[90%] sm:max-w-[60%] lg:max-w-[40%]  pl-4 pb-[40px] lg:pb-[80px] lg:pt-[40px]">
                    <p className={`text-[18px] tracking-[1px]`}>{t('description')}</p>
                </div>
            </div>
        </>
    );
};

export default Hero;
