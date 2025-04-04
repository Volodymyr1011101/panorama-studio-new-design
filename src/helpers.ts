import { StorageReference, getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { comment } from '@/app/[locale]/(pages)/types';

export const getImagesFromDataBase = async (ref: StorageReference): Promise<string[]> => {
    try {
        const res = await listAll(ref);
        const urls: string[] = [];

        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef);
            urls.push(url);
        }

        return urls;
    } catch (error) {
        console.error('Ошибка при получении изображений:', error);
        return [];
    }
};
const listRef = ref(storage, 'image');

export const getImages = async (ref: StorageReference) => {
    const images = await getImagesFromDataBase(ref);
    return images;
};

//ellipse text

export function truncateText(element: HTMLParagraphElement, maxLines: number = 4) {
    const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
    const maxHeight = lineHeight * maxLines;

    if (element.scrollHeight <= maxHeight) return; // Если уже укладывается, выходим

    let words = element.textContent!.split(' ');
    while (words.length > 0) {
        element.textContent = words.join(' ') + '...';
        if (element.scrollHeight <= maxHeight) break;
        words.pop(); // Убираем слово, если текст выходит за границу
    }
}

//get time format

export const getPostedTime = (timestamp: number, locale: string) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(locale, {
        month: 'long', // Полное название месяца (January, February и т. д.)
        day: 'numeric', // Число (17)
        year: 'numeric' // Год (2025)
    });
};

//generate reviewers

const collectAllReviews = (...args: comment[][]) => {
    return args.reduce((acc, curr) => acc.concat(curr), []);
};

//get info from google

export const getInfo = async () => {
    const mainInfo = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ1R2ZsUzDD0cRvghnvtxot0Q&fields=name,rating,reviews,user_ratings_total,url&language=ru&key=AIzaSyA-A1qPlF5VFeG_sNUXc9rReXVUSX4XC-g',
        {
            cache: 'force-cache'
        }
    ).then(response => response.json());
    const plReviews = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ1R2ZsUzDD0cRvghnvtxot0Q&fields=reviews&language=pl&key=AIzaSyA-A1qPlF5VFeG_sNUXc9rReXVUSX4XC-g',
        {
            cache: 'force-cache'
        }
    ).then(response => response.json());
    const enReviews = await fetch(
        'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ1R2ZsUzDD0cRvghnvtxot0Q&fields=reviews&language=en&key=AIzaSyA-A1qPlF5VFeG_sNUXc9rReXVUSX4XC-g',
        {
            cache: 'force-cache'
        }
    ).then(response => response.json());

    return {
        name: mainInfo.result.name,
        rating: mainInfo.result.rating,
        url: mainInfo.result.url,
        total_votes: mainInfo.result.user_ratings_total,
        reviews: collectAllReviews(plReviews.result.reviews, mainInfo.result.reviews, enReviews.result.reviews)
    };
};
