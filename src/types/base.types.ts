// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Link, LinkTypes } from "./links.types";
import { TagLink } from "./tags.types";

export type UniqueID = string;

export interface Metadata {
    tags: TagLink[];
}

export interface Space {
    sys: Link<LinkTypes.Space>;
}

export interface Environment {
    sys: Link<LinkTypes.Environment>;
}

export interface FileDetails {
    size: number;
}

export interface FileRef {
    url: string;
    details: FileDetails;
    fileName: string;
    contentType: string;
}

export enum SysTypes {
    Array = "Array",
    Link = "Link",
}

export interface SysTypeDef<SysType> {
    type: SysType;
}
