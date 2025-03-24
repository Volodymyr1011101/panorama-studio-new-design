'use client';
import { storage } from '@/app/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './Gallery.module.scss';
import { getImages, getImagesFromDataBase } from '@/helpers';
import { PropagateLoader } from 'react-spinners';
interface Props {
    images?: string[];
}
const Gallery2 = () => {
    const [galleryImages, setGalleryImages] = useState<string[] | []>([]);

    const listRef = ref(storage, 'image');
    // useEffect(() => {
    //     listAll(listRef)
    //         .then((res) => {
    //             res.prefixes.forEach((folderRef) => {
    //                 // All the prefixes under listRef.
    //                 // You may call listAll() recursively on them.
    //             });
    //             res.items.forEach((itemRef) => {
    //                 const imageRef = itemRef.fullPath;
    //                 getDownloadURL(ref(storage, imageRef)).then((url) => {
    //                     setGalleryImages((prev) => [...prev, url]);
    //                 });
    //
    //                 // All the items under listRef.
    //             });
    //         })
    //         .catch((error) => {
    //             // Uh-oh, an error occurred!
    //         });
    // }, []);
    const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    // const photos = galleryImages.map((item, index) => {
    //     return {
    //         src: item,
    //         width: index % 2 === 0 ? 600 : 1000,
    //         height: index % 2 === 0 ? 800 : 600,
    //         original: item
    //     };
    // });

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const images = await getImages(listRef);
                setGalleryImages(images);
            } catch (error) {
                console.error('Ошибка загрузки изображений:', error);
            }
        };

        fetchImages();
    }, []);
    const photos = galleryImages
        .map(src => {
            const matcher = src.match(/\.(\d+)x(\d+)\.(jpg|JPG|jpeg|png)/);

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
            {galleryImages.length ? (
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
