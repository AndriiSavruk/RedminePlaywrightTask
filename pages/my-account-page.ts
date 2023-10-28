import { type Locator, type Page } from "@playwright/test";

const informationBlockLocator = ".splitcontentleft";
const userFirstNameLocator = "#user_firstname";

export class MyAccountPage {
  readonly page: Page;
  readonly informationBlock: Locator;
  readonly userFirstName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.informationBlock = page.locator(informationBlockLocator);
    this.userFirstName = page.locator(userFirstNameLocator);
  }
}

export default MyAccountPage;
