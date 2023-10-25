import { type Locator, type Page, expect } from '@playwright/test';

export class LoginPage {

readonly page: Page;
readonly userNameField: Locator;
readonly passwordField: Locator;
readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.userNameField = page.getByLabel('Login');
    this.passwordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', {name: 'login'});
}

async clickLoginButton() {
    await this.loginButton.click();
}

}

export default LoginPage;