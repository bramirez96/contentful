// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import ContentfulAPI from "../ContentfulAPI";

export default class _APIWrapperClass {
    public api: ContentfulAPI;
    constructor(api: ContentfulAPI) {
        this.api = api;
    }
}
