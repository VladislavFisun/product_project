export type TArticleBlockType = 'CODE' | 'IMAGE' | 'TEXT'

export type ArticleBlock = {
    id:string;
    type:TArticleBlockType
}
export type ArticleImageBlock = {
    type: 'IMAGE'
    src:string
    title:string;
} & ArticleBlock

export type ArticleCodeBlock = {
    type: 'CODE'
    src?:string
    title:string;
    paragraphs:string[]
} & ArticleBlock

export type ArticleTextBlock = {
    type: 'TEXT'
    title?:string;
    paragraphs:string[]
} & ArticleBlock

export type ArticleUnionBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    'id':string;
    'title': string;
    'subtitle':string;
    'img': string;
    'views': string;
    'createdAt': string;
    'type': string[],
    'blocks':ArticleUnionBlock[]
}

export interface ArticleDetailsSchema {
    isLoading:boolean
    error?:string
    data:Article
}
