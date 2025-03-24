'use client';
import { imageConfig } from '@/lib/imageConfig';
import { IIMage } from '@/types';
import type { NextComponentType, NextPageContext } from 'next';
import ButtonComponent from '../ui/Button';
import Room from '../ui/Room/Room';
import styles from './Rooms.module.scss';
import { useTranslations } from 'next-intl';
interface Props {}

interface IRooms {
    image: IIMage;
    roomName: string;
    pricePerOur: number;
    additionalPrice?: number;
    navigation: string;
}

const Rooms: NextComponentType<NextPageContext, {}, Props> = (props: Props) => {
    const t = useTranslations('Rooms');
    const rooms: IRooms[] = [
        {
            image: { ...imageConfig.white },
            roomName: t('white'),
            pricePerOur: 130,
            navigation: 'white'
        },
        {
            image: { ...imageConfig.art },
            roomName: t('art'),
            pricePerOur: 130,
            navigation: 'art'
        },
        {
            image: { ...imageConfig.aquaLight },
            roomName: t('aqua_light'),
            pricePerOur: 300,
            additionalPrice: 150,
            navigation: 'aqua_light'
        },
        {
            image: { ...imageConfig.aquaBlack },
            roomName: t('aqua_dark'),
            pricePerOur: 300,
            additionalPrice: 150,
            navigation: 'aqua_dark'
        },
        {
            image: { ...imageConfig.makeUp },
            roomName: t('make_up'),
            pricePerOur: 20,
            navigation: 'make_up'
        }
    ];
    return (
        <>
            <div className={styles.title}>
                <h2>rooms</h2>
            </div>
            <div className={styles.rooms}>
                {rooms.map(room => (
                    <div className={styles['flip-container']} key={room.image.src + room.image.width}>
                        <div className={styles.flipper}>
                            <div className={styles.front}>
                                <Room image={room.image} roomName={room.roomName} navigation={`/room/${room.navigation}`} />
                            </div>
                            {/*<div className={styles.back}>*/}
                            {/*    <div className="text-white text-center">*/}
                            {/*        <p>*/}
                            {/*            {room.pricePerOur}zł/{'hour'}*/}
                            {/*        </p>*/}
                            {/*        {room.additionalPrice && <p className=" max-w-[200px]">{room.additionalPrice + 'zł' + ' ' + 'nextHour'}</p>}*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.buttons}>*/}
                            {/*        <ButtonComponent text={'details'} event={() => console.log(111)} />*/}
                            {/*        <ButtonComponent text={'reservation'} event={() => console.log(111)} />*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Rooms;
