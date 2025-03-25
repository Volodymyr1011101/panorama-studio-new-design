'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { AQUA_DARK, AQUA_LIGHT, ART, WHITE } from '@/app/[locale]/(pages)/room/[room]/enums';
import { useTranslations } from 'next-intl';
import Gallery from '@/app/components/ui/Gallery';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getImages } from '@/helpers';
import { ref } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { PropagateLoader } from 'react-spinners';
import { equipmentList } from '@/app/[locale]/(pages)/room/[room]/data';
import NotFoundPage from '@/app/[locale]/(pages)/not-found';

const Room = () => {
    const router = useRouter();
    const t = useTranslations();
    const { room } = useParams();

    const [roomData, setRoomData] = useState<any>(null);
    const [equipmentImages, setEquipmentImages] = useState<string[] | []>([]);

    const randomNumber = Math.floor(Math.random() * 10);
    const listRef = ref(storage, 'equipment');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const images = await getImages(listRef);
                setEquipmentImages(images);
            } catch (error) {
                console.error('Ошибка загрузки изображений:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        switch (room) {
            case 'white':
                setRoomData(WHITE);
                break;
            case 'art':
                setRoomData(ART);
                break;
            case 'aqua_dark':
                setRoomData(AQUA_DARK);
                break;
            case 'aqua_light':
                setRoomData(AQUA_LIGHT);
                break;
            default:
                return;
        }
    }, [room, router]);

    if (!roomData) return <NotFoundPage />; // Пока нет данных, ничего не рендерим

    return (
        <div className={`pt-[80px] md:pt-0 px-4`}>
            <Image src={roomData.HEADER_IMAGE} alt={'main_photo'} width={980} height={317} className={`rounded-2xl mb-8`} />
            <h1 className={'text-center text-[30px]'}>{t(`Rooms.${room}`)}</h1>
            {t(`Rooms.${room}_description`)
                .split('//')
                .map((line, i) => (
                    <p key={line}>{line}</p>
                ))}
            <div className={`mb-8 pt-8`}>
                <Gallery bd_path={room as string} />
            </div>
            <Link href={`/reservation`} className={`px-8 py-4 text-white bg-[#454545] w-fit rounded-2xl flex mx-auto hover:scale-[1.05] transition mb-8`}>
                {t(`Header.reservation`)}
            </Link>
            <div className={`md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-2xl flex flex-col md:flex-row mb-8`}>
                <div className={`flex flex-col items-center w-full md:w-[30%] justify-center`}>
                    {equipmentImages.length ? (
                        <Image src={equipmentImages[randomNumber]} width={327} height={405} alt={'equipment photo'} className={`rounded-2xl`} />
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
            <p className={`mb-8`}>{t('add_info_session')}</p>

            <div className={`md:border-t-[1px] border-b-[0px] md:border-b-[1px] border-[black] rounded-l-2xl flex flex-col justify-between md:flex-row mb-8`}>
                <div className={`flex flex-col items-center w-full md:w-[30%] justify-center`}>
                    {equipmentImages.length ? (
                        <Image src={'/images/images/backgrounds.webp'} width={327} height={405} alt={'equipment photo'} className={`rounded-2xl`} />
                    ) : (
                        <PropagateLoader />
                    )}
                </div>
                <div className={`w-full md:w-[66%] flex flex-col items-center `}>
                    <h2 className={`text-[30px] border-b-[1px] border-[black] mb-4`}>{t('backgrounds_title')}</h2>
                    <p>{t('backgrounds_description')}</p>
                </div>
            </div>
        </div>
    );
};

export default Room;
