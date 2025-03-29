'use client';
import Image from 'next/image';
import Gallery from '@/app/components/ui/Gallery';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import { equipmentList } from '@/app/[locale]/(pages)/room/[room]/data';
import { useTranslations } from 'next-intl';
import { AQUA_DARK, AQUA_LIGHT, ART, DEFAULT, WHITE } from '@/app/[locale]/(pages)/room/[room]/enums';
import { useEffect, useState } from 'react';

interface Props {
    roomSlug: string;
    galleryImages: string[] | null;
    equipmentImages: string[] | null;
}
const PageContent = ({ roomSlug, galleryImages, equipmentImages }: Props) => {
    const t = useTranslations();
    const [enumObject, setEnumObject] = useState<any>(DEFAULT);
    const [random, setRandom] = useState<number>(0);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        switch (roomSlug) {
            case 'white':
                setEnumObject(WHITE);
                break;
            case 'art':
                setEnumObject(ART);
                break;
            case 'aqua_dark':
                setEnumObject(AQUA_DARK);
                break;
            case 'aqua_light':
                setEnumObject(AQUA_LIGHT);
                break;
            default:
                setEnumObject(DEFAULT);
        }
        const randomNumber = Math.floor(Math.random() * 10);
        setRandom(randomNumber);
        setTimeout(() => {
            setLoad(false);
        }, 300);
    }, []);
    return (
        <>
            <div className={`pt-[80px] md:pt-0 px-4 relative`}>
                {load && (
                    <div className={`bg-white fixed  h-[100vh] left-0 right-0 flex items-center justify-center z-[100]`}>
                        <PropagateLoader />
                    </div>
                )}
                {enumObject !== null ? (
                    <Image src={enumObject.HEADER_IMAGE} alt={'main_photo'} width={980} height={317} className={`rounded-2xl mb-8`} />
                ) : (
                    <PropagateLoader />
                )}
                <h1 className={'text-center text-[36px]'}>{t(`Rooms.${roomSlug}`)}</h1>
                {t(`Rooms.${roomSlug}_description`)
                    .split('//')
                    .map(line => (
                        <p key={line} className={`text-[20px]`}>
                            {line}
                        </p>
                    ))}
                <div className={`py-8`}>
                    <Link
                        href={`/reservation`}
                        className={`px-6 py-2 text-white bg-[#5bc0f0] w-fit rounded-2xl flex mx-auto hover:scale-[1.05] transition text-[20px]`}
                    >
                        {t(`Header.reservation`)}
                    </Link>
                </div>
                <p className={`mb-8 text-[18px]`}>{t('add_info_session')}</p>

                <div className={`mb-8`}>
                    <Gallery images={galleryImages} />
                </div>

                <div className={`md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-2xl flex flex-col md:flex-row mb-8`}>
                    <div className={`flex flex-col items-center w-full md:w-[35%] justify-center`}>
                        {equipmentImages?.length ? (
                            <Image src={equipmentImages[random]} width={327} height={405} alt={'equipment photo'} className={`rounded-2xl`} />
                        ) : (
                            <PropagateLoader />
                        )}
                    </div>
                    <div className={`m-auto w-[66%] flex flex-col items-center `}>
                        <h2 className={`text-[30px] border-b-[1px] border-[black] mb-4`}>{t('equipment')}</h2>
                        <ul>
                            {equipmentList.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div
                    className={`md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-2xl flex flex-col justify-between md:flex-row mb-8`}
                >
                    <div className={`flex flex-col items-center w-full md:w-[35%] justify-center`}>
                        <Image src={'/images/images/backgrounds.webp'} width={327} height={269} alt={'equipment photo'} className={`rounded-2xl`} />
                    </div>
                    <div className={`w-full md:w-[60%] flex flex-col items-center `}>
                        <h2 className={`text-[30px] border-b-[1px] border-[black] mb-4`}>{t('backgrounds_title')}</h2>
                        <p>{t('backgrounds_description')}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageContent;
