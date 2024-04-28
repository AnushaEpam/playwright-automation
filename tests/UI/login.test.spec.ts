import { expect } from "@playwright/test";
import test from "../../src/fixture/fixture";
import { ENV } from "../../src/utils/env/env";


const data = JSON.parse(
    JSON.stringify(require("../../testData/loginData.json"))
  );

  test.beforeEach(async ({ pageManager, page }) => {
    console.log(ENV.BASE_URL);
    await page.goto(ENV.BASE_URL as string);
    await expect(page).toHaveTitle(ENV.HOMEPAGE_TITLE as string);
  });

  test.describe("Login Page Scenarios - Desktop", () => {
    test.only("Enter username, password and login", async ({ pageManager }) => {
      await pageManager
        .loginPage()
        .enterValuesAndSubmitLogin(
          data.username,
          data.password
        );
    });
    test("Sort products and add the first item to cart", async ({ pageManager }) => {
     await pageManager.homePage().sortDropdown()
    });

})