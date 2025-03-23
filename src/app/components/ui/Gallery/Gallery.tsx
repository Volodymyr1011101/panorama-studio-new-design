'use client';
import { storage } from '@/app/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from './Gallery.module.scss';
interface Props {
    images?: string[];
}
const Gallery2 = () => {
    const [galleryImages, setGalleryImages] = useState<string[] | []>([]);

    const listRef = ref(storage, 'image');
    const [isShow, setIsShow] = useState({
        src: '',
        isShow: false
    });
    useEffect(() => {
        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                });
                res.items.forEach((itemRef) => {
                    const imageRef = itemRef.fullPath;
                    getDownloadURL(ref(storage, imageRef)).then((url) => {
                        setGalleryImages((prev) => [...prev, url]);
                    });

                    // All the items under listRef.
                });
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const photos = galleryImages.map((item, index) => {
        return {
            src: item,
            width: index % 2 === 0 ? 600 : 1000,
            height: index % 2 === 0 ? 800 : 600,
            original: item,
        };
    });
    console.log(photos);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);
    return (
        <div className={styles.wrapper}>
            {/* <div
                className={`${styles.popupDiv} ${isShow.isShow && styles.show}`}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShow({ src: isShow.src, isShow: false });
                    setTimeout(() => {
                        setIsShow({ src: '', isShow: false });
                    }, 300);
                }}
            >
                {isShow.src && <Image src={isShow.src} width={600} height={800} alt="photo" />}
            </div> */}
            <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={150}
                spacing={3}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)} />
            {/* <RowsPhotoAlbum photos={photos} />; */}
        </div>
    );
};

export default Gallery2;
