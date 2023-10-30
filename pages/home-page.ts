import { type Locator, type Page } from "@playwright/test";

const loggedStringLocator = "#loggedas";
const userActiveLinkLocator = '//*[@id="loggedas"]/a';

export class HomePage {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly loggedString: Locator;
  readonly signOutLink: Locator;
  readonly myAccountLink: Locator;
  readonly userActiveLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign in" });
    this.loggedString = page.locator(loggedStringLocator);
    this.signOutLink = page.getByRole("link", { name: "Sign out" });
    this.myAccountLink = page.getByRole("link", { name: "My account" });
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickSignOut() {
    await this.signOutLink.click();
  }

  async clickMyAccount() {
    await this.myAccountLink.click();
  }

  async clickUserActive() {
    await this.page.locator(userActiveLinkLocator).click();
  }

  // async function clickSignIn(page: Page) {
  //   await this.clickSignIn();
  //   loginPage = new LoginPage(page);
  // }
  
  // async function clickMyAccount(page: Page) {
  //   await homePage.clickMyAccount();
  //   myAccountPage = new MyAccountPage(page);
  // }
  
  // async function clickUserActive(page: Page) {
  //   await homePage.clickUserActive();
  //   userPage = new UserPage(page);
  // }
}

export default HomePage;
