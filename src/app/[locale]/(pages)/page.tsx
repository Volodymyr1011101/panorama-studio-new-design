import Backgrounds from '@/app/components/Backgrounds/Backgrounds';
import HeroComponent from '@/app/components/Hero';
import Rooms from '@/app/components/Rooms/Rooms';
import Gallery from '@/app/components/ui/Gallery';
import { imageConfig } from '@/lib/imageConfig';
import Image from 'next/image';
import styles from './page.module.scss';

export default function HomePage() {
  const text =
    '<p>Już są dostępne beżowy, czarny, szary, brązowy, niebieski, różowy, jasnozielony. </p><p>Jeśli dla twojej sesji jest potrzebne papierowe tło, poprostu powiedz nam o tym przy rezerwacji sali 😉</p><p>Tła są wliczonę w cenę wynajmu🔥 Także, jeśli potrzebujesz color, którego nie mamy w dostępności, napisz do nas, zamówimy go dla ciebe🫶🏻</p>';
  return (
    <div className={`px-4 pt-[102px] md:p-4`}>
      <section className={styles.heroSection}>
        <HeroComponent />
      </section>
      <section className={styles.roomsSection}>
        <Rooms />
      </section>
      {/*<section className="text-white flex justify-center mb-8">*/}
      {/*  <Backgrounds title={'Mamy w studiu papierowe tła😍'} image={<Image {...imageConfig.backgrounds} />} text={text} />*/}
      {/*</section>*/}
      <section className=" mb-8">
        <Gallery />
      </section>
      <section className={styles.maps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8675349700015!2d17.028033112057855!3d51.11090413947339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2756d3c554f%3A0x95366608437e1883!2sRynek%202%2C%2050-106%20Wroc%C5%82aw!5e0!3m2!1sru!2spl!4v1722462498975!5m2!1sru!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}