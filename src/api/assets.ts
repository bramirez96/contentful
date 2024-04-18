// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Asset, ResourceTypes } from "../types";
import _APIWrapperClass from "./_APIWrapperClass";

export default class Assets extends _APIWrapperClass {
    /**
     * If true, the passed-in object is a Contentful API asset.
     */
    public isAsset(obj: unknown): obj is Asset {
        return (
            typeof obj === "object" &&
            (obj as Asset)?.sys?.type === ResourceTypes.Asset
        );
    }

    /**
     * If true, the passed-in asset is an image. Returns false if the
     * value is not an object, not an asset, or not an image.
     */
    public isImage(asset: Asset): boolean {
        return (
            this.isAsset(asset) &&
            asset.fields.file.contentType.indexOf("image") >= 0
        );
    }

    /**
     * Get information on a Contentful API asset by its unique ID.
     */
    public getByID(assetID: string): Promise<Asset> {
        return this.api.get(`/assets/${assetID}`);
    }
}
