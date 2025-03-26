import { StorageReference, getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/app/firebase';

export const getImagesFromDataBase = async (ref: StorageReference): Promise<string[]> => {
    try {
        const res = await listAll(ref);
        const urls: string[] = [];

        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef);
            urls.push(url);
        }

        return urls;
    } catch (error) {
        console.error('Ошибка при получении изображений:', error);
        return [];
    }
};
const listRef = ref(storage, 'image');

export const getImages = async (ref: StorageReference) => {
    const images = await getImagesFromDataBase(ref);
    return images;
};
