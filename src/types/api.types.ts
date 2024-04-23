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

/**
 * Allows specifying Contentful API search parameters in an easier-to-use
 * format than the format expected by the actual API. These properties are
 * parsed into the expected format before being sent to the API.
 */
export interface GetEntriesByQueryInput {
    /** Used for paginating results. */
    limit?: number;

    /** Used for paginating results. */
    skip?: number;

    /**
     * Optionally pass the ID of a specific content model to only return content
     * with that content type.
     */
    contentType?: string;

    /**
     * Match entries with any of the given tags. Optionally pass a list of tags
     * as an array of strings, or a comma-separated string. If a boolean is
     * passed, match entries that do (true) or do not (false) have _any_ tags
     * associated to them.
     */
    hasTags?: string | string[] | boolean;

    /**
     * Match entries with ALL of the given tags. Pass the list of tags as an
     * array of strings, or a comma-separated string.
     */
    hasAllTags?: string | string[];

    /**
     * Entities are often linked to other content, like image assets or other
     * linked resources. The `include` parameter lets you specify the number
     * of reference levels to resolve.
     * - Default: 1
     * - Allowed range: 0, 10
     */
    include?: number;
}

export interface _RawGetEntriesByParams {
    content_type?: string;
    limit?: number;
    skip?: number;
    include?: number;
    "metadata.tags[exists]"?: boolean;
    "metadata.tags.sys.id[in]"?: string;
    "metadata.tags.sys.id[all]"?: string;
}
