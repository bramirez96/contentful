// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Link, LinkTypes, SysTypes } from "../types";
import _APIWrapperClass from "./_APIWrapperClass";

export default class Links extends _APIWrapperClass {
    /**
     * If true, the passed-in object is a Contentful API link.
     */
    public isLink(obj: unknown): obj is Link {
        return (
            typeof obj === "object" &&
            (obj as Link)?.sys?.id !== undefined &&
            (obj as Link)?.sys?.type === SysTypes.Link &&
            (obj as Link)?.sys?.linkType in LinkTypes
        );
    }

    /**
     * Gets the link type from a Contentful API link object.
     */
    public getLinkType(obj: Link): LinkTypes | void {
        if (this.isLink(obj)) {
            return obj.sys.linkType;
        }
    }

    /**
     * Gets the unique ID from a Contentful API link object.
     */
    public getLinkID(obj: Link): string | undefined {
        if (this.isLink(obj)) {
            return obj.sys.id;
        }
    }
}
