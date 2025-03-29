import PageContent from '@/app/[locale]/(pages)/room/[room]/PageContent';
import { artImages, images, images2 } from '@/app/[locale]/(pages)/mock_images';
import MakeUpContent from '@/app/[locale]/(pages)/room/[room]/MakeUp';

const Room = async ({ params }: any) => {
    const roomSlug: keyof typeof galleryImages = (await params).room; // получаем параметр слага
    const galleryImages = {
        art: artImages,
        white: images2,
        aqua_light: null,
        aqua_dark: null,
        make_up: null
    };
    return (
        <>
            {roomSlug !== 'make_up' ? (
                <PageContent roomSlug={roomSlug} equipmentImages={images2} galleryImages={galleryImages[roomSlug]} />
            ) : (
                <MakeUpContent slug={roomSlug} />
            )}
        </>
    );
};

export default Room;
