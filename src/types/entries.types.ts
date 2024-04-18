// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Link, LinkTypes } from "./links.types";
import { Resource, ResourceTypes } from "./resources.types";

export type EntryLink<EntryType extends string = string> = Link<
    LinkTypes.Entry,
    EntryType
>;

export type Entry<
    EntryType extends string = string,
    FieldMap extends Record<string, unknown> = Record<string, unknown>,
> = Resource<
    ResourceTypes.Entry,
    FieldMap,
    { contentType: Link<LinkTypes.ContentType, EntryType> }
>;
