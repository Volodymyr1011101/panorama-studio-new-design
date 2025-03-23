import type { NextComponentType, NextPageContext } from 'next';
import styles from './footer.module.scss';
interface Links {
    label: string;
    link: string;
}

const Footer: NextComponentType<NextPageContext, {}> = () => {
    const links: Links[] = [
        {
            label: 'instagram',
            link: 'https://www.instagram.com/panorama.studiowroclaw'
        },
        {
            label: 'tiktok',
            link: 'https://www.tiktok.com/@panoramastudio.wroclaw'
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>Copyright © panorama-studio | All Rights Reserved</p>
                <a href="mailto:panoramastudio2023@gmail.com">panoramastudio2023@gmail.com</a>
            </div>
            <ul className={styles.list}>
                {links.map((link) => (
                    <li key={link.label} className={styles.listItem}>
                        <a href={link.link} target='_blank' rel='noreferer'>
                            <svg width="50" height="50" className={styles.icon}>
                                <use href={`/images/svg/${link.label}.svg#${link.label}`} />
                            </svg>
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;
