import { type Locator, type Page } from "@playwright/test";

const avatarBlockLocator = '//*[@id="content"]/h2';

export class UserPage {
  readonly page: Page;
  readonly avatarBlock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.avatarBlock = page.locator(avatarBlockLocator);
  }
}

export default UserPage;
