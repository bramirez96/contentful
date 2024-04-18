// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { SysTypes, UniqueID } from "./base.types";

export enum LinkTypes {
    Content = "Content",
    Asset = "Asset",
    Space = "Space",
    Entry = "Entry",
    Environment = "Environment",
    ContentType = "ContentType",
    Tag = "Tag",
    User = "User",
}

export interface Link<
    Type extends LinkTypes = LinkTypes,
    ID extends string = UniqueID,
> {
    sys: {
        id: ID;
        type: SysTypes.Link;
        linkType: Type;
    };
}
