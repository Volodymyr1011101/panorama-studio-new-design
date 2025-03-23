import { IIMage } from '@/types';
import type { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image';
import styles from './Room.module.scss';

interface Props {
    image: IIMage;
    roomName: string;
}

const Room: NextComponentType<NextPageContext, {}, Props> = ({ image, roomName }: Props) => {
    return (
        <div className="h-full relative w-full">
            <h4 className={styles.title}>{roomName}</h4>
            <Image {...image} className=" object-cover w-full h-full rounded-[8px]" />
        </div>
    );
};

export default Room;
