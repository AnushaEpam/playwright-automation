import { Page } from "@playwright/test";
import { LoginPage } from "./pages/loginPage.page";
import { HomePage } from "./pages/homePage.page"


export default class pageManager {
  private readonly page: Page;
  private readonly loginpage: LoginPage;
  private readonly homepage:HomePage;

  constructor(page: Page) {
    this.page = page;
    this.loginpage = new LoginPage(this.page);
    this.homepage = new HomePage(this.page)
  }
  loginPage() {
    return this.loginpage;
  }
  homePage() {
    return this.homepage;
}
  
}

