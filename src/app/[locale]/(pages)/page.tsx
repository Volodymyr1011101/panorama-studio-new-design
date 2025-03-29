import HeroComponent from '@/app/components/Hero';
import Rooms from '@/app/components/Rooms/Rooms';
import styles from './page.module.scss';
import { images2 } from '@/app/[locale]/(pages)/mock_images';
import Gallery from '@/app/components/ui/Gallery/Gallery';

export default async function HomePage() {
    return (
        <div className={`px-4 pt-[102px] md:p-4`}>
            <section className={styles.heroSection}>
                <HeroComponent />
            </section>
            <section className={styles.roomsSection}>
                <Rooms />
            </section>
            <section className=" mb-8">
                <Gallery images={images2} header={'gallery_header'} />
            </section>
            <section className={styles.maps}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.867534970002!2d17.028033112057845!3d51.110904139473384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc34cb1991dd5%3A0x44b768dcbe6708be!2sPanorama%20studio%20-%20Wroc%C5%82aw%20Studio%20fotograficzne%20photostudio!5e0!3m2!1sru!2spl!4v1743211014092!5m2!1sru!2spl"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={`rounded-2xl`}
                ></iframe>
            </section>
        </div>
    );
}
