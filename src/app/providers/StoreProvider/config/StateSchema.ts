import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { CommentSchema } from 'entities/Comment';

export interface StateSchema {
 user:UserSchema;
 login:LoginSchema
 profile:ProfileSchema
 articleDetails:ArticleDetailsSchema
 comments:CommentSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ThunkExtraArguments {
 api:AxiosInstance
 navigate:NavigateFunction
}

export interface ThunkConfig<T>{
 rejectValue:T
 extra:ThunkExtraArguments
 state:StateSchema
}
