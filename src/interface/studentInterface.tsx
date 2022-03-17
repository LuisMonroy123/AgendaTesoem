import { ImageSourcePropType } from "react-native";

export interface studentItem {
    id?: number,
    career: string,
    name?: string,
    photo?: ImageSourcePropType,
    phone?: number,
    workstation?: string,
    group?: string,
    turno: string
}