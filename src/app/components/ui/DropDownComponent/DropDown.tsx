'use client';

import { useState, useRef, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import { ILinks } from '@/types';
import { useTranslations } from 'next-intl';
import styles from '@/app/components/Navigation/Nav.module.scss';
import Image from 'next/image';

export default function Dropdown({ items, closeMenu }: { items: ILinks[]; closeMenu: (value: SetStateAction<boolean>) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const t = useTranslations('Header');
    useEffect(() => {
        //@ts-ignore
        function handleClickOutside(event) {
            //@ts-ignore
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleClick = () => {
        setIsOpen(false);
        closeMenu(false);
    };

    return (
        <li className={`relative m-auto ${styles.list}`} ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className=" text-black flex items-center gap-1">
                {t('rooms')}
                <Image src={'/images/svg/arrow-dropdown.svg'} alt={'arrow-dropdown'} width={10} height={10} className={`${isOpen ? 'rotate-[180deg]' : ''}`} />
            </button>
            {isOpen && (
                <div
                    className={`text-center md:text-left md:absolute left-0 md:mt-8 w-48 md:bg-white md:border md:border-gray-200 rounded-lg md:shadow-lg z-[1000] backdrop-blur-lg`}
                >
                    {items.map((item, index) => (
                        <Link
                            href={item.link}
                            className={`block px-4 py-2 min-h-0 text-gray-800 hover:bg-gray-100`}
                            onClick={handleClick}
                            key={index + item.link}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </li>
    );
}
