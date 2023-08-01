import { Post } from "./post";
import { UserId } from "./user-id";

export interface Movie {   
    subscribers: string [],
    posts: any, //string [] | Post[],
    _id: string,
    themeName: string,
    userId: UserId,
    created_at: string,
    updatedAt: string,
    __v: number
}