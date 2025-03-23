'use client';
import { useEffect } from 'react';

const Bookero = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            (window as any).bookero_config = {
                id: 'pqSCCd2iS6fs',
                container: 'bookero',
                type: 'calendar',
                position: '',
                plugin_css: true,
                lang: 'pl',
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
    }, []);

    return <div id="bookero"></div>;
};

export default Bookero;
