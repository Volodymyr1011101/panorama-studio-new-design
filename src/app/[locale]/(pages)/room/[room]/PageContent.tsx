'use client';
import Image from 'next/image';
import Gallery from '@/app/components/ui/Gallery';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import { useTranslations } from 'next-intl';
import { AQUA_DARK, AQUA_LIGHT, ART, DEFAULT, WHITE } from '@/app/[locale]/(pages)/room/[room]/enums';
import { useEffect, useState } from 'react';
import { equipmentListAquaDark, equipmentListAquaLight, equipmentListArt, equipmentListWhite } from '@/app/[locale]/(pages)/room/[room]/data';

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
    const equipmentListObject = {
        white: equipmentListWhite,
        art: equipmentListArt,
        aqua_dark: equipmentListAquaDark,
        aqua_light: equipmentListAquaLight
    };
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

        setTimeout(() => {
            setLoad(false);
        }, 300);
    }, []);
    return (
        <>
            <div className={`pt-[80px] md:pt-0 px-4 relative tracking-[1px] text-[20px]`}>
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
                        className={`px-6 py-2 text-white bg-[#5bc0f0] w-fit rounded-2xl flex mx-auto hover:scale-[1.05] transition text-[20px] tracking-[1px]`}
                    >
                        {t(`Header.reservation`)}
                    </Link>
                </div>
                <p className={`mb-8 text-[20px] `}>{t('add_info_session')}</p>

                <div className={`mb-8`}>
                    <Gallery images={galleryImages} />
                </div>

                <div className={`md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-[19px] flex flex-col md:flex-row mb-8`}>
                    <div className={`flex flex-col items-center w-full md:w-[35%] justify-center`}>
                        {equipmentImages?.length ? (
                            <Image
                                src={enumObject.EQUIPMENT}
                                width={327}
                                height={405}
                                alt={'equipment photo'}
                                className={`rounded-2xl max-h-[409px] object-cover`}
                            />
                        ) : (
                            <PropagateLoader />
                        )}
                    </div>
                    <div className={`m-auto w-[66%] flex flex-col items-center leading-[24px] pt-8 md:pt-0`}>
                        <h2 className={`text-[30px] border-b-[1px] border-[black] mb-4`}>{t('equipment')}</h2>
                        <ul>
                            {
                                //@ts-ignore
                                equipmentListObject[roomSlug].map(item => (
                                    <li key={item}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div
                    className={`h-full md:h-[200px] md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-[19px] flex flex-col justify-between md:flex-row mb-8 items-center overflow-hidden `}
                >
                    <div className={`flex flex-col items-center w-full md:w-[35%] justify-center`}>
                        <div className={`rounded-2xl overflow-hidden md:max-h-[200px] `}>
                            <Image
                                src={'/images/images/backgrounds.webp'}
                                width={327}
                                height={269}
                                alt={'equipment photo'}
                                className={`rounded-2xl w-full rounded-2xl relative top-[-55px]`}
                            />
                        </div>
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
