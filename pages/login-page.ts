import { type Locator, type Page } from '@playwright/test';

export class LoginPage {

readonly page: Page;
readonly userNameField: Locator;
readonly passwordField: Locator;
readonly loginButton: Locator;
readonly warningMessage: Locator;

constructor(page: Page) {
    this.page = page;
    this.userNameField = page.getByLabel('Login');
    this.passwordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', {name: 'login'});
    this.warningMessage = page.locator('#flash_error');
}

async clickLoginButton() {
    await this.loginButton.click();
}

async loginOnThePage(name: string, pass: string) {
    await this.userNameField.fill(name);
    await this.passwordField.fill(pass);
    await this.clickLoginButton();
}

}

export default LoginPage;