// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { API } from "@brr-dev/api";
import { ContentfulAPISettings } from "../ContentfulAPI.types";
import { Assets, Entries, Links } from "../api";
import { ArrayResponse, SysTypes } from "../types";

/**
 * A custom implementation of the base API class that adds additional handling
 * and configuration specific to Contentful Delivery API requests.
 */
export class ContentfulAPI extends API<ContentfulAPISettings> {
    public assets: Assets = new Assets(this);
    public entries: Entries = new Entries(this);
    public links: Links = new Links(this);

    constructor({
        environment,
        spaceID,
        token,
        headers = {},
        apiType = "delivery",
        ...settings
    }: ContentfulAPISettings) {
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const baseURL = {
            delivery: "https://cdn.contentful.com",
            preview: "https://preview.contentful.com",
        }[apiType];

        super({
            ...settings,
            headers,
            baseURL: `${baseURL}/spaces/${spaceID}/environments/${environment}`,
        });
    }

    public isArrayResponse<ResourceType>(
        obj: unknown,
    ): obj is ArrayResponse<ResourceType> {
        return (
            typeof obj === "object" &&
            (obj as ArrayResponse<ResourceType>)?.sys?.type === SysTypes.Array
        );
    }
}
