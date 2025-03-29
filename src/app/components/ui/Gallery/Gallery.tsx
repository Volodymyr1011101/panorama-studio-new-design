'use client';
import 'yet-another-react-lightbox/styles.css';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
//@ts-ignore
import fjGallery from 'flickr-justified-gallery';
import Lightbox from 'yet-another-react-lightbox';
import { images2 } from '@/app/[locale]/(pages)/mock_images';

export default function Gallery({ images }: { images: string[] | null }) {
    const [index, setIndex] = useState(-1);
    const getImages = (images: string[] | null): { src: string }[] => {
        if (images === null) {
            return images2.map(item => ({ src: item }));
        }
        return images.map(item => ({ src: item }));
    };
    const galleryImages = getImages(images);

    const t = useTranslations();
    const [showImagesCount, setShowImagesCount] = useState<number>(12);

    useEffect(() => {
        fjGallery(document.querySelectorAll('.gallery'), {
            itemSelector: '.gallery__item',
            rowHeight: 180,
            lastRow: 'start',
            gutter: 2,
            rowHeightTolerance: 0.1,
            calculateItemsHeight: false
        });
    }, [showImagesCount]);
    return (
        <div key={showImagesCount}>
            <div className="gallery mb-8">
                {galleryImages?.slice(0, showImagesCount).map((image, i) => (
                    <button onClick={() => setIndex(i)} key={i} className="gallery__item">
                        <img alt={'Our Gallery'} src={image.src} className="rounded-xl" />
                    </button>
                ))}
            </div>
            <Lightbox index={index} slides={galleryImages} open={index >= 0} close={() => setIndex(-1)} />
            {galleryImages?.length && showImagesCount <= galleryImages?.length && (
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
