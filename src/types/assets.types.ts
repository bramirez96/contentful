// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Resource, ResourceTypes } from "./resources.types";
import { Link, LinkTypes } from "./links.types";
import { FileRef } from "./base.types";

export type AssetLink = Link<LinkTypes.Asset>;
export type Asset = Resource<
    ResourceTypes.Asset,
    {
        title: string;
        description: string;
        file: FileRef;
    }
>;
