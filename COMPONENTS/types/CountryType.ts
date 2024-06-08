import { MetaType } from "./MetaTypes";

export type CountriesResponseType = {
    data: CountryDataType[];
    meta: MetaType;
}
export type CountryResponseType = {
    data: CountryDataType;
    meta: MetaType;
}
export type CountryDataType = {
    id: 1,
    attributes: CountryAttributesType
}
export type CountryAttributesType = {
    name: string;
    continent: string;
    iso2: string;
    url: string;
    collection: boolean;
    destination: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    fullContent: string;
    faqs: FaqType[];
}

export type FaqType = {
    id: number;
    question: string;
    answer: string;
    fullAnswer: string;
}