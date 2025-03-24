import { IIMage } from '@/types';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import styles from './Room.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface Props {
    image: IIMage;
    roomName: string;
    navigation: string;
}

const Room: NextComponentType<NextPageContext, {}, Props> = ({ image, roomName, navigation }: Props) => {
    const t = useTranslations('Rooms');
    return (
        <div className="h-full relative w-full">
            <Link className={`${styles.title} hover:scale-[1.05] transition`} href={navigation}>
                {roomName}
            </Link>
            <Image {...image} className=" object-cover w-full h-full rounded-[8px]" />
            <Link
                href={navigation}
                className={`absolute bottom-4 text-center w-[90%] m-auto left-[5%] text-white py-2 rounded-[12px] bg-[#ffffff42] backdrop-blur-[5px] hover:underline`}
            >
                {t('more')}
            </Link>
        </div>
    );
};

export default Room;
