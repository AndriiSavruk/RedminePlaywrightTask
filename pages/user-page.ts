import { type Locator, type Page } from '@playwright/test';

export class UserPage {

    readonly page: Page;
    readonly avatarBlock: Locator;

    constructor(page: Page) {
        this.page = page;
        this.avatarBlock = page.locator('//*[@id="content"]/h2');
    }
}

export default UserPage;