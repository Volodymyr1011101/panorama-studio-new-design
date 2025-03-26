'use client';
import LightGallery from 'lightgallery/react';
//@ts-ignore
// import fjGallery from 'flickr-justified-gallery';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lightgallery-core.css';
import 'lightgallery/css/lightgallery-bundle.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

export default function Gallery({ images }: { images: string[] }) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const [showImagesCount, setShowImagesCount] = useState<number>(12);
    const [fjGallery, setFjGallery] = useState<any>(null);
    useEffect(() => {
        //@ts-ignore
        import('flickr-justified-gallery')
            .then(mod => {
                setFjGallery(() => mod.default); // Загружаем fjGallery только в браузере
                const galleryElements = document.querySelectorAll('.gallery');
                if (galleryElements.length) {
                    mod.default(galleryElements, {
                        itemSelector: '.gallery__item',
                        rowHeight: 180,
                        lastRow: 'start',
                        gutter: 2,
                        rowHeightTolerance: 0.1,
                        calculateItemsHeight: false
                    });
                }
            })
            .catch(err => console.error('Ошибка импорта fjGallery:', err));
    }, [showImagesCount]);
    return (
        <div key={showImagesCount}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare]} elementClassNames={'gallery mb-4'}>
                {images?.slice(0, showImagesCount).map((src, i) => (
                    <a href={src} key={i} className="gallery__item">
                        <img alt="img1" src={src} className="rounded-xl" />
                    </a>
                ))}
            </LightGallery>
            {showImagesCount <= images.length && (
                <button
                    onClick={() => setShowImagesCount((prev: number): number => prev + 9)}
                    className={`m-auto block text-black py-2 px-6 rounded-[12px] bg-[#60606042] backdrop-blur-[5px] hover:scale-[1.05] transition`}
                >
                    Show More
                </button>
            )}
        </div>
    );
}
