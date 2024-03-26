import { ImageType } from "./ImageTypes";
import { MetaType } from "./MetaTypes";

export type ContinentsResponseType = {
    data: ContinentDataType[];
    meta: MetaType;
}
export type ContinentResponseType = {
    data: ContinentDataType;
    meta: MetaType;
}

export type ContinentDataType = {
    id: number;
    attributes: ContinentAttributesType;
}
export type ContinentAttributesType = {
    name: string;
    key: string;
    image: ImageType
}

