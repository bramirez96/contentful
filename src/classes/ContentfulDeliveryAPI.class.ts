// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ContentfulAPI } from "./ContentfulAPI.class";
import { ContentfulAPISettings } from "../ContentfulAPI.types";

export class ContentfulDeliveryAPI extends ContentfulAPI {
    constructor(settings: Omit<ContentfulAPISettings, "apiType">) {
        super({ ...settings, apiType: "delivery" });
    }
}
