import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { DEFAULT } from '@/app/[locale]/(pages)/room/[room]/enums';
import Link from 'next/link';
const MakeUpContent = ({ slug }: { slug: string }) => {
    const t = useTranslations();
    return (
        <div className="pt-[85px] px-4 md:pt-0">
            <Image src={DEFAULT.HEADER_IMAGE} alt={'main_photo'} width={980} height={317} className={`rounded-2xl mb-8`} />
            <h1 className={`text-center text-[36px]`}>{t(`Rooms.${slug}`)}</h1>
            <div
                className={`flex flex-col md:flex-row md:justify-between border-b-[1px] border-t-[1px] border-[#000] rounded-tl-2xl rounded-bl-2xl inset-shadow-sm`}
            >
                <Image src={'/images/make_up.jpg'} width={333} height={330} className={`rounded-2xl mb-8 md:mb-0 w-full md:w-[35%]`} alt={'photo'} />
                <div className={`flex flex-col gap-8 md:w-[65%] md:justify-between p-4`}>
                    <p className={`text-[20px]`}>{t('Rooms.make_up_description')}</p>
                    <Link
                        href={`/reservation`}
                        className={`px-8 py-4 text-white bg-[#454545] w-fit rounded-2xl flex hover:scale-[1.05] transition m-auto md:m-0 md:ml-auto`}
                    >
                        {t(`Header.reservation`)}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MakeUpContent;
