import { ref } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { getImagesFromDataBase } from '@/helpers';
import PageContent from '@/app/[locale]/(pages)/room/[room]/PageContent';

export async function generateStaticParams() {
    // Получение списка комнат из какого-то источника данных (например, Firebase или API)
    const roomSlugs = ['white', 'art', 'aqua_dark', 'aqua_light']; // Это пример, замените на запрос данных

    return roomSlugs.map(roomSlug => ({
        room: roomSlug // Для каждой комнаты генерируем статичный путь
    }));
}

const Room = async ({ params }: any) => {
    const roomSlug = (await params).room; // получаем параметр слага

    // Запрос изображений для комнаты и оборудования
    const listRef = ref(storage, 'equipment');
    const equipmentImages = await getImagesFromDataBase(listRef);
    const galleryImageRef = ref(storage, roomSlug);
    const galleryImages = await getImagesFromDataBase(galleryImageRef);
    return <PageContent roomSlug={roomSlug} equipmentImages={equipmentImages} galleryImages={galleryImages} />;
};

export default Room;
