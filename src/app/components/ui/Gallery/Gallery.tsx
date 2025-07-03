'use client';

import 'yet-another-react-lightbox/styles.css';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Lightbox from 'yet-another-react-lightbox';
import { images2 } from '@/app/[locale]/(pages)/mock_images';
import Image from 'next/image';

export default function Gallery({ images, header }: { images: string[] | null; header?: string }) {
    const [index, setIndex] = useState(-1);
    const [fjGalleryLoaded, setFjGalleryLoaded] = useState(false);
    const t = useTranslations();
    const [showImagesCount, setShowImagesCount] = useState<number>(18);

    const getImages = (images: string[] | null): { src: string }[] => {
        if (images === null) {
            return images2.map(item => ({ src: item }));
        }
        return images.map(item => ({ src: item }));
    };

    const galleryImages = getImages(images);

    useEffect(() => {
        const loadGallery = async () => {
            if (typeof window === 'undefined') return;
            //@ts-ignore
            const module = await import('flickr-justified-gallery');
            module.default(document.querySelectorAll('.gallery'), {
                itemSelector: '.gallery__item',
                rowHeight: 180,
                lastRow: 'start',
                gutter: 2,
                rowHeightTolerance: 0.1,
                calculateItemsHeight: false
            });
            setFjGalleryLoaded(true);
        };

        loadGallery();
    }, [showImagesCount]);

    return (
        <div key={showImagesCount}>
            {header && <h2 className="text-[36px] text-center mb-8">{t(header)}</h2>}
            <div className="gallery mb-8">
                {galleryImages.slice(0, showImagesCount).map((image, i) => (
                    <button onClick={() => setIndex(i)} key={i} className="gallery__item">
                        <Image src={image.src} alt={'Our Gallery'} width={500} height={500} className="rounded-[8px]" />
                    </button>
                ))}
            </div>
            <Lightbox index={index} slides={galleryImages} open={index >= 0} close={() => setIndex(-1)} />
            {galleryImages.length > showImagesCount && (
                <button
                    onClick={() => setShowImagesCount(galleryImages.length)}
                    className="m-auto block text-white py-2 px-6 rounded-[12px] bg-[#5bc0f0] backdrop-blur-[5px] hover:scale-[1.05] transition text-[20px] tracking-[1px]"
                >
                    {t('show_more')}
                </button>
            )}
        </div>
    );
}
