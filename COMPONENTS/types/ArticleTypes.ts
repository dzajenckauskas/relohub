import { CategoryResponseType } from "./CategoryTypes";
import { ContinentsResponseType } from "./ContinentTypes";
import { ImagesType } from "./ImageTypes";
import { MetaType } from "./MetaTypes";
import { SeoType } from "./PageType";

export type ArticleResponseType = {
    data: ArticleDataType;
    meta: MetaType;
}
export type ArticlesResponseType = {
    data: ArticleDataType[];
    meta: MetaType;
}

export type ArticleDataType = {
    id: number;
    attributes: ArticleAttributesType;
}
export type ArticleAttributesType = {
    title: string;
    fullContent: string;
    slug: string;
    shortContent: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    images: ImagesType;
    articleCategory?: CategoryResponseType;
    articleContinents?: ContinentsResponseType;
    seo?: SeoType;
}
