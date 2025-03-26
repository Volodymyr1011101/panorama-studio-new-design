'use client';
import LightGallery from 'lightgallery/react';
//@ts-ignore
import fjGallery from 'flickr-justified-gallery';
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
import { images, images2 } from '@/app/[locale]/(pages)/mock_images';
import { useEffect } from 'react';

export default function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 180,
            lastRow: 'start',
            gutter: 2,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false
        });
    }, []);
    return (
        <div className="App">
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare]} elementClassNames={'gallery'}>
                {images2.map((src, i) => (
                    <a href={src} key={i} className="gallery__item">
                        <img alt="img1" src={src} />
                    </a>
                ))}
            </LightGallery>
        </div>
    );
}
