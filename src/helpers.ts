import { StorageReference, getDownloadURL, listAll } from "firebase/storage";

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
        console.error("Ошибка при получении изображений:", error);
        return [];
    }
};

export const getImages = async (ref:StorageReference) => {
    const images = await getImagesFromDataBase(ref)
    return images;
}
