import { APISettings } from "@brr-dev/api";

export type ContentfulAPISettings = APISettings & {
    /** Contentful Space ID */
    spaceID?: string;

    /** Contentful Environment */
    environment?: string;

    /** Contentful Auth Token */
    token?: string;
};
