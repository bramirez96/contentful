// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { LinkTypes } from "./links.types";
import { Resource } from "./resources.types";
import { SysTypeDef, SysTypes } from "./base.types";

export interface ArrayResponse<ResourceType> {
    sys: SysTypeDef<SysTypes.Array>;
    total: number;
    skip: number;
    limit: number;
    items: ResourceType[];
    includes?: Record<LinkTypes, Resource[]>;
}

export interface _GetEntriesByQueryInput {
    contentType?: string;
    limit?: number;
    skip?: number;
    include?: number;
    hasTags?: string | string[] | boolean;
    hasAllTags?: string | string[];
}

export interface GetEntriesByParams {
    content_type?: string;
    limit?: number;
    skip?: number;
    include?: number;
    "metadata.tags[exists]"?: boolean;
    "metadata.tags.sys.id[in]"?: string;
    "metadata.tags.sys.id[all]"?: string;
}
