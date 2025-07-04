export interface ILinks {
    name: string;
    link: string;
    children?: ILinks[];
}
export interface IIMage {
    src: string;
    width: number;
    height: number;
    alt: string;
}
export interface IGalleryPhotos {
    asset: string;
    width: number;
    height: number;
    alt: string;
}
export interface ISocialLinks {
    label: string;
    link: string;
}
