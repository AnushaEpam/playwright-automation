import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../../helperbase/HelperBase";

export class LoginPage extends HelperBase {
    private emailLocator = 'input[data-test="username"]';
    private passwordLocator = 'input[data-test="password"]';
    private loginLocator = '#login-button'
  
    constructor(page: Page) {
      super(page);
    }
  
    async enterValuesAndSubmitLogin(
      username: string,
      password:string
    ) {
      
      await this.page.locator(this.emailLocator).fill(username);
      await this.page.locator(this.passwordLocator).fill(password);
    }
    async enterUsername(username: string) {
      await this.page.locator(this.emailLocator).fill(username);
    }

    async enterPassword(password: string) {
      await this.page.locator(this.passwordLocator).fill(password);
    }
    async clickOnLogin(){
      await this.page.locator(this.loginLocator).click()
    }
  }