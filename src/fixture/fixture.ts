import { test as baseTest } from "@playwright/test";
import pageManager from "../pom/pageManager";


const test = baseTest.extend<{
  pageManager: any;
}>({
  pageManager: async ({ page }, use) => {  
        await use(new pageManager(page));
    }
});

export default test;
export const expect = test.expect;