// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Link, LinkTypes } from "./links.types";
import { Resource, ResourceTypes } from "./resources.types";

export type TagLink = Link<LinkTypes.Tag>;

export type Tag = Omit<
    Resource<
        ResourceTypes.Tag,
        never,
        {
            version: number;
            visibility: "public";
            updatedBy: TagLink;
            createdBy: TagLink;
        },
        "revision" | "locale"
    >,
    "metadata" | "fields"
> & {
    name: string;
};
