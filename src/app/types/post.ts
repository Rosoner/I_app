import { Movie } from "./movie"
import { UserId } from "./user-id"

export interface Post {
    likes: string [],
    _id: string,
    text: string,
    userId: UserId,
    movieId: Movie
    created_at: string,
    updatedAt: string,
    __v: number
}