import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {

readonly page: Page;
readonly signInLink: Locator;

constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', {name: 'Sign in'});
}

async clickSignIn() {
    await this.signInLink.click();
}
}

export default HomePage;