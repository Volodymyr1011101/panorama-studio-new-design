'use client';
import { useEffect, useState } from 'react';

const Bookero = ({ locale }: { locale: string }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).bookero_config = {
                id: '0HsRzho4v8IX',
                container: 'bookero',
                type: 'calendar',
                position: '',
                plugin_css: true,
                lang: locale
            };

            const script = document.createElement('script');
            script.src = 'https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js';
            script.async = true;
            script.onload = () => {
                if (typeof (window as any).Bookero === 'function') {
                    (window as any).Bookero();
                }
            };

            document.body.appendChild(script);
        }
    }, [locale]);

    return (
        <>
            <div id="bookero"></div>
        </>
    );
};

export default Bookero;
