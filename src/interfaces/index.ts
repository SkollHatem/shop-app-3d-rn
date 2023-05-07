interface Media {
    id: number;
    url: string;
}

export interface Product {
    id: number;
    name: string;
    group: string;
    img: string;
    price: number;
    description: string;
    medias: Media[];
}
