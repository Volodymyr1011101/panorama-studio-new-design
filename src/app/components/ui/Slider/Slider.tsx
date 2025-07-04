'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import styles from './Slider.module.scss';
import { useLocale } from 'next-intl';
import { comment } from '@/app/[locale]/(pages)/types';
import { getInfo, getPostedTime, truncateText } from '@/helpers';
interface Props {
    reviews: comment[];
    url: string;
}

const ImageSlider = () => {
    const locale = useLocale();
    const [swiper, setSwiper] = useState();
    const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidePosition, setSlidePosition] = useState({
        isBeginning: true,
        isEnd: false
    });
    useEffect(() => {
        textRefs.current.forEach(p => {
            if (p) truncateText(p, 3);
        });
    }, []);

    const [data, setData] = useState<{
        reviews: {
            author_name: string;
            profile_photo_url: string;
            rating: number;
            time: number;
            text: string;
        }[];
        url: string;
    } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getInfo()
            .then((res: any) => setData(res))
            .catch((err: any) => {
                console.error('getInfo failed:', err);
                setError('Не вдалося завантажити відгуки');
            });
    }, []);

    // @ts-ignore
    return (
        <div className="relative px-[40px] mb-4">
            {!slidePosition.isBeginning ? (
                <button
                    className={`absolute left-0 top-[50%] translate-y-[-50%]`}
                    onClick={() => {
                        if (swiper) {
                            //@ts-ignore
                            swiper.slidePrev(300);
                        }
                    }}
                >
                    <Image src={'/images/svg/arrow-dropdown.svg'} height={20} width={20} alt={'arrow'} className={`rotate-[90deg]`} />
                </button>
            ) : null}
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    600: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    }
                }}
                //@ts-ignore
                onSwiper={swiper => setSwiper(swiper)}
                onSlideChange={slide => {
                    setSlidePosition({ isBeginning: slide.isBeginning, isEnd: slide.isEnd });

                    setCurrentSlide(slide.activeIndex);
                }}
            >
                {data?.reviews?.map((review, index) => (
                    <SwiperSlide key={review.author_name + index}>
                        <div className={`flex flex-col gap-4 bg-[#EFEFEF] p-3 relative rounded-[8px] min-h-[208px]`}>
                            <div className={`flex items-center justify-between text-[18px]`}>
                                <div className={`flex items-center gap-2`}>
                                    <Image src={review.profile_photo_url} alt={'reviewer photo'} width={60} height={60} />
                                    <div className={`flex flex-col`}>
                                        <span className={`whitespace-nowrap`}>{review.author_name}</span>
                                        <Rating initialValue={review.rating} readonly={true} className={`${styles.rating}`} />
                                        <span className={`text-[12px] text-[#434343c4]`}>{getPostedTime(review.time, locale)}</span>
                                    </div>
                                </div>
                                <div className={`absolute right-[7px] top-[7px] `}>
                                    <a href={data.url} target={`_blank`}>
                                        <Image src={'/icons/google.svg'} alt={'google'} width={15} height={15} />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p
                                    ref={el => {
                                        textRefs.current[index] = el;
                                    }}
                                >
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {!slidePosition.isEnd ? (
                <button
                    className={`absolute right-0 top-[50%] translate-y-[-50%]`}
                    onClick={() => {
                        if (swiper) {
                            //@ts-ignore
                            swiper.slideNext(300);
                        }
                    }}
                >
                    <Image src={'/images/svg/arrow-dropdown.svg'} height={20} width={20} alt={'arrow'} className={`rotate-[-90deg]`} />
                </button>
            ) : null}
        </div>
    );
};
export default ImageSlider;
