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
    }, []);
    return (
        <div>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare]} elementClassNames={'gallery'}>
                {images?.map((src, i) => (
                    <a href={src} key={i} className="gallery__item">
                        <img alt="img1" src={src} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}
