// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { ContentfulAPI } from "../classes";

describe("ContentfulAPI tests", () => {
    it("builds without error", () => {
        expect(() => {
            new ContentfulAPI({
                token: "faketoken",
                spaceID: "fakespaceid",
                environment: "fakeenv",
            });
        }).not.toThrow();
    });
});
