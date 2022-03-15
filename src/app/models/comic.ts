export interface Data {
    data: Results;
}

export interface Results {
    results: Comic[];
}

export interface Comic {
    title: string;
    description: string;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    path: string;
    extension: string;
}