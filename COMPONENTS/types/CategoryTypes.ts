import { SingleImageType } from "./ImageTypes";
import { MetaType } from "./MetaTypes";

export type CategoryResponseType = {
    data: CategoryDataType;
    meta: MetaType;
}
export type CategoriesResponseType = {
    data: CategoryDataType[];
    meta: MetaType;
}

export type CategoryDataType = {
    id: number;
    name: string;
    attributes: CategoryAttributesType;
}
export type CategoryAttributesType = {
    name: string;
    key: string;
    image: SingleImageType;
}
