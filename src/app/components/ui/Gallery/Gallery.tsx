'use client';
import { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.scss';
import { PropagateLoader } from 'react-spinners';
import { images } from '@/app/[locale]/(pages)/mock_images';
import Image from 'next/image';

const Gallery2 = ({ galleryImages }: { galleryImages: string[] }) => {
    const [index, setIndex] = useState(-1);
    const photos = galleryImages
        ?.map((src: string) => {
            const matcher = src.match(/\.(\d+)x(\d+)\.(jpg|JPG|jpeg|png|webp)/);

            // Check if the match was successful
            if (!matcher) {
                console.warn(`No match for image URL: ${src}`);
                return null; // or return a default object or skip the image
            }

            const width = Number.parseInt(matcher[1], 10);
            const height = Number.parseInt(matcher[2], 10);

            return {
                src: src,
                width,
                height
            };
        })
        .filter(photo => photo !== null); // Filter out any null values from the result

    return (
        <div className={styles.wrapper}>
            {galleryImages?.length ? (
                <>
                    {/*<RowsPhotoAlbum photos={photos} targetRowHeight={150} spacing={3} onClick={({ index: current }) => setIndex(current)} />*/}
                    <div className={`flex flex-wrap gap-[3px] grid-container`}>
                        {images.map((src, i) => (
                            <Image className={`grow grid-item`} src={src} key={i} width={200} height={30} alt={'images'} onClick={() => setIndex(i)} />
                        ))}
                        <style jsx>{`
                            .grid-container {
                                display: grid;
                                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                                gap: 3px;
                                grid-auto-flow: dense; /* Позволяет фото заполнять пустоты */
                            }

                            .grid-item {
                                width: 100%;
                                height: auto;
                                object-fit: cover;
                                border-radius: 10px;
                            }
                        `}</style>
                    </div>
                    <Lightbox index={index} slides={photos} open={index >= 0} close={() => setIndex(-1)} />
                </>
            ) : (
                <div className={`flex items-center justify-center`}>
                    <PropagateLoader />
                </div>
            )}
        </div>
    );
};

export default Gallery2;
