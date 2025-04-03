export interface comment {
    author_name: string;
    author_url: string;
    language: string;
    original_language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
}

export interface Data {
    name: string;
    rating: number;
    url: string;
    total_votes: number;
    reviews: comment[];
}
