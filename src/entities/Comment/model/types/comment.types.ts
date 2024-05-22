import { User } from 'entities/User';
import { EntityState } from '@reduxjs/toolkit';

export interface Comment {
    id:string
    user:User
    text:string
}

export interface CommentSchema extends EntityState<Comment>{
    data:Comment[]
    isLoading:boolean
    error?:string
}
