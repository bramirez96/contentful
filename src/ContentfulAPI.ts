// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { API } from "@brr-dev/api";
import { ContentfulAPISettings } from "./ContentfulAPI.types";
import { Assets, Entries, Links } from "./api";
import { ArrayResponse, SysTypes } from "./types";

/**
 * A custom implementation of the base API class that adds additional handling
 * and configuration specific to Contentful Delivery API requests.
 */
export class ContentfulAPI extends API<ContentfulAPISettings> {
    public assets: Assets;
    public entries: Entries;
    public links: Links;

    protected _environment: string;
    protected _spaceID: string;

    constructor({
        environment,
        spaceID,
        token,
        headers = {},
        ...settings
    }: ContentfulAPISettings) {
        if (token) headers["Authorization"] = `Bearer ${token}`;
        super({ headers, ...settings } as ContentfulAPISettings);

        this._environment = environment;
        this._spaceID = spaceID;

        this.assets = new Assets(this);
        this.entries = new Entries(this);
        this.links = new Links(this);
    }

    public isArrayResponse<ResourceType>(
        obj: unknown,
    ): obj is ArrayResponse<ResourceType> {
        return (
            typeof obj === "object" &&
            (obj as ArrayResponse<ResourceType>)?.sys?.type === SysTypes.Array
        );
    }

    protected _getURL<QueryType = unknown>(
        path: string,
        query?: QueryType,
        baseURL: string = `${this._baseURL}/spaces/${this._spaceID}/environments/${this._environment}`,
    ): string {
        return super._getURL<QueryType>(path, query, baseURL);
    }
}
