import PageContent from '@/app/[locale]/(pages)/room/[room]/PageContent';
import { images, images2 } from '@/app/[locale]/(pages)/mock_images';

const Room = async ({ params }: any) => {
    const roomSlug = (await params).room; // получаем параметр слага

    return <PageContent roomSlug={roomSlug} equipmentImages={images2} galleryImages={images2} />;
};

export default Room;
