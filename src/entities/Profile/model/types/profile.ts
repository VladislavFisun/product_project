import { Currency } from 'shared/const/common';

export interface IProfile {
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?:IProfile
    form?:IProfile
    readOnly :boolean
    isLoading: boolean
    error?:string
}
