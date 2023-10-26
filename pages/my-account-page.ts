import { type Locator, type Page } from '@playwright/test';

export class MyAccountPage {

    readonly page: Page;
    readonly informationBlock: Locator;
    readonly userFirstName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.informationBlock = page.locator('.splitcontentleft');
        this.userFirstName = page.locator('#user_firstname');
    }
}

export default MyAccountPage;