export interface Data {
    data: Results;
}
export interface Results {
    results: Comic[];
}
export interface Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: Thumbnail;
    prices: Prices[];
    creators: Creator;
}
export interface Thumbnail {
    path: string;
    extension: string;
}
export interface Prices{
    type: string;
    price: number;
}
export interface Creator{
    items: Items[];
}
export interface Items{
    name: string;
    role: string;
}

