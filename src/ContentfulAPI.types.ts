// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { APISettings } from "@brr-dev/api";

export type ContentfulAPITypeDelivery = "delivery";
export type ContentfulAPITypePreview = "preview";
export type ContentfulAPITypes =
    | ContentfulAPITypeDelivery
    | ContentfulAPITypePreview;

export type ContentfulAPISettings = Omit<APISettings, "baseURL"> & {
    /** Contentful Space ID */
    spaceID: string;

    /** Contentful Environment */
    environment: string;

    /** Contentful Auth Token */
    token: string;

    /** Contentful API Type: "preview" or "delivery" */
    apiType?: ContentfulAPITypes;
};
