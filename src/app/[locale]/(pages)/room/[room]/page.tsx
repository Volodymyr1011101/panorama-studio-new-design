import { ref } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { getImagesFromDataBase } from '@/helpers';
import PageContent from '@/app/[locale]/(pages)/room/[room]/PageContent';

const Room = async ({ params }: any) => {
    const roomSlug = params.room; // получаем параметр слага
    const listRef = ref(storage, 'equipment');
    const equipmentImages = await getImagesFromDataBase(listRef);
    const galleryImageRef = ref(storage, roomSlug);
    const galleryImages = await getImagesFromDataBase(galleryImageRef);
    return <PageContent roomSlug={roomSlug} equipmentImages={equipmentImages} galleryImages={galleryImages} />;
};

export default Room;
