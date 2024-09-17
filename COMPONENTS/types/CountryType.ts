import { ImagesType, SingleImageType } from "./ImageTypes";
import { MetaType } from "./MetaTypes";

export type VideoAttributesType = {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | string | null;
    height: number | string | null;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null,
    provider: string;
    provider_metadata: any | null,
    createdAt: Date;
    updatedAt: Date;
}
export type VideoDataType = {
    id?: number;
    attributes?: VideoAttributesType;
}
export type VideoType = {
    data?: VideoDataType;
}
export type VideSectionType = {
    id: number;
    title?: string;
    subtitle?: string;
    video?: VideoType;
}

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
    videoSection?: VideSectionType;
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
    sectionSubtitle: string;
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