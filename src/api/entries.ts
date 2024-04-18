// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import {
    _GetEntriesByQueryInput,
    ArrayResponse,
    Entry,
    GetEntriesByParams,
    ResourceTypes,
} from "../types";
import _APIWrapperClass from "./_APIWrapperClass";

export default class Entries extends _APIWrapperClass {
    public isEntry(obj: unknown): obj is Entry {
        return (
            typeof obj === "object" &&
            (obj as Entry)?.sys?.type === ResourceTypes.Entry
        );
    }

    /**
     * Get a set of entries from the Contentful API with the given
     * input parameters.
     */
    public getList<EntryType>(
        query: _GetEntriesByQueryInput = {},
    ): Promise<ArrayResponse<EntryType>> {
        return this.api.get<never, ArrayResponse<EntryType>, unknown>(
            "/entries",
            { query: this._entryQueryParams(query) },
        );
    }

    /**
     * Get a Contentful API entry by its unique ID.
     */
    public getByID<EntryType>(entryID: string): Promise<EntryType> {
        return this.api.get(`/entries/${entryID}`);
    }

    /**
     * Parse the passed-in parameters object into the correct format.
     */
    private _entryQueryParams({
        contentType,
        hasAllTags,
        hasTags,
        ...inputParams
    }: _GetEntriesByQueryInput = {}): GetEntriesByParams {
        const resParams: GetEntriesByParams = inputParams;

        if (contentType) {
            resParams.content_type = contentType;
        }

        if (hasTags) {
            if (typeof hasTags === "boolean") {
                resParams["metadata.tags[exists]"] = hasTags;
            } else if (typeof hasTags === "string") {
                resParams["metadata.tags.sys.id[in]"] = hasTags;
            } else if (Array.isArray(hasTags)) {
                resParams["metadata.tags.sys.id[in]"] = hasTags.join(",");
            }
        }

        if (hasAllTags) {
            if (typeof hasAllTags === "string") {
                resParams["metadata.tags.sys.id[all]"] = hasAllTags;
            } else if (Array.isArray(hasAllTags)) {
                resParams["metadata.tags.sys.id[all]"] = hasAllTags.join(",");
            }
        }

        return resParams;
    }
}
