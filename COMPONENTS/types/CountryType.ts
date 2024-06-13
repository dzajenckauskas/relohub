import { ImagesType, SingleImageType } from "./ImageTypes";
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
    cardsSection: SectionType;
    iconsSection: SectionType;
    listSection: SectionType;
}

export type FaqType = {
    id: number;
    question: string;
    answer: string;
    fullAnswer: string;
}

export type SectionType = {
    id: number;
    sectionTitle: string;
    sectionSubitle: string;
    sectionCards: SectionCardType[];
    active: boolean;
}

export type SectionCardType = {
    id: number;
    title: string;
    shortContent: string;
    buttonText: string | null;
    url: string | null;
    richText: string | null;
    image: SingleImageType;
}