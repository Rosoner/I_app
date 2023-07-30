import { UserId } from "./user-id";

export interface Movie {   
    subscribers: string [],
    posts: string [],
    _id: string,
    movieName: string,
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
}