import PageContent from '@/app/[locale]/(pages)/room/[room]/PageContent';
import { images } from '@/app/[locale]/(pages)/mock_images';

const Room = async ({ params }: any) => {
    const roomSlug = (await params).room; // получаем параметр слага

    return <PageContent roomSlug={roomSlug} equipmentImages={images} galleryImages={images} />;
};

export default Room;
