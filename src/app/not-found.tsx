'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/'); // Перенаправление на главную через 5 секунд
        }, 5000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-4">Страница не найдена</p>
            <p className="mt-2 text-gray-500">Вы будете перенаправлены на главную через 5 секунд.</p>
            <Link href="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFoundPage;
