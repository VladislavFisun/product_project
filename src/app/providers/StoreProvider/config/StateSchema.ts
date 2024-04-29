import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';

export interface StateSchema {
 user:UserSchema;
 login:LoginSchema
}
