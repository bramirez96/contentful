// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { API } from "@brr-dev/api";
import { ContentfulAPISettings } from "./ContentfulAPI.types";
import { Assets, Entries, Links } from "./api";
import { ArrayResponse, SysTypes } from "./types";

/**
 * A custom implementation of the base API class that adds additional handling
 * and configuration specific to Contentful Delivery API requests.
 */
export default class ContentfulAPI extends API<ContentfulAPISettings> {
    public assets: Assets;
    public entries: Entries;
    public links: Links;

    protected _environment: string;
    protected _spaceID: string;
    protected _token: string;

    constructor({
        environment,
        spaceID,
        token,
        ...settings
    }: ContentfulAPISettings) {
        super(settings as ContentfulAPISettings);

        this._environment = environment;
        this._spaceID = spaceID;
        this._token = token;

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
