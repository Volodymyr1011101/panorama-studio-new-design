'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
const languages = [
    { code: 'ua', label: 'Укр', flag: '/UA.png' },
    { code: 'pl', label: 'Pol', flag: '/PL.png' },
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (newLocale: string) => {
        const newPath = `/${newLocale}/${pathname.replace(/^\/[a-z]{0}/, '')}`;
        router.push(newPath, {scroll: false});
        setIsOpen(false);
    };

    return (
        <div className="relative ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={` ${isOpen ? 'bg-[white]' : 'bg-[white]'} flex items-center gap-2  text-black px-4 py-2 rounded-lg shadow-md hover:bg-[white] transition`}
            >
                <Image src={languages.find(l => l.code === locale)?.flag || ''} alt="flag" width={24} height={16} />
                <span>{languages.find(l => l.code === locale)?.label}</span>
                <span className="ml-2">▾</span>
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-[white] shadow-lg rounded-lg overflow-hidden z-[100]">
                    {languages
                        .filter(lang => lang.code !== locale)
                        .map(lang => (
                            <button
                                key={lang.code}
                                onClick={() => handleChange(lang.code)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-black hover:bg-[#D9D9D90D] transition"
                            >
                                <Image src={lang.flag} alt="flag" width={24} height={16} />
                                <span>{lang.label}</span>
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
}
