import { Post } from "./post";
import { UserId } from "./user-id";

export interface Movie {   
    subscribers: string [],
    posts: any, //string [] | Post[],
    _id: string,
    movieName: string,
    movieGenre: string,
    movieProducer: string,
    movieText: string,
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
}