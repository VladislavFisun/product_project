import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
 user:UserSchema;
 login:LoginSchema
 profile:ProfileSchema
}

export type StateSchemaKey = keyof StateSchema
