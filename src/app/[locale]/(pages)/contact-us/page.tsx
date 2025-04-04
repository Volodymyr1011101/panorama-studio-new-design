'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import ImageSlider from '@/app/components/ui/Slider/Slider';
import { useLocale, useTranslations } from 'next-intl';
import { comment } from '@/app/[locale]/(pages)/types';
import Image from 'next/image';
const Page = () => {
    const t = useTranslations('Contact');
    return (
        <div className="flex items-center justify-center w-full justify-around">
            <div className={`flex flex-col items-center gap-3 text-[24px]`}>
                <h1 className={`text-[40px]`}>{t('title')}</h1>
                <p>Rynek 2 lok 6, Wrocław, Polska</p>
                <a href="mailto:panorama.wroclaw1@gmail.com">panorama.wroclaw1@gmail.com</a>
                <a href={'tel:+48884702184'}>+48-884-702-184</a>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.867534970007!2d17.028033112057855!3d51.11090413947339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc34cb1991dd5%3A0x44b768dcbe6708be!2sPanorama%20studio%20-%20Wroc%C5%82aw%20Studio%20fotograficzne%20photostudio!5e0!3m2!1sru!2spl!4v1743771228755!5m2!1sru!2spl"
                    width="500"
                    height="600"
                    style={{ border: 0 }}
                    color={'black'}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Page;
