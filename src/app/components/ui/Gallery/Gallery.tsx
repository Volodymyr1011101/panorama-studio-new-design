'use client';
import { storage } from '@/app/firebase';
import { ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.scss';
import { getImages } from '@/helpers';
import { PropagateLoader } from 'react-spinners';

const Gallery2 = ({ galleryImages }: { galleryImages: string[] }) => {
    const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];
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
                height,
                srcSet: breakpoints.map(breakpoint => ({
                    src: src,
                    width: breakpoint,
                    height: Math.round((height / width) * breakpoint)
                }))
            };
        })
        .filter(photo => photo !== null); // Filter out any null values from the result

    return (
        <div className={styles.wrapper}>
            {galleryImages?.length ? (
                <>
                    <RowsPhotoAlbum photos={photos} targetRowHeight={150} spacing={3} onClick={({ index: current }) => setIndex(current)} />
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
