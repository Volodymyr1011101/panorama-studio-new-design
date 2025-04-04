import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { DEFAULT } from '@/app/[locale]/(pages)/room/[room]/enums';
import Link from 'next/link';
const MakeUpContent = ({ slug }: { slug: string }) => {
    const t = useTranslations();
    return (
        <div className="pt-[85px] px-4 md:pt-0 ">
            <Image src={DEFAULT.HEADER_IMAGE} alt={'main_photo'} width={980} height={317} className={`rounded-2xl mb-8`} />
            <h1 className={`text-center text-[36px] mb-4`}>{t(`Rooms.${slug}`)}</h1>
            <div
                className={`flex flex-col md:flex-row md:justify-between md:border-b-[1px] md:border-t-[1px] border-[#000] rounded-tl-2xl rounded-bl-2xl inset-shadow-sm`}
            >
                <Image src={'/images/make_up.jpg'} width={333} height={330} className={`rounded-2xl mb-8 md:mb-0 w-full md:w-[35%]`} alt={'photo'} />
                <div className={`flex flex-col gap-8 md:w-[65%] md:gap-32 p-4`}>
                    <p className={`text-[20px]`}>{t('Rooms.make_up_description')}</p>
                    <Link
                        href={`/reservation`}
                        className={`px-4 py-2 text-white bg-[#5bc0f0] w-fit rounded-2xl flex hover:scale-[1.05] transition m-auto md:m-0 md:mx-auto text-[20px]`}
                    >
                        {t(`Header.reservation`)}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MakeUpContent;
